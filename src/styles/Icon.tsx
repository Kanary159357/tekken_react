import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface IconProps {
    icon: IconDefinition;
    color?: string;
    pointer?: boolean;
    hovercolor?: string;
}

const IconWrapper = styled(FontAwesomeIcon)<IconProps>`
    color: ${(props) => props.color || '#ffffff'};
    cursor: ${(props) => props.pointer && 'pointer'};
    &:hover {
        color: ${(props) => props.hovercolor};
    }
`;

const CustomIcon = (props: IconProps) => {
    return <IconWrapper {...props} />;
};

export default React.memo(CustomIcon);
