import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

import { Palette } from '../../styles/theme';
import CustomIcon from '../../styles/Icon';
import TableEdit from './TableEdit';

interface Props {
    values: Object;
    charName: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    setEdit: (open: boolean) => void;
    handleModal: () => any;
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
    handleModal,
}: Props) => {
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

            <EditTableControl backcolor={Palette.green_1} onClick={handleModal}>
                <CustomIcon icon={faCheck} />
            </EditTableControl>
            <EditTableControl
                backcolor={Palette.red_1}
                onClick={() => setEdit(false)}
            >
                <CustomIcon icon={faTimes} />
            </EditTableControl>
        </>
    );
};

export default TableEdits;
