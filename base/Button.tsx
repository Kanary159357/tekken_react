import styled from 'styled-components';
import React from 'react';
import { FontColor, Palette } from '../styles/theme';

interface ButtonProps {
    width?: number;
    height?: number;
    backColor?: string;
    hoverColor?: string;
    color?: string;
}

const ButtonWrapper = styled.div<ButtonProps>`
    width: ${(props) => (props.width ? props.width : '75px')};
    height: ${(props) => (props.height ? props.height : '25px')};
    border-radius: 4px;
    color: ${(props) => (props.color ? props.color : FontColor.white)};
    display: inline-block;
    cursor: pointer;
    text-align: center;
    background: ${(props) =>
        props.backColor ? props.backColor : Palette.gray_2};
    &:hover {
        background: ${(props) =>
            props.hoverColor ? props.hoverColor : Palette.gray_3};
    }
`;

export interface Props
    extends React.HtmlHTMLAttributes<HTMLElement>,
        ButtonProps {
    children: React.ReactNode;
}

const Button = (props: Props) => {
    const { children, ...rest } = props;
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default Button;
