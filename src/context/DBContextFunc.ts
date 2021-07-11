import db from '../firebaseInit';
import { CharProps } from '../types/CharProps';
import firebase from 'firebase';
import { StateDispatch } from './DBContext';

export async function LoadData(char: string, dispatch: StateDispatch) {
    const sortbyKey = (a: any, b: any) => {
        if (a.hasOwnProperty('frame') && b.hasOwnProperty('frame')) {
            if (a['frame'] === b['frame']) {
                return a['command'] < b['command'] ? -1 : 1;
            } else {
                return a['frame'] < b['frame'] ? -1 : 1;
            }
        } else {
            return a['command'] < b['command'] ? -1 : 1;
        }
    };

    const sortbyCounter = (a: any, b: any) => {
        const av = a['command'].includes('(C)');
        const bv = b['command'].includes('(C)');
        if (av === bv) {
            return a['command'] < b['command'] ? -1 : 1;
        } else if (av === false) {
            return -1;
        } else {
            return 1;
        }
    };
    const order = (arr: any[], ordering?: (a: any, b: any) => number) => {
        return arr.map((cur: { [key: string]: string }) =>
            Object.keys(cur)
                .sort(ordering)
                .reduce((obj: any, key: string) => {
                    obj[key] = cur[key];
                    return obj;
                }, {})
        );
    };
    const frameOrder = (a: any, b: any) => {
        const order = [
            'frame',
            'command',
            'damage',
            'range',
            'hitframe',
            'guardframe',
            'state',
        ];
        return order.indexOf(a) - order.indexOf(b);
    };
    dispatch({ type: 'LOADING' });
    try {
        const data = await db
            .collection('Character')
            .doc(char)
            .get()
            .then((snap) => {
                return snap.data() as CharProps;
            });
        const newObj = Object.keys(data).reduce((acc: any, cur: any) => {
            if (['Extrahit', 'combo', 'WallCombo', 'Pattern'].includes(cur)) {
                acc[cur] = order(data[cur]).sort(sortbyCounter); // 알파벳순 카운터순
            } else if (['standing', 'up'].includes(cur)) {
                acc[cur] = order(data[cur], frameOrder).sort(sortbyKey); //프레임순
            } else if (['MainMove', 'Throw'].includes(cur)) {
                acc[cur] = order(data[cur]).sort(sortbyCounter);
            } else {
                acc[cur] = order(data[cur]).sort(sortbyKey);
            }
            return acc;
        }, {});
        dispatch({ type: 'LOADED', payload: newObj });
    } catch (err) {
        console.log(err);
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
            time: firebase.firestore.Timestamp.fromDate(new Date()),
        };
        const document = await db.collection('User').doc(uid).get();
        if (document.exists && document) {
            await document.ref.update({
                [type]: firebase.firestore.FieldValue.arrayUnion(history),
            });
        } else {
            await db
                .collection('User')
                .doc(uid)
                .set({
                    [type]: [history],
                });
        }
    } catch {
        console.log('유저 히스토리 업데이트 실패');
    }
}

async function AddFunc(char: string, data: Object, tag: string) {
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayUnion(data),
            });
    } catch (err) {
        alert('정보를 추가하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }
}

async function DeleteFunc(char: string, data: Object, tag: string) {
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayRemove(data),
            });
    } catch (err) {
        alert('정보를 추가하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }
}
async function UpdateCharsFunc(order: any, category: string) {
    async function UpdatePropsFunc(order: any, id: string, category: string) {
        try {
            const data = await db
                .collection('Character')
                .doc(id)
                .get()
                .then((snap) => {
                    return snap.data() as CharProps;
                });
            const newData = order(data[category]);
            try {
                await db
                    .collection('Character')
                    .doc(id)
                    .update({
                        [category]: newData,
                    });
            } catch (err) {
                alert(id + '의 정보를 받아오는데 실패했습니다');
                console.log('에러 정보' + err);
            }
        } catch (err) {
            alert(id + '의 정보를 업데이트하는데 실패했습니다');
            console.log('에러 정보' + err);
        }
    }

    try {
        const documents = await db.collection('Character').get();
        documents.forEach((document) => {
            UpdatePropsFunc(order, document.id, category);
        });
    } catch (err) {
        alert('캐릭터들의 정보를 받아오는데 실패했습니다');
        console.log('에러 정보' + err);
    }
}

async function UpdatePropsFunc(id: string, property: string) {
    try {
        try {
            await db
                .collection('Character')
                .doc(id)
                .update({
                    [property]: [],
                });
        } catch (err) {
            alert(id + '의 정보를 받아오는데 실패했습니다');
            console.log('에러 정보' + err);
        }
    } catch (err) {
        alert(id + '의 정보를 업데이트하는데 실패했습니다');
        console.log('에러 정보' + err);
    }
}

export async function Rename() {
    const data = await db
        .collection('Character')
        .doc('Cladio')
        .get()
        .then((snap) => {
            return snap.data() as CharProps;
        });

    await db.collection('Character').doc('Claudio').set(data);
}

export async function AddNewCharacter() {
    const name = 'Leroy';
    try {
        await db.collection('Character').doc(name).set({});
        const arr = [
            'MainMove',
            'standing',
            'up',
            'Throw',
            'combo',
            'WallCombo',
            'Extrahit',
            'Pattern',
            'Info',
        ];
        arr.forEach((item) => {
            UpdatePropsFunc(name, item);
        });
    } catch (err) {
        alert('실패');
    }
}

export async function AddNewProps() {
    try {
        const documents = await db.collection('Character').get();
        documents.forEach((document) => {
            UpdatePropsFunc(document.id, 'MainMove');
        });
    } catch (err) {
        alert('캐릭터들의 정보를 받아오는데 실패했습니다');
        console.log('에러 정보' + err);
    }
}

export const AddData = async (
    tag: string,
    data: Object,
    char: string,
    uid: string
) => {
    console.log(tag, data, char, uid);
    await AddFunc(char, data, tag);
    await UpdateHistory(char, data, uid, 'ADD');
};

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
