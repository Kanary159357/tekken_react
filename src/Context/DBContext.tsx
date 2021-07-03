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
        const ascorder = (
            arr: any[],
            ordering?: (a: any, b: any) => number
        ) => {
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

            data.combo = ascorder(data.combo);
            data.WallCombo = ascorder(data.combo);
            data.Throw = ascorder(data.Throw);
            data.up = ascorder(data.up, frameOrder);
            data.standing = ascorder(data.standing, frameOrder);
            console.log(data.up);
            data.Extrahit = ascorder(data.Extrahit);
            dispatch({ type: 'LOAD', payload: data });
        } catch (err) {
            dispatch({ type: 'ERROR', error: err });
        }
    };
    Loader();
}

export function AddData(tag: string, data: Object, char: string) {
    db.collection('Character')
        .doc(char)
        .update({
            [tag]: firebase.firestore.FieldValue.arrayUnion(data),
        });
}

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

export async function EditData(
    tag: string,
    old: Object,
    newData: Object,
    char: string
) {
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayRemove(newData),
            });
    } catch {}
    try {
        await db
            .collection('Character')
            .doc(char)
            .update({
                [tag]: firebase.firestore.FieldValue.arrayUnion(newData),
            });
    } catch {}
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
