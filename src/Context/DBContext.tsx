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
        Pattern: [],
        MainMove: [],
    },
    loading: false,
    error: null,
};

type Action =
    | { type: 'LOADED'; payload: CharProps }
    | { type: 'LOADING' }
    | { type: 'ADD' }
    | { type: 'ERROR'; error: any };

export type StateDispatch = Dispatch<Action>;

const DataContext = createContext<StateProps | null>(null);
const DataDispatchContext = createContext<StateDispatch | null>(null);

function reducer(state: StateProps, action: Action) {
    switch (action.type) {
        case 'LOADED':
            return {
                ...state,
                charProps: action.payload,
                loading: false,
            };
        case 'LOADING':
            return {
                ...state,
                loading: true,
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
