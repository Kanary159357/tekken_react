import React from 'react'
import styled from 'styled-components'


const DescriptionWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 35%;
font-size: 20px;
.header{
    font-size : 40px;
    margin-bottom : 40px;
    font-weight: 1000;
}
.description{
    line-height: 40px;
}

.command{
    margin-top : 50px;
}
`

const CommandDescription = ()=>(
    <DescriptionWrapper>
    <div className="header">
    커맨드 읽는 방법    
    </div>
    <div className="description">
    LP = 왼손, RP = 오른손<br/> 
    LK = 왼발, RK = 오른발<br/> 
    AL = 왼손+왼발, AR = 오른손+오른발<br/> 
    AP = 왼손+오른손, AK = 왼발+ 오른발<br/> 
    숫자는 키패드의 방향을 의미 N은 중립<br/>
    </div>
    <div className="command">
    7 8 9ㅤㅤㅤㅤ🡼 🡹 🡽<br/> 
    4 N 6ㅤ=&gt; ㅤ🡸 ★ 🡺 <br/> 
    1 2 3ㅤㅤㅤㅤ🡿 🡻 🡾<br/> 
    </div>
 
</DescriptionWrapper>
)

export default CommandDescription