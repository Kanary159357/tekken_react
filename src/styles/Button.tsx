import styled from 'styled-components';
import React from 'react';

const ButtonWrapper = styled.div<{
    width?: number;
    height?: number;
    backColor?: string;
}>`
    width: ${(props) => (props.width ? props.width : '75px')};
    height: ${(props) => (props.height ? props.height : '25px')};
    border-radius: 4px;
    color: #efefef;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    background: ${(props) => (props.backColor ? props.backColor : '#eb5e34')};
`;

export interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    backColor?: string;
}

const Button = (props: Props) => {
    const { children, ...rest } = props;
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default Button;
