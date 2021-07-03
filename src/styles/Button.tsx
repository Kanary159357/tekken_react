import styled from 'styled-components';
import React from 'react';

const ButtonWrapper = styled.div<{
    width?: number;
    height?: number;
    color?: string;
}>`
    width: ${(props) => (props.width ? props.width : '100px')};
    height: ${(props) => (props.height ? props.height : '25px')};
    border-radius: 4px;
    color: #efefef;
    background: ${(props) => (props.color ? props.color : '#eb5e34')};
`;

interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const Button = (props: Props) => {
    const { children, ...rest } = props;
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default Button;
