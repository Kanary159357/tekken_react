import styled from 'styled-components';
import React from 'react';

import ExTabs from '../TableComponents/ExTabs';
import { CharProps } from '../../types/CharProps';
import { Device } from '../../styles/theme';
const MainWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: #fff;

    @media ${Device.desktop} {
        height: calc(100% - 50px);
        width: 100%;
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
