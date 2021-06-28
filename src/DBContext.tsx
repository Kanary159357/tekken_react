import React, {
    createContext,
    Dispatch,
    useContext,
    useReducer,
    useState,
} from 'react';
import db from './firebaseInit';
import { CharProps } from './types/CharProps';

const InitialState: CharProps = {
    standing: [],
    up: [],
    combo: [],
    WallCombo: [],
    Throw: [],
    Extrahit: [],
    Info: [],
};

type Action = { type: 'LOAD'; char: string } | { type: 'ADD' };

type StateDispatch = Dispatch<Action>;

const LoadData = (char: string) => {
    console.log('hi');

    let tempData = InitialState;
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
        tempData = data;
    };
    Loader();
    console.log('hi');
    return tempData as CharProps;
};

const DataContext = createContext<CharProps | null>(null);
const DataDispatchContext = createContext<StateDispatch | null>(null);

function reducer(state: any, action: Action) {
    switch (action.type) {
        case 'LOAD':
            return {
                state: LoadData(action.char),
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
