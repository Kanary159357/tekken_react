import db from '../firebaseInit';
import { CharProps } from '../types/CharProps';
import { StateDispatch } from './DBContext';
import {
    arrayRemove,
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    Timestamp,
    updateDoc,
} from 'firebase/firestore/lite';
import { order, sortbyCounter, sortbyKey } from '../utils/charDataSort';

//legacy

export async function LoadData(char: string, dispatch: StateDispatch) {
    dispatch({ type: 'LOADING' });
    try {
        const docRef = doc(db, 'Character', char);

        const data = (await getDoc(docRef)).data() as CharProps;

        const newObj = Object.keys(data).reduce((acc: any, cur: any) => {
            if (cur === 'Info') {
                acc[cur] = data[cur];
                return acc;
            }
            if (
                [
                    'Extrahit',
                    'combo',
                    'WallCombo',
                    'Pattern',
                    'MainMove',
                    'Throw',
                ].includes(cur)
            ) {
                acc[cur] = order(data[cur], cur).sort(sortbyCounter); // 알파벳순 카운터순
            } else if (['standing', 'up'].includes(cur)) {
                acc[cur] = order(data[cur], cur).sort(sortbyKey); //프레임순
            }
            return acc;
        }, {});
        dispatch({ type: 'LOADED', payload: newObj });
    } catch (err) {
        console.error(err);
        dispatch({ type: 'ERROR', error: err });
    }
}

async function UpdateHistory(
    char: string,
    data: Object,
    uid: string,
    type: string
) {
    try {
        const history = {
            char: char,
            data: data,
            time: Timestamp.fromDate(new Date()),
        };
        const docRef = doc(db, 'User', uid);
        const document = (await getDoc(docRef)).data();
        if (document!.exists && document) {
            await updateDoc(docRef, {
                [type]: arrayUnion(history),
            });
        } else {
            await setDoc(doc(db, 'User', uid), { [type]: [history] });
        }
    } catch {
        console.error('유저 히스토리 업데이트 실패');
    }
}
async function getCharData(
    id: string
): Promise<[CharProps | null, Error | null]> {
    try {
        const data = (
            await getDoc(doc(db, 'Character', id))
        ).data() as CharProps;
        return [data, null];
    } catch (error: any) {
        console.error(error);
        return [null, error];
    }
}
async function updateCharData(id: string, data: any, category: string) {
    try {
        await updateDoc(doc(db, 'Character', id), { [category]: data });
    } catch (err) {
        alert(id + '의 정보를 받아오는데 실패했습니다');
        console.error('에러 정보' + err);
    }
}
async function AddFunc(char: string, data: Object, tag: string) {
    let content = arrayUnion(data);
    updateCharData(char, content, tag);
}

async function DeleteFunc(char: string, data: Object, tag: string) {
    let content = arrayRemove(data);
    updateCharData(char, content, tag);
}

async function getUpdateAllChar(fn: any) {
    try {
        const documents = await getDocs(collection(db, 'Character'));
        documents.forEach((document) => {
            fn(document.id);
        });
    } catch (err) {
        alert('캐릭터들의 정보를 받아오는데 실패했습니다');
        console.error('에러 정보' + err);
    }
}

async function UpdateCharsFunc(order: any, category: string) {
    async function UpdatePropsFunc(order: any, id: string, category: string) {
        const [data, error] = await getCharData(id);
        if (error) {
            return;
        }
        const newData = order(data![category]);
        await updateCharData(id, newData, category);
    }

    try {
        const documents = await getDocs(collection(db, 'Character'));
        documents.forEach((document) => {
            UpdatePropsFunc(order, document.id, category);
        });
    } catch (err) {
        alert('캐릭터들의 정보를 받아오는데 실패했습니다');
        console.error('에러 정보' + err);
    }
}

export async function AddData(
    tag: string,
    data: Object,
    char: string,
    uid: string
) {
    await AddFunc(char, data, tag);
    await UpdateHistory(char, data, uid, 'ADD');
}

export async function DeleteData(
    tag: string,
    data: Object,
    char: string,
    uid: string
) {
    await DeleteFunc(char, data, tag);
    await UpdateHistory(char, data, uid, 'Delete');
}

export async function EditData(
    tag: string,
    old: Object,
    newData: Object,
    char: string,
    uid: string
) {
    await DeleteFunc(char, old, tag);
    await AddFunc(char, newData, tag);
    await UpdateHistory(char, { old, newData }, uid, 'Edit');
}

export async function AddProperty(category: string, property: string) {
    const order = (data: Object[]) => {
        return data.map((item) => {
            return item.hasOwnProperty(property)
                ? item
                : { ...item, [property]: '' };
        });
    };
    UpdateCharsFunc(order, category);
}

export async function RemoveProperty(category: string, property: string) {
    const order = (data: any) => {
        return data.map((item: any) => {
            return Object.keys(item)
                .filter((key) => key !== property)
                .reduce((acc: any, cur) => {
                    acc[cur] = item[cur];
                    return acc;
                }, {});
        });
    };
    UpdateCharsFunc(order, category);
}
