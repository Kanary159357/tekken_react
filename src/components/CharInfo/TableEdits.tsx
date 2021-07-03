import React from 'react';
import { AddData, tempta, useDBDispatch } from '../../Context/DBContext';
import { useModalData, useModalDispatch } from '../../Context/ModalContext';
import { TableControl } from './Table';
import TableEdit from './TableEdit';

interface Props {
    values: Object;
    charName: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setEdit: (open: boolean) => void;
    action: any;
}

const TableEdits = ({
    values,
    charName,
    handleChange,
    setEdit,
    action,
}: Props) => {
    console.log(action);
    const dispatch = useModalDispatch();

    const handleModal = () => {
        dispatch({ type: 'ADD', payload: action });
        dispatch({ type: 'SET', payload: true });
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
