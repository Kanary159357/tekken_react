import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModalDispatch } from '../../context/ModalContext';
import { useUserData } from '../../context/UserContext';
import useEditValue from '../../hooks/useInputValue';
import { Palette } from '../../styles/theme';
import CustomIcon from '../../styles/components/Icon';
import { TableControl, tagProperty } from './Table';
import TableEdits from './TableEdits';
const TableRow = styled.tr`
    margin-bottom: -1px;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
`;
const TableData = styled.td`
    border-collapse: collapse;
    padding: 10px 10px;
    div {
        white-space: pre-wrap;
    }
`;

interface RowProps {
    row: tagProperty;
    charName: string;
    tag: string;
}

const TableRowData = ({ row, charName, tag }: RowProps) => {
    const [edit, setEdit] = useState(false);
    const { values, handleChange, setValue } = useEditValue(row);

    useEffect(() => {
        setValue(row);
        setEdit(false);
    }, [row, setValue]);

    const modalProps = {
        description: tag,
        oldvalues: row,
        values: values,
        charName: charName,
    };
    const modalDispatch = useModalDispatch();
    const user = useUserData();
    const handleDelete = () => {
        if (user !== null)
            modalDispatch({ type: 'DELETE', payload: modalProps });
        else modalDispatch({ type: 'NOTUSER' });
        setValue(row);
        setEdit(false);
    };
    const handleUpdate = () => {
        console.log(modalProps);
        if (user !== null) modalDispatch({ type: 'EDIT', payload: modalProps });
        else modalDispatch({ type: 'NOTUSER' });
        setValue(row);
        setEdit(false);
    };

    return (
        <TableRow>
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
                    {Object.values(row).map((content: any, i) => (
                        <TableData key={i}>
                            <div>{content}</div>
                        </TableData>
                    ))}

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
        </TableRow>
    );
};

export default React.memo(TableRowData);
