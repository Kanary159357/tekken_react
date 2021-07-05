import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModalDispatch } from '../../Context/ModalContext';
import useEditValue from '../../hooks/useInputValue';
import { tagProperty } from './Table';
import TableEdits from './TableEdits';
const TableRow = styled.tr`
    margin-bottom: -1px;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
    &:hover {
        background: #efefef;
    }
`;
const TableData = styled.td`
    border-collapse: collapse;
    padding: 10px 5px;
`;
const TableControl = styled.td`
    width: 30px;
    text-align: center;
`;

interface RowProps {
    row: tagProperty;
    charName: string;
    tag: string;
    dispatch: React.Dispatch<any>;
}

const TableRowData = ({ row, charName, tag, dispatch }: RowProps) => {
    const [edit, setEdit] = useState(false);
    const { values, handleChange, setValue } = useEditValue(row);

    useEffect(() => {
        setValue(row);
        setEdit(false);
    }, [row]);

    const modalProps = {
        action: 'EDIT',
        props: {
            description: tag,
            oldvalues: row,
            values: values,
            charName: charName,
        },
    };
    const modalDispatch = useModalDispatch();
    const handleModal = () => {
        const { props } = modalProps;
        modalDispatch({ type: 'DELETE', payload: props });
        setEdit(false);
    };

    return (
        <TableRow>
            {edit ? (
                <>
                    <TableEdits
                        setEdit={setEdit}
                        values={values}
                        handleChange={handleChange}
                        charName={charName}
                        modalProps={modalProps}
                    />
                </>
            ) : (
                <>
                    {Object.values(row).map((content: any, i) => (
                        <TableData key={i}>{content}</TableData>
                    ))}
                    <TableControl onClick={handleModal}>R</TableControl>
                    <TableControl onClick={() => setEdit(!edit)}>
                        E
                    </TableControl>
                </>
            )}
        </TableRow>
    );
};

export default TableRowData;
