import styled from 'styled-components';
import React from 'react';

import ExTabs from './TableComponents/ExTabs';
import { CharProps } from '../types/CharProps';
import { Device, Palette } from '../styles/theme';
const MainWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: ${Palette.white_1};

    @media ${Device.desktop} {
        height: calc(100% - 50px);
    }
    @media ${Device.tablet} {
        height: calc(100% - 100px);
    }
`;

interface MainProps {
    data: CharProps;
}

const Main = ({ data }: MainProps) => {
    return (
        <MainWrapper>
            <ExTabs Data={data} />
        </MainWrapper>
    );
};

export default Main;
