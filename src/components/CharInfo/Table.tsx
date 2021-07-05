import React, { useState } from 'react';
import styled from 'styled-components';

import { TableItemProps } from './TabInfo';
import TableRowData from './TableRow';
import { useParams } from 'react-router';
import TableEdits from './TableEdits';
import useEditValue from '../../hooks/useInputValue';
import CustomIcon from '../../styles/Icon';
import { faPalette, faPlus } from '@fortawesome/free-solid-svg-icons';
import customTheme, { palette } from '../../styles/customTheme';

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
`;
export const TableControl = styled.td`
    width: 30px;
    text-align: center;
    cursor: pointer;
`;
const TableAdd = styled.tr`
    border: none;
    width: 100%;
    td {
        text-align: center;
        font-size: 2rem;
        color: red;
    }
`;

const AnimatedIcon = styled(CustomIcon)`
    cursor: pointer;

    &:hover {
        animation: fa-spin 0.5s linear;
    }
    @keyframes fa-spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        25% {
            -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
        }
        50% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        75% {
            -webkit-transform: rotate(5deg);
            transform: rotate(5deg);
        }
        100% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
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
                        <TableAdd>
                            <td onClick={() => setEdit(true)} colSpan={colSpan}>
                                <AnimatedIcon
                                    icon={faPlus}
                                    data-fa-transform="rotate-45"
                                    color={palette.gray_1}
                                    hoverColor={palette.gray_2}
                                />
                            </td>
                        </TableAdd>
                    )}
                </tbody>
            </TableContent>
        </>
    );
};

export default Table;
