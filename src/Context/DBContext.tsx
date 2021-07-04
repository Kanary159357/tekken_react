import firebase from 'firebase';
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { updateProperty } from 'typescript';
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
            data.Throw = order(data.Throw);
            data.up = order(data.up, frameOrder);
            data.standing = order(data.standing, frameOrder);
            data.Extrahit = order(data.Extrahit);
            dispatch({ type: 'LOAD', payload: data });
        } catch (err) {
            dispatch({ type: 'ERROR', error: err });
        }
    };
    Loader();
}

export const AddData = async (tag: string, data: Object, char: string) => {
    db.collection('Character')
        .doc(char)
        .update({
            [tag]: firebase.firestore.FieldValue.arrayUnion(data),
        });
};

export async function DeleteData(tag: string, data: Object, char: string) {
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayRemove(data),
            });
    } catch {}
}

export async function AddProperty() {
    const arr: any = {
        Extrahit: ['state', 'command'],
        combo: ['state', 'command'],
        WallCombo: ['state', 'command'],
        up: ['frame', 'command', 'damage', 'range', 'hitframe'],
        standing: ['frame', 'command', 'damage', 'range', 'hitframe'],
        Throw: ['command', 'damage', 'frame', 'description', 'way'],
        Info: ['combo', 'dc', 'name', 'punish'],
    };
    const updateProperty = async (id: string) => {
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
        await db.collection('Character').doc(id).update(newData);
    };
    const documents = await db.collection('Character').get();
    documents.forEach((document) => {
        console.log(document.id);
        updateProperty(document.id);
    });
}

export async function EditData(
    tag: string,
    old: Object,
    newData: Object,
    char: string
) {
    DeleteData(tag, old, char);
    AddData(tag, newData, char);
}

export async function tempta() {
    console.log('hi');
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
