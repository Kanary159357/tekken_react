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

interface ButtonProps {
    width?: number;
    height?: number;
    color?: string;
    children: any;
}

const Button = ({ width, height, color, children }: ButtonProps) => {
    return (
        <ButtonWrapper width={width} height={height} color={color}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;
