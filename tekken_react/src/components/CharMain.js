
import styled from 'styled-components';

import ExTabs from './ExTabs';
const MainWrapper  = styled.div`
    position: absolute;
    left: 20%;
    height: 90%;
    margin-top: 30px;
    margin-left: 50px;
    min-height: 600px;
    width: 70%;
    background: #fff;
`

const CharMain = ()=>{
    return(
        <MainWrapper>
            <ExTabs/>
        </MainWrapper>
    )
}

export default CharMain;