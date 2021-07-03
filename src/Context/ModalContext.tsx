import React, {
    createContext,
    Dispatch,
    useContext,
    useEffect,
    useReducer,
    useState,
} from 'react';

interface ModalProps {
    modalAction: any;
    modalOpen: boolean;
}
type Action = { type: 'SET'; payload: any } | { type: 'ADD'; payload: any };

type ModalDispatch = Dispatch<Action>;
const ModalContext = createContext<ModalProps | null>(null);
const ModalDispatchContext = createContext<ModalDispatch | null>(null);

const initialState = {
    modalAction: 'add',
    modalOpen: false,
};

export function ModalProvider({ children }: { children: React.ReactNode }) {
    return (
        <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
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
