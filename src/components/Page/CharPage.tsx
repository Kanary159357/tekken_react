import React from 'react'
import Info from '../pageComponents/Info'
import Main from '../pageComponents/Main'
import styled from 'styled-components'
import { CharProps } from '../../types/CharProps'
import { InfoProps } from '../../types/CharProps'
const CharWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1140px) {
        flex-direction: column;
    }
`

interface PageProps {
    data: any
}

const Page = ({ data }: PageProps) => {
    return (
        <CharWrap>
            <Info data={data.Info} />
            <Main data={data} />
        </CharWrap>
    )
}

export default Page
