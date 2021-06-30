import React, { useState } from 'react';
import styled from 'styled-components';
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
`;

interface RowProps {
    header: string;
    row: any;
    index: number;
}

const TableRowData = ({ header, row, index }: RowProps) => {
    const [edit, setEdit] = useState(false);
    return (
        <TableRow key={index}>
            {Object.values(row).map((content: any, i) => (
                <TableData key={header + index + i}>{content}</TableData>
            ))}
            <TableControl>E</TableControl>
            <TableControl>R</TableControl>
        </TableRow>
    );
};

export default TableRowData;
