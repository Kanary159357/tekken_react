
import styled from 'styled-components';

import ExTabs from './ExTabs';
const MainWrapper  = styled.div`
    display:flex;
    height: 90%;
    width: 70%;
    background: #fff;

    @media all and (max-width: 1024px){
        height: 80%;
        width: 100%;
    }
`

const CharMain = ()=>{
    return(
        <MainWrapper>
            <ExTabs/>
        </MainWrapper>
    )
}

export default CharMain;