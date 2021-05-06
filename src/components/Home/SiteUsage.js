import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 1000;
    @media all and (max-width: 1140px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
`

const Description = styled.div`
    line-height: 40px;
    font-size: 18px;
    @media all and (max-width: 1140px) {
        width: 40%;
        line-height: 18px;
    }
    @media all and (max-width: 500px) {
        font-size: 0.5em;
    }
`

const SiteUsage = () => (
    <>
        <Header>내용 수정을 원한다면</Header>
        <Description>
            캐릭터 파일을 다운로드 받아 수정 캐릭터 정보 수정, 추가 구글
            폼에들어가 제출!
            <br />
            장인분들의 주력기에 대한 지식이 시급합니다 기타 문의사항은
            ddasfasd123@gmail.com 으로
        </Description>
    </>
)

export default SiteUsage
