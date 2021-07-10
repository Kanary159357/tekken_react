import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const CharWrap = styled.div`
    display: flex;
    width: 100%;
    background-color: #fefefe;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1140px) {
        flex-direction: column;
    }
`;

const Error = () => {
    let history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/');
        }, 1000);
    }, [history]);
    return <CharWrap>Error!</CharWrap>;
};

export default Error;
