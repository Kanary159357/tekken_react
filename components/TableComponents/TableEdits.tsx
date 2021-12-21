import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

import { Palette } from '../../styles/theme';
import CustomIcon from '../base/Icon';

const TableEditBox = styled.td`
    border-collapse: collapse;
    height: 70px;
`;

const Input = styled.textarea`
    width: 100%;
    min-width: 75px;
    display: block;
    height: 150px;
    border: none;
    border-left: 1px solid ${Palette.gray_1};
    margin-left: -1px;
    padding: 10px 5px;
    font-size: 14px;
    resize: none;
    overflow: auto;
    font: inherit;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        width: 0em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(104, 104, 104, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
`;

interface EditProps {
    value: any;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TableEdit = ({ value, name, handleChange }: EditProps) => {
    return (
        <TableEditBox>
            <Input
                placeholder="입력"
                value={value}
                name={name}
                onChange={handleChange}
            />
        </TableEditBox>
    );
};

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
