import styled from 'styled-components'
import React from 'react'

import ExTabs from './CharInfo/ExTabs'
const MainWrapper = styled.div`
    display: flex;
    height: 90%;
    width: 70%;
    background: #fff;

    @media all and (max-width: 1140px) {
        height: 93%;
        width: 100%;
    }
`

const Main = ({ data }) => {
    return (
        <MainWrapper>
            <ExTabs Data={data} />
        </MainWrapper>
    )
}

export default Main
