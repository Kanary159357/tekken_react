import React, { useState } from 'react';
import styled from 'styled-components';
import { AddData } from '../../DBContext';
import { CharProps } from '../../types/CharProps';
import { TableItemProps } from './TabInfo';

const TableContent = styled.table`
    width: 90%;
    border: 1px solid #d1d1d1;
    border-collapse: collapse;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 50px;
`;

const TableHead = styled.th`
    text-align: left;
    padding: 5px;
    border-collapse: collapse;
`;
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

const TableEdit = styled.td`
    border-collapse: collapse;
`;

const TableAdd = styled.td`
    visibility: hidden;
`;

const Input = styled.textarea`
    width: 100%;
    display: inline-block;
    border: none;
    resize: none;
    overflow: auto;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        width: 0.3em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(104, 104, 104, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
`;

interface dataProps {
    item: TableItemProps;
}

interface tagProperty {
    command?: string;
    frame?: string;
    damage?: string;
    way?: string;
    state?: string;
    range?: string;
    description?: string;
}

const Table = ({ item }: dataProps) => {
    const { header, columns, data, tag } = item;

    const initialValue: tagProperty = tag.detail.reduce(
        (acc: any, cur) => ((acc[cur] = '2'), acc),
        {}
    );
    const [values, setValue] = useState(initialValue);
    console.log(values);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValue({
            ...values,
            [name]: value,
        });
    };
    return (
        <>
            <h2>{header}</h2>
            <TableContent>
                <thead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHead key={header + index + column}>
                                {column}
                            </TableHead>
                        ))}
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((row: any, index: number) => (
                        <TableRow key={index}>
                            {Object.values(row).map((content: any, i) => (
                                <TableData key={header + index + i}>
                                    {content}
                                </TableData>
                            ))}
                        </TableRow>
                    ))}
                    <TableRow>
                        {Object.entries(values).map(([key, value]) => (
                            <TableEdit>
                                <Input
                                    placeholder="입력"
                                    value={value}
                                    name={key}
                                    onChange={handleChange}
                                />
                            </TableEdit>
                        ))}
                    </TableRow>
                </tbody>
            </TableContent>
        </>
    );
};

export default Table;
