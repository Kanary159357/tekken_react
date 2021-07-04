import React from 'react';
import {
    Action,
    ParaProps,
    useModalDispatch,
} from '../../Context/ModalContext';
import { TableControl } from './Table';
import TableEdit from './TableEdit';

interface Props {
    values: Object;
    charName: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setEdit: (open: boolean) => void;
    modalProps: {
        action: any;
        props: ParaProps;
    };
}

const TableEdits = ({
    values,
    charName,
    handleChange,
    setEdit,
    modalProps,
}: Props) => {
    const dispatch = useModalDispatch();
    const handleModal = () => {
        const { action, props } = modalProps;
        dispatch({ type: action, payload: props });
        setEdit(false);
    };
    return (
        <>
            {Object.entries(values).map(([key, value]) => (
                <TableEdit
                    value={value}
                    name={key}
                    key={key + charName}
                    handleChange={handleChange}
                />
            ))}

            <TableControl onClick={handleModal}>Y</TableControl>
            <TableControl onClick={() => setEdit(false)}>N</TableControl>
        </>
    );
};

export default TableEdits;
