import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { TableItemProps } from './TabInfo';
import TableRowData from './TableRow';
import { useParams } from 'react-router';
import { AddData, useDBDispatch } from '../../Context/DBContext';
import TableEdits from './TableEdits';
import useEditValue from '../../hooks/useInputValue';

const TableContent = styled.table`
    width: 90%;
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
    border: 1px solid ${(props) => props.theme.palette.border_1};

    box-sizing: border-box;
    &:hover {
        background: #efefef;
    }
`;
export const TableControl = styled.td`
    width: 30px;
    text-align: center;
`;
const TableAdd = styled.tr`
    border: none;
    width: 100%;
    td {
        text-align: center;
    }
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

    const initialValue: tagProperty = tag.detail.reduce(
        (acc: any, cur) => ((acc[cur] = ''), acc),
        {}
    );

    const [edit, setEdit] = useState(false);
    const { values, handleChange } = useEditValue(initialValue);

    let { char }: { char: string } = useParams();
    const charName = char.substring(1);
    const colSpan = tag.detail.length;
    const dispatch = useDBDispatch();

    const modalProps = {
        action: 'ADD',
        props: {
            description: tag.description,
            values: values,
            charName: charName,
        },
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
                            key={index}
                            row={row}
                            charName={charName}
                            tag={tag.description}
                            dispatch={dispatch}
                        />
                    ))}
                    {edit ? (
                        <TableRow>
                            <TableEdits
                                setEdit={setEdit}
                                values={values}
                                handleChange={handleChange}
                                charName={charName}
                                modalProps={modalProps}
                            />
                        </TableRow>
                    ) : (
                        <TableAdd onClick={() => setEdit(true)}>
                            <td colSpan={colSpan}>+</td>
                        </TableAdd>
                    )}
                </tbody>
            </TableContent>
        </>
    );
};

export default Table;
