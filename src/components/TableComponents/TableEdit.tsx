import React from 'react';
import styled from 'styled-components';
import { Palette } from '../../styles/theme';

const TableEditBox = styled.td`
    border-collapse: collapse;
`;

const Input = styled.textarea`
    width: 100%;
    display: block;
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

export default TableEdit;
