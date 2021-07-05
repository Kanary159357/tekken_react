import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { ParaProps, useModalDispatch } from '../../Context/ModalContext';
import CustomIcon from '../../styles/Icon';
import { TableControl } from './Table';
import TableEdit from './TableEdit';

const ADTableControl = styled(TableControl)`
    background: ${(props) => props.theme.};
`;

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

            <TableControl onClick={handleModal}>
                <CustomIcon icon={faCheck} />
            </TableControl>
            <TableControl onClick={() => setEdit(false)}>
                <CustomIcon icon={faTimes} />
            </TableControl>
        </>
    );
};

export default TableEdits;
