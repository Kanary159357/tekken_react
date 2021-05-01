import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const ContactWrapper = styled.div`
    display:flex;
    width :35%;
    height: 100%;
    flex-direction: column;
`

const Contact = styled.a`
    &:link , &:active , &:visited {
        color: #333;
        text-decoration:none;
        }
    display:flex;
    flex-direction:column;
    align-items:center;
    &+&{
        padding-top: 50px;
    }
`

const CustomIcon = styled(FontAwesomeIcon)`
    font-size: 100px;
    color : ${props=>props.color};
    display:block;
    padding-bottom: 20px;

`
const ContactForm = ()=>(
    <ContactWrapper>
    <Contact href ="//docs.google.com/forms/d/e/1FAIpQLScQKZfrMpewHsDkNKV2kkWWRIK2b6T29Oo_XWxW7ak1qT5k9g/viewform?usp=sf_link"
    target="_blank" 
    rel="noopener noreferrer">
    <CustomIcon icon={faExclamationCircle}     color = "#de5842"
/>
    사이트 오류 및 건의사항
    </Contact>
    <Contact href ="//docs.google.com/forms/d/19QxdaVVlH-Ajf9cx7F5emgS7II6wXwwI3aYGwInJcWg/edit"
    target="_blank" 
    rel="noopener noreferrer">
    <CustomIcon icon={faExclamationCircle} color= "#fcd059"/>
    캐릭터 정보 수정 및 추가
    </Contact>
    <Contact href ="//drive.google.com/drive/folders/1BYGo3QGapN_uaW6rYi6nQ2By6IbYE6dc?usp=sharing"
    target="_blank" 
    rel="noopener noreferrer">
    <CustomIcon icon={faExclamationCircle} color = "#bfe1bf"/>
    캐릭터 파일 다운로드
    </Contact>
    </ContactWrapper>
)


export default ContactForm;