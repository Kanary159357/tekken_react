import React from 'react';
import CharInfo from '../components/CharInfo'
import CharMain from '../components/CharMain'
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

const Jin = ()=>{
    return(
        <CharWrap>
            <CharInfo/>
            <CharMain/>
        </CharWrap>
    )
}

export default Jin