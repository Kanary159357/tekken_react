import React, { useState } from 'react';
import styled from 'styled-components';

import { TableItemProps } from '../Tap/TabInfo';
import TableRow from './TableRow';
import TableEdits from './TableEdits';
import useEditValue from '../../hooks/useInputValue';
import CustomIcon from '../base/Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Device, Palette } from '../../styles/theme';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { isEmpty } from '../../utils/isEmpty';

import useAddCharDataQuery from '../../hooks/query/useAddCharDataQuery';
import useDialog from '../../hooks/useDialog';
import { signInWithGoogle } from '../../firebaseInit';

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
const TableRowBox = styled.tr`
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
    let router = useRouter();
    const { name } = router.query;
    const colSpan = tag.detail.length;
    const [edit, setEdit] = useState(false);
    const initialValue: tagProperty = tag.detail.reduce((acc: any, cur) => {
        acc[cur] = '';
        return acc;
    }, {});
    const { values, setValue, handleChange } = useEditValue(initialValue);
    const { openDialog } = useDialog();

    const user = useSelector((state: RootState) => state.userReducer.user);
    const addQuery = useAddCharDataQuery(
        name as string,
        values,
        user?.uid,
        tag.description
    );
    const handleModal = async () => {
        if (!isEmpty(user)) {
            const hasConfirm = await openDialog({
                content: '추가하시겠습니까',
            });
            if (hasConfirm) {
                addQuery.mutate();
            }
        } else {
            const hasConfirm = await openDialog({
                content: '정보를 수정하기 위해서는 로그인해야합니다',
            });
            if (hasConfirm) {
                signInWithGoogle();
            }
        }
        setEdit(false);
        setValue(initialValue);
    };

    return (
        <TableWrapper>
            <h2>{header}</h2>
            <TableContent>
                <thead>
                    <TableRowBox>
                        {columns.map((column, index) => (
                            <TableHead key={header + index + column}>
                                {column}
                            </TableHead>
                        ))}
                    </TableRowBox>
                </thead>
                <tbody>
                    {data.map((row: any, index: number) => (
                        <TableRow
                            key={index}
                            row={row}
                            charName={name as string}
                            description={tag.description}
                        />
                    ))}
                    {edit ? (
                        <TableRowBox>
                            <TableEdits
                                setEdit={setEdit}
                                values={values}
                                handleChange={handleChange}
                                charName={name as string}
                                handleModal={handleModal}
                            />
                        </TableRowBox>
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
