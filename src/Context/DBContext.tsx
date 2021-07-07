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
        const sortbyKey = () => {
            return function (a: any, b: any) {
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
            const newObj = Object.keys(data).reduce((acc: any, cur: any) => {
                if (['Extrahit', 'combo', 'WallCombo'].includes(cur)) {
                    acc[cur] = order(data[cur]).sort(sortbyCounter);
                } else {
                    if (['standing', 'up'].includes(cur)) {
                        acc[cur] = order(data[cur], frameOrder).sort(
                            sortbyKey()
                        );
                    } else {
                        acc[cur] = order(data[cur]).sort(sortbyKey());
                    }
                }
                return acc;
            }, {});
            dispatch({ type: 'LOAD', payload: newObj });
        } catch (err) {
            console.log(err);
            dispatch({ type: 'ERROR', error: err });
        }
    };
    Loader();
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
            console.log('hihi');
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
export const AddData = async (
    tag: string,
    data: Object,
    char: string,
    uid: string
) => {
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
    await UpdateHistory(char, data, uid, 'ADD');
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
    await UpdateHistory(char, data, uid, 'Delete');
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
        alert('정보를 추가하는데 실패했습니다');
        console.log('에러정보 ' + err);
    }

    await UpdateHistory(char, { old, newData }, uid, 'Edit');
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
