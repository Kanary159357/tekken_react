import {
    faEdit,
    faEraser,
    faTrash,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModalDispatch } from '../../Context/ModalContext';
import useEditValue from '../../hooks/useInputValue';
import customTheme from '../../styles/customTheme';
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
        action: 'EDIT',
        props: {
            description: tag,
            oldvalues: row,
            values: values,
            charName: charName,
        },
    };
    const modalDispatch = useModalDispatch();
    const handleModal = () => {
        const { props } = modalProps;
        modalDispatch({ type: 'DELETE', payload: props });
        setEdit(false);
    };
    const { palette } = customTheme;
    return (
        <TableRow>
            {edit ? (
                <>
                    <TableEdits
                        setEdit={setEdit}
                        values={values}
                        handleChange={handleChange}
                        charName={charName}
                        modalProps={modalProps}
                    />
                </>
            ) : (
                <>
                    {Object.values(row).map((content: any, i) => (
                        <TableData key={i}>{content}</TableData>
                    ))}
                    <TableControl onClick={handleModal}>
                        <CustomIcon
                            icon={faEraser}
                            color={palette.icon_red_1}
                            hoverColor={palette.icon_red_2}
                        ></CustomIcon>
                    </TableControl>
                    <TableControl onClick={() => setEdit(!edit)}>
                        <CustomIcon
                            icon={faEdit}
                            color={palette.icon_green_1}
                            hoverColor={palette.icon_green_2}
                        ></CustomIcon>
                    </TableControl>
                </>
            )}
        </TableRow>
    );
};

export default TableRowData;
