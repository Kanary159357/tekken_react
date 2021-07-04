import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export interface ParaProps {
    description: string;
    values: Object;
    oldvalues?: Object;
    charName: string;
}

interface ModalProps {
    modalAction: any;
    props: ParaProps;
    open: boolean;
}

function reducer(state: ModalProps, action: Action) {
    switch (action.type) {
        case 'SET':
            return {
                ...state,
                open: action.payload,
            };
        case 'ADD':
            return {
                modalAction: 'add',
                props: action.payload,
                open: true,
            };
        case 'DELETE':
            return {
                modalAction: 'delete',
                props: action.payload,
                open: true,
            };
        case 'EDIT':
            return {
                modalAction: 'edit',
                props: action.payload,
                open: true,
            };
    }
}

export type Action =
    | { type: 'SET'; payload: any }
    | { type: 'ADD'; payload: ParaProps }
    | { type: 'DELETE'; payload: ParaProps }
    | { type: 'EDIT'; payload: ParaProps };

type ModalDispatch = Dispatch<Action>;

const ModalContext = createContext<ModalProps | null>(null);
const ModalDispatchContext = createContext<ModalDispatch | null>(null);
const initialState: ModalProps = {
    modalAction: 'add',
    props: {
        description: '',
        values: '',
        charName: '',
    },
    open: false,
};

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ModalContext.Provider value={state}>
            <ModalDispatchContext.Provider value={dispatch}>
                {children}
            </ModalDispatchContext.Provider>
        </ModalContext.Provider>
    );
}

export function useModalData() {
    const data = useContext(ModalContext);
    if (!data) throw new Error('Cannot find Provider');
    return data;
}

export function useModalDispatch() {
    const data = useContext(ModalDispatchContext);
    if (!data) throw new Error('Cannot find Provider');
    return data;
}
