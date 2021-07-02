import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DeleteData, EditData } from '../../Context/DBContext';
import { tagProperty } from './Table';
import TableEdit from './TableEdit';
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
    header: string;
    row: tagProperty;
    index: number;
    charName: string;
    tag: string;
}

const TableRowData = ({ header, row, index, charName, tag }: RowProps) => {
    const [edit, setEdit] = useState(false);
    const [values, setValue] = useState(row);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(values);
        setValue({
            ...values,
            [name]: value,
        });
    };

    useEffect(() => {
        setValue(row);
    }, [row]);

    return (
        <TableRow key={index}>
            {edit ? (
                <>
                    {Object.entries(values).map(([key, value], index) => (
                        <TableEdit
                            name={key}
                            key={index}
                            value={value}
                            handleChange={handleChange}
                        />
                    ))}

                    <TableControl
                        onClick={() => EditData(tag, row, values, charName)}
                    >
                        Y
                    </TableControl>
                    <TableControl onClick={() => setEdit(false)}>
                        N
                    </TableControl>
                </>
            ) : (
                <>
                    {Object.values(row).map((content: any, i) => (
                        <TableData key={header + index + i}>
                            {content}
                        </TableData>
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
