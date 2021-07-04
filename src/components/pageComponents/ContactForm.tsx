import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    @media all and (max-width: 1140px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

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
`;

const CustomIcon = styled(FontAwesomeIcon)`
    font-size: 3em;
    color: ${(props) => props.color};
    display: block;
    padding-bottom: 20px;
    @media all and (max-width: 768px) {
        font-size: 1.5em;
    }
`;
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
    </ContactWrapper>
);

export default ContactForm;
