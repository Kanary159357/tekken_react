import React, { createContext, useContext, useEffect, useState } from 'react';

interface ModalProps {
    modalOpen: boolean;
    setModal: any;
}

const ModalContext = createContext<ModalProps | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [modalOpen, setModal] = useState(true);

    useEffect(() => {
        console.log(modalOpen);
    }, [modalOpen]);
    return (
        <ModalContext.Provider value={{ modalOpen, setModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModalData() {
    const data = useContext(ModalContext);
    if (!data) throw new Error('Cannot find Provider');
    return data;
}
