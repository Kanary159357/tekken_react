import React, { useState } from 'react';
import styled from 'styled-components';

import { TableItemProps } from './TabInfo';
import TableRowData from './TableRow';
import { useParams } from 'react-router';
import TableEdits from './TableEdits';
import useEditValue from '../../hooks/useInputValue';
import CustomIcon from '../../styles/Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Device, Palette } from '../../styles/theme';
import { useUserData } from '../../Context/UserContext';
import { useModalDispatch } from '../../Context/ModalContext';

const TableContent = styled.table`
    width: 90%;
    border-collapse: collapse;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
    @media ${Device.tablet} {
        width: 100%;
    }
`;

const TableHead = styled.th`
    text-align: left;
    padding: 5px;
    border-collapse: collapse;
`;
const TableRow = styled.tr`
    margin-bottom: -1px;
    border: 1px solid ${Palette.border_1};
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
    let { char }: { char: string } = useParams();
    const charName = char.substring(1);
    const colSpan = tag.detail.length;
    const user = useUserData();
    const modalDispatch = useModalDispatch();
    const [edit, setEdit] = useState(false);
    const { values, setValue, handleChange } = useEditValue(initialValue);

    const modalProps = {
        description: tag.description,
        values: values,
        charName: charName,
    };

    const handleModal = () => {
        if (user !== null) {
            modalDispatch({ type: 'ADD', payload: modalProps });
        }
        setEdit(false);
        setValue(initialValue);
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
                                handleModal={handleModal}
                            />
                        </TableRow>
                    ) : (
                        <TableAdd>
                            <td onClick={() => setEdit(true)} colSpan={colSpan}>
                                <CustomIcon
                                    icon={faPlus}
                                    color={Palette.gray_1}
                                    hovercolor={Palette.gray_2}
                                />
                            </td>
                        </TableAdd>
                    )}
                </tbody>
            </TableContent>
        </>
    );
};

export default React.memo(Table);
