import React from 'react';
import styled from 'styled-components';
import { Standing, Up } from '../../types/CharProps';

const TableContent = styled.table`
    width: 90%;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 0 auto;
    margin-bottom: 50px;
`;

const TableHead = styled.th`
    text-align: left;
    padding: 5px;
    border: 1px solid black;
    border-collapse: collapse;
`;
const TableRow = styled.tr`
    padding: 5px;
`;
const TableData = styled.td`
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
`;

interface dataProps {
    header: string;
    columns: string[];
    data: any;
}

const Table = ({ header, columns, data }: dataProps) => {
    return (
        <>
            <h2>{header}</h2>
            <TableContent>
                <thead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHead key={header + column}>
                                {column}
                            </TableHead>
                        ))}
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((row: any, index: number) => (
                        <TableRow key={index}>
                            {Object.values(row).map((content: any, i) => (
                                <TableData key={i}>{content}</TableData>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </TableContent>
        </>
    );
};

export default Table;
