import styled from 'styled-components';
import React from 'react';

import ExTabs from '../../CharInfo/ExTabs';
import { CharProps } from '../../../types/CharProps';
const MainWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: #fff;

    @media all and (max-width: 1140px) {
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
