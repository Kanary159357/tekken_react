import React from 'react';
import CharInfo from '../components/CharInfo'
import CharMain from '../components/CharMain'
import styled from 'styled-components'
import JinData from '../info/JinData.json';
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

const Jin = ({data})=>{
    return(
        <CharWrap>
            <CharInfo data = {data.Info}/>
            <CharMain data ={data}/>
        </CharWrap>
    )
}

export default Jin