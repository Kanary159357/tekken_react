import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DeleteData, EditData } from '../../Context/DBContext';
import useEditValue from '../../hooks/useInputValue';
import { tagProperty } from './Table';
import TableEdit from './TableEdit';
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

    const RowEdit = () => {
        EditData(tag, row, values, charName, dispatch);
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
                        action={RowEdit}
                    />
                </>
            ) : (
                <>
                    {Object.values(row).map((content: any, i) => (
                        <TableData key={i}>{content}</TableData>
                    ))}
                    <TableControl
                        onClick={() => DeleteData(tag, row, charName)}
                    >
                        R
                    </TableControl>
                    <TableControl onClick={() => setEdit(!edit)}>
                        E
                    </TableControl>
                </>
            )}
        </TableRow>
    );
};

export default TableRowData;
