import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TableItemProps } from './TabInfo';
import TableRowData from './TableRow';
import TableEdit from './TableEdit';
import { useParams } from 'react-router';
import { AddData } from '../../DBContext';

const TableContent = styled.table`
    width: 90%;
    border: 1px solid #d1d1d1;
    border-collapse: collapse;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
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
const TableControl = styled.td`
    width: 30px;
    text-align: center;
`;
const TableAdd = styled.div`
    text-align: center;
`;

interface dataProps {
    item: TableItemProps;
}

export interface tagProperty {
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

    const [edit, setEdit] = useState(false);
    const initialValue: tagProperty = tag.detail.reduce(
        (acc: any, cur) => ((acc[cur] = ''), acc),
        {}
    );
    const [values, setValue] = useState(initialValue);
    let { char }: { char: string } = useParams();
    const charName = char.substring(1);
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
                        <TableRowData
                            key={index + charName}
                            row={row}
                            index={index}
                            header={header}
                            charName={charName}
                            tag={tag.description}
                        />
                    ))}
                    {edit && (
                        <TableRow>
                            {Object.entries(values).map(([key, value]) => (
                                <TableEdit
                                    value={value}
                                    name={key}
                                    key={key + charName}
                                    handleChange={handleChange}
                                />
                            ))}

                            <TableControl
                                onClick={() =>
                                    AddData(tag.description, values, charName)
                                }
                            >
                                Y
                            </TableControl>
                            <TableControl onClick={() => setEdit(false)}>
                                N
                            </TableControl>
                        </TableRow>
                    )}
                </tbody>
            </TableContent>
            {!edit && <TableAdd onClick={() => setEdit(true)}>+</TableAdd>}
        </>
    );
};

export default Table;
