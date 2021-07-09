import { Palette, Device } from '../styles/theme';
import styled from 'styled-components';
import React from 'react';

const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${Palette.overlay};
`;

const Overlay = ({ func }: { func?: () => void }) => {
    return <OverlayWrapper onClick={func} />;
};

export default Overlay;
