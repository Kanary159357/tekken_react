import React from 'react'
import styled from 'styled-components'

const UsageDescription = styled.div`
    width: 30%;
`

const Header = styled.div`
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 1000;
`

const Description = styled.div`
    line-height: 40px;
    font-size: 18px;
`

const SiteUsage = ()=>(
    <UsageDescription>
        <Header>내용 수정을 원한다면</Header>
        <Description>
        캐릭터 파일을 다운로드 받아 수정<br/>
        캐릭터 정보 수정, 추가 구글 폼에 들어가 제출! <br/>
        장인분들의 주력기에 대한 지식이 시급합니다<br/>
        <br/>
        <br/>
        기타 문의사항은 ddasfasd123@gmail.com 으로<br/>

        </Description>
    </UsageDescription>
)

export default SiteUsage;