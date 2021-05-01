import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    .wrapper{
    width: calc(70% + 200px);
    height: 90%;
    background: #fff;
    }
`
const ContactForm = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
`

const Contact = styled.a`
    &:link , &:active , &:visited {
        color: #333;
    }
`

const CustomIcon = styled(FontAwesomeIcon)`
    font-size: 100px;
`

const Home = ()=>{
    return(
        <HomeWrapper>
            <div className="wrapper">
            
                <ContactForm>
                    <Contact href ="docs.google.com/forms/d/e/1FAIpQLScQKZfrMpewHsDkNKV2kkWWRIK2b6T29Oo_XWxW7ak1qT5k9g/viewform?usp=sf_link"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <CustomIcon icon={faExclamationCircle}/>
                    사이트 오류 및 건의사항    
                    </Contact>
                    <Contact href ="https://docs.google.com/forms/d/19QxdaVVlH-Ajf9cx7F5emgS7II6wXwwI3aYGwInJcWg/edit"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <CustomIcon icon={faExclamationCircle}/>
                    캐릭터 정보 수정 및 추가   
                    </Contact>
                    <Contact href ="https://drive.google.com/drive/folders/1BYGo3QGapN_uaW6rYi6nQ2By6IbYE6dc?usp=sharing"
                    target="_blank" 
                    rel="noopener noreferrer">
                    <CustomIcon icon={faExclamationCircle}/>
                    이곳에서 캐릭터 파일을 받아 수정을 해 Google Form으로 전해주세요!
                    </Contact>
                </ContactForm>
            </div>
        </HomeWrapper>
    )
}

export default Home;