import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faExclamationCircle,
    faScroll,
    faClone,
} from '@fortawesome/free-solid-svg-icons'

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    @media all and (max-width: 1140px) {
        flex-direction: row;
        justify-content: space-around;
    }
`

const Contact = styled.a`
    &:link,
    &:active,
    &:visited {
        color: #333;
        text-decoration: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1140px) {
        justify-content: center;
        & + & {
            padding-left: 20px;
        }
    }
`

const CustomIcon = styled(FontAwesomeIcon)`
    font-size: 3em;
    color: ${(props) => props.color};
    display: block;
    padding-bottom: 20px;
`
const ContactForm = () => (
    <ContactWrapper>
        <Contact
            href="//docs.google.com/forms/d/e/1FAIpQLScQKZfrMpewHsDkNKV2kkWWRIK2b6T29Oo_XWxW7ak1qT5k9g/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <CustomIcon icon={faExclamationCircle} color="#de5842" />
            사이트 오류 및 건의사항
        </Contact>
        <Contact
            href="//docs.google.com/forms/d/e/1FAIpQLSfAFV-vqdrLyLw8vParLZo6vQC_GHsX1q1K3u4FCfYwQpSGWw/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <CustomIcon icon={faClone} color="#fcd059" />
            캐릭터 정보 수정 및 추가
        </Contact>
        <Contact
            href="//drive.google.com/drive/folders/1BYGo3QGapN_uaW6rYi6nQ2By6IbYE6dc?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
        >
            <CustomIcon icon={faScroll} color="#bfe1bf" />
            캐릭터 파일 다운로드
        </Contact>
    </ContactWrapper>
)

export default ContactForm
