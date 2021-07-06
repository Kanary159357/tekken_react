import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ParaProps, useModalDispatch } from '../../Context/ModalContext';
import { useUserData } from '../../Context/UserContext';
import customTheme from '../../styles/customTheme';
import CustomIcon from '../../styles/Icon';
import { TableControl } from './Table';
import TableEdit from './TableEdit';

interface Props {
    values: Object;
    charName: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setEdit: (open: boolean) => void;
    setValue: (value: any) => void;
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
    setValue,
    modalProps,
}: Props) => {
    const user = useUserData();
    console.log(user);
    const dispatch = useModalDispatch();
    const handleModal = () => {
        const { action, props } = modalProps;
        if (user !== null) {
            console.log(null);
            dispatch({ type: action, payload: props });
        } else {
            dispatch({ type: 'NOTUSER' });
        }
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
