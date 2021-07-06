import firebase from 'firebase';
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import db from '../firebaseInit';
import { CharProps } from '../types/CharProps';

interface StateProps {
    charProps: CharProps;
    loading: boolean;
    error: any;
}

const InitialState: StateProps = {
    charProps: {
        standing: [],
        up: [],
        combo: [],
        WallCombo: [],
        Throw: [],
        Extrahit: [],
        Info: [],
    },
    loading: false,
    error: null,
};

type Action =
    | { type: 'LOAD'; payload: any }
    | { type: 'ADD' }
    | { type: 'ERROR'; error: any };

type StateDispatch = Dispatch<Action>;

const DataContext = createContext<StateProps | null>(null);
const DataDispatchContext = createContext<StateDispatch | null>(null);

export function LoadData(char: string, dispatch: React.Dispatch<any>) {
    const Loader = async () => {
        const sortbyKey = (key: any) => {
            return function (a: any, b: any) {
                return a[key] < b[key] ? -1 : 1;
            };
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
                'state',
            ];
            return order.indexOf(a) - order.indexOf(b);
        };

        try {
            const data = await db
                .collection('Character')
                .doc(char)
                .get()
                .then((snap) => {
                    return snap.data() as CharProps;
                });

            data.combo = order(data.combo);
            data.WallCombo = order(data.combo);
            data.Throw = order(data.Throw).sort();
            data.up = order(data.up, frameOrder).sort(sortbyKey('frame'));
            data.standing = order(data.standing, frameOrder).sort(
                sortbyKey('frame')
            );
            data.Extrahit = order(data.Extrahit);
            dispatch({ type: 'LOAD', payload: data });
        } catch (err) {
            dispatch({ type: 'ERROR', error: err });
        }
    };
    Loader();
}

export const AddData = async (
    tag: string,
    data: Object,
    char: string,
    uid: string
) => {
    console.log(uid);
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
    try {
        const history = {
            char: char,
            data: data,
            time: firebase.firestore.Timestamp,
        };
        const document = await db.collection('User').doc(uid).get();
        if (document.exists && document) {
            console.log('hi');
            await document.ref.update({
                ADD: firebase.firestore.FieldValue.arrayUnion(history),
            });
        } else {
            await db
                .collection('User')
                .doc(uid)
                .set({
                    ADD: firebase.firestore.FieldValue.arrayUnion(history),
                });
        }
    } catch {}
};

export async function DeleteData(
    tag: string,
    data: Object,
    char: string,
    uid: string
) {
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayRemove(data),
            });
    } catch (err) {
        alert('정보를 삭제하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }
}

export async function EditData(
    tag: string,
    old: Object,
    newData: Object,
    char: string,
    uid: string
) {
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayRemove(old),
            });
    } catch (err) {
        alert('정보를 삭제하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }
    try {
        db.collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayUnion(newData),
            });
    } catch (err) {
        alert('정보를 삭제하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }
    try {
        db.collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayUnion(newData),
            });
    } catch (err) {
        alert('정보를 삭제하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }
}

export async function AddProperty() {
    const arr: any = {
        Extrahit: ['state', 'command'],
        combo: ['state', 'command'],
        WallCombo: ['state', 'command'],
        up: ['frame', 'command', 'damage', 'range', 'hitframe', 'state'],
        standing: ['frame', 'command', 'damage', 'range', 'hitframe', 'state'],
        Throw: ['command', 'damage', 'frame', 'state', 'way'],
        Info: ['combo', 'dc', 'name', 'punish'],
    };
    const updateProperty = async (id: string) => {
        try {
            const data = await db
                .collection('Character')
                .doc(id)
                .get()
                .then((snap) => {
                    return snap.data() as CharProps;
                });
            const newData = Object.keys(data).reduce((acc: any, cur) => {
                acc[cur] = data[cur].map((content: any) => {
                    arr[cur].forEach((item: any) => {
                        content = !content.hasOwnProperty(item)
                            ? { ...content, [item]: '' }
                            : content;
                    });
                    return content;
                });
                return acc;
            }, {});
            try {
                await db.collection('Character').doc(id).update(newData);
            } catch (err) {
                alert(id + '의 정보를 받아오는데 실패했습니다');
                console.log('에러 정보' + err);
            }
        } catch (err) {
            alert(id + '의 정보를 업데이트하는데 실패했습니다');
            console.log('에러 정보' + err);
        }
    };
    try {
        const documents = await db.collection('Character').get();

        documents.forEach((document) => {
            updateProperty(document.id);
        });
    } catch (err) {
        alert('캐릭터들의 정보를 받아오는데 실패했습니다');
        console.log('에러 정보' + err);
    }
}

export async function RemoveProperty(category: string, property: string) {
    const deleteProperty = async (id: string) => {
        try {
            const data = await db
                .collection('Character')
                .doc(id)
                .get()
                .then((snap) => {
                    return snap.data() as CharProps;
                });
            const delObj = data[category];
            const newData = delObj.map((item: any) => {
                return Object.keys(item)
                    .filter((key) => key !== property)
                    .reduce((acc: any, cur) => {
                        acc[cur] = item[cur];
                        return acc;
                    }, {});
            });
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
    };
    try {
        const documents = await db.collection('Character').get();

        documents.forEach((document) => {
            deleteProperty(document.id);
        });
    } catch (err) {
        alert('캐릭터들의 정보를 받아오는데 실패했습니다');
        console.log('에러 정보' + err);
    }
}

function reducer(state: StateProps, action: Action) {
    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                charProps: action.payload,
            };
        case 'ERROR':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export function StateProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
        <DataContext.Provider value={state}>
            <DataDispatchContext.Provider value={dispatch}>
                {children}
            </DataDispatchContext.Provider>
        </DataContext.Provider>
    );
}
export function useDBData() {
    const data = useContext(DataContext);
    if (!data) throw new Error('Cannot find Provider');
    return data;
}
export function useDBDispatch() {
    const dispatch = useContext(DataDispatchContext);
    if (!dispatch) throw new Error('Cannot find Provider');
    return dispatch;
}
