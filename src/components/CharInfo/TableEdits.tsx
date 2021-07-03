import React from 'react';
import { useModalData } from '../../Context/ModalContext';
import { TableControl } from './Table';
import TableEdit from './TableEdit';

interface Props {
    values: Object;
    charName: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setEdit: (open: boolean) => void;
    func: any;
}

const TableEdits = ({ values, charName, handleChange, setEdit }: Props) => {
    const { setModal } = useModalData();

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

            <TableControl
                onClick={() => {
                    setModal(true);
                }}
            >
                Y
            </TableControl>
            <TableControl onClick={() => setEdit(false)}>N</TableControl>
        </>
    );
};

export default TableEdits;
