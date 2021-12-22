import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { signInWithGoogle } from '../../firebaseInit';
import useDeleteCharDataQuery from '../../hooks/query/useDeleteCharDataQuery';
import useEditCharDataQuery from '../../hooks/query/useEditCharDataQuery';
import useDialog from '../../hooks/useDialog';
import useEditValue from '../../hooks/useInputValue';
import { RootState } from '../../store/store';
import { Palette, Device } from '../../styles/theme';
import { isEmpty } from '../../utils/isEmpty';
import CustomIcon from '../base/Icon';
import { TableControl, tagProperty } from './Table';
import TableEdits from './TableEdits';
const TableRowBox = styled.tr`
    margin-bottom: -1px;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
    height: 50px;
`;
const TableDataBox = styled.td<{ isState: boolean }>`
    border-collapse: collapse;
    padding: 10px;
    overflow: hidden;
    max-width: 350px;

    min-width: ${(props) => (props.isState ? '200px' : '50px')};
    @media ${Device.mobile} {
        padding: 2px;
    }
    div {
        height: 100%;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        vertical-align: middle;
        word-break: normal;
    }
`;

const TableData = ({
    content,
    isState,
}: {
    content: string;
    isState: boolean;
}) => {
    return (
        <TableDataBox isState={isState}>
            <div>{content}</div>
        </TableDataBox>
    );
};

interface RowProps {
    row: tagProperty;
    charName: string;
    description: string;
}

const TableRow = ({ row, charName, description }: RowProps) => {
    const [edit, setEdit] = useState(false);
    const { values, handleChange, setValue } = useEditValue(row);
    useEffect(() => {
        setValue(row);
        setEdit(false);
    }, [row, setValue]);

    const user = useSelector((state: RootState) => state.userReducer.user);
    const { openDialog } = useDialog();
    const deleteQuery = useDeleteCharDataQuery(
        charName,
        values,
        user?.uid as string,
        description
    );
    const editQuery = useEditCharDataQuery(
        charName,
        row!,
        values,
        user?.uid as string,
        description
    );
    const handleDelete = async () => {
        if (!isEmpty(user)) {
            const hasConfirm = await openDialog({
                content: '삭제하시겠습니까',
            });
            if (hasConfirm) {
                deleteQuery.mutate();
            }
        } else {
            const hasConfirm = await openDialog({
                content: '정보를 수정하기 위해서는 로그인해야합니다',
            });
            if (hasConfirm) {
                signInWithGoogle();
            }
        }
        setValue(row);
        setEdit(false);
    };
    const handleUpdate = async () => {
        if (!isEmpty(user)) {
            const hasConfirm = await openDialog({
                content: '수정하시겠습니까',
            });
            if (hasConfirm) {
                editQuery.mutate();
            }
        } else {
            const hasConfirm = await openDialog({
                content: '정보를 수정하기 위해서는 로그인해야합니다',
            });
            if (hasConfirm) {
                signInWithGoogle();
            }
        }
        setValue(row);
        setEdit(false);
    };

    return (
        <TableRowBox>
            {edit ? (
                <>
                    <TableEdits
                        setEdit={setEdit}
                        values={values}
                        handleChange={handleChange}
                        charName={charName}
                        handleModal={handleUpdate}
                    />
                </>
            ) : (
                <>
                    {Object.entries(row).map(([key, value], i) => {
                        return (
                            <TableData
                                key={i}
                                content={value}
                                isState={false}
                            />
                        );
                    })}

                    <TableControl onClick={() => setEdit(!edit)}>
                        <CustomIcon
                            icon={faEdit}
                            color={Palette.green_1}
                            hovercolor={Palette.green_2}
                        ></CustomIcon>
                    </TableControl>
                    <TableControl onClick={handleDelete}>
                        <CustomIcon
                            icon={faEraser}
                            color={Palette.red_1}
                            hovercolor={Palette.red_2}
                        ></CustomIcon>
                    </TableControl>
                </>
            )}
        </TableRowBox>
    );
};

export default React.memo(TableRow);
