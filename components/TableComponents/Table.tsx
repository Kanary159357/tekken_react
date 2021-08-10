import React, { useState } from 'react';
import styled from 'styled-components';

import { TableItemProps } from '../TapComponents/TabInfo';
import TableRowData from './TableRow';
import TableEdits from './TableEdits';
import useEditValue from '../../hooks/useInputValue';
import CustomIcon from '../../base/Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Device, Palette } from '../../styles/theme';
import { useUserData } from '../../context/UserContext';
import { useModalDispatch } from '../../context/ModalContext';
import { useRouter } from 'next/dist/client/router';

const TableWrapper = styled.div`
    margin-bottom: 20px;
    @media ${Device.mobile} {
        font-size: 15px;
    }
`;

const TableContent = styled.table`
    width: 90%;
    border-collapse: collapse;
    border-radius: 10px;
    margin: 10px auto;

    @media ${Device.desktop} {
        width: 100%;
    }
    @media ${Device.mobile} {
        width: 720px;
    }
`;

const TableHead = styled.th`
    text-align: left;
    padding: 10px;
    border-collapse: collapse;
    @media ${Device.mobile} {
        padding: 5px;
    }
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
    const initialValue: tagProperty = tag.detail.reduce((acc: any, cur) => {
        acc[cur] = '';
        return acc;
    }, {});
    let router = useRouter();
    const { name } = router.query;
    const colSpan = tag.detail.length;
    const modalDispatch = useModalDispatch();
    const [edit, setEdit] = useState(false);
    const { values, setValue, handleChange } = useEditValue(initialValue);
    const modalProps = {
        description: tag.description,
        values: values,
        charName: name as string,
    };
    const user = useUserData();

    const handleModal = () => {
        if (user !== null) {
            modalDispatch({ type: 'ADD', payload: modalProps });
        } else {
            modalDispatch({ type: 'NOTUSER' });
        }
        setEdit(false);
        setValue(initialValue);
    };

    return (
        <TableWrapper>
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
                            charName={name as string}
                            tag={tag.description}
                        />
                    ))}
                    {edit ? (
                        <TableRow>
                            <TableEdits
                                setEdit={setEdit}
                                values={values}
                                handleChange={handleChange}
                                charName={name as string}
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
        </TableWrapper>
    );
};

export default React.memo(Table);
