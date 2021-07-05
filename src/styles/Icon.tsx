import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Props } from 'react';
import styled from 'styled-components';

interface IconProps {
    icon: IconDefinition;
    color?: string;
    hoverColor?: string;
}

const IconWrapper = styled(FontAwesomeIcon)<IconProps>`
    &:hover {
        color: ${(props) => props.hoverColor};
    }
`;

const CustomIcon = (props: IconProps) => {
    return <IconWrapper {...props} />;
};

export default CustomIcon;
