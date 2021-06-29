import firebase from 'firebase';
import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import db from './firebaseInit';
import { CharProps } from './types/CharProps';

interface StateProps {
    charProps: CharProps;
    loading: boolean;
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
};

type Action = { type: 'LOAD'; payload: any } | { type: 'ADD' };

type StateDispatch = Dispatch<Action>;

const DataContext = createContext<StateProps | null>(null);
const DataDispatchContext = createContext<StateDispatch | null>(null);

function reducer(state: StateProps, action: Action) {
    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                charProps: action.payload,
            };
        default:
            return state;
    }
}

export function LoadData(char: string, dispatch: React.Dispatch<any>) {
    const Loader = async () => {
        const ascorder = (arr: any[]) => {
            return arr.map((cur: { [key: string]: string }) =>
                Object.keys(cur)
                    .sort()
                    .reduce((obj: any, key: string) => {
                        obj[key] = cur[key];
                        return obj;
                    }, {})
            );
        };
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
        data.up = ascorder(data.up);
        data.standing = ascorder(data.standing);
        data.Extrahit = ascorder(data.Extrahit);
        dispatch({ type: 'LOAD', payload: data });
    };
    Loader();
}

export function AddData(tag: string, data: Object) {
    db.collection('Character')
        .doc('Akuma')
        .update({
            Extrahit: firebase.firestore.FieldValue.arrayUnion({
                command: '엄마럭키',
                state: '아빠럭키',
            }),
        });
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
