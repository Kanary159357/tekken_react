import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ParaProps, useModalDispatch } from '../../Context/ModalContext';
import customTheme from '../../styles/customTheme';
import CustomIcon from '../../styles/Icon';
import { TableControl } from './Table';
import TableEdit from './TableEdit';

interface Props {
    values: Object;
    charName: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setEdit: (open: boolean) => void;
    modalProps: {
        action: any;
        props: ParaProps;
    };
}

const EditTableControl = styled.td<{ backcolor?: string }>`
    width: 30px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.backcolor};
`;

const TableEdits = ({
    values,
    charName,
    handleChange,
    setEdit,
    modalProps,
}: Props) => {
    const dispatch = useModalDispatch();
    const handleModal = () => {
        const { action, props } = modalProps;
        dispatch({ type: action, payload: props });
        setEdit(false);
    };
    return (
        <>
            {Object.entries(values).map(([key, value]) => (
                <TableEdit
                    value={value}
                    name={key}
                    key={key + charName}
                    handleChange={handleChange}
                />
            ))}

            <EditTableControl
                backcolor={customTheme.palette.icon_green_1}
                onClick={handleModal}
            >
                <CustomIcon icon={faCheck} />
            </EditTableControl>
            <EditTableControl
                backcolor={customTheme.palette.icon_red_1}
                onClick={() => setEdit(false)}
            >
                <CustomIcon icon={faTimes} />
            </EditTableControl>
        </>
    );
};

export default TableEdits;
