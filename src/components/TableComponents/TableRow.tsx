import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModalDispatch } from '../../Context/ModalContext';
import { useUserData } from '../../Context/UserContext';
import useEditValue from '../../hooks/useInputValue';
import { Palette } from '../../styles/theme';
import CustomIcon from '../../styles/Icon';
import { TableControl, tagProperty } from './Table';
import TableEdits from './TableEdits';
const TableRow = styled.tr`
    margin-bottom: -1px;
    border-bottom: 1px solid #d1d1d1;
    box-sizing: border-box;
`;
const TableData = styled.td`
    border-collapse: collapse;
    padding: 10px 5px;
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
    }, [row]);

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
                        <TableData key={i}>{content}</TableData>
                    ))}

                    <TableControl onClick={() => setEdit(!edit)}>
                        <CustomIcon
                            icon={faEdit}
                            color={Palette.icon_green_1}
                            hovercolor={Palette.icon_green_2}
                        ></CustomIcon>
                    </TableControl>
                    <TableControl onClick={handleDelete}>
                        <CustomIcon
                            icon={faEraser}
                            color={Palette.icon_red_1}
                            hovercolor={Palette.icon_red_2}
                        ></CustomIcon>
                    </TableControl>
                </>
            )}
        </TableRow>
    );
};

export default React.memo(TableRowData);
