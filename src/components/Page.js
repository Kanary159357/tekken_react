import React from 'react';
import Info from './Info'
import Main from './Main'
import styled from 'styled-components'

const CharWrap = styled.div`
    display:flex;
    width: 100%;
    height:100%;
    justify-content:center;
    align-items: center;
    @media all and (max-width:1024px){
        flex-direction:column;
    }
`

const Page = ({data})=>{
    return(
        <CharWrap>
            <Info data={data.Info}/>
            <Main data={data}/>
        </CharWrap>
    )
}

export default Page