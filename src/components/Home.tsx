import React from 'react';
import styled from 'styled-components';
import ContactFrom from './pageComponents/ContactForm';
import CommandDescription from './pageComponents/CommandDescription';
import { Device } from '../styles/theme';
const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    .wrapper {
        width: calc(70% + 200px);
        height: 90%;
        background: #fff;
        display: flex;
        flex-direction: column;
        @media ${Device.desktop} {
            width: 100%;
            height: 100%;
        }
    }
`;

const Header = styled.div`
    width: 100%;
    font-size: 50px;
    font-weight: 900;
    height: 15%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    @media ${Device.desktop} {
        height: 10%;
        padding: 0;
        font-size: 20px;
        background-color: #333;
        color: #fff;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media ${Device.desktop} {
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    @media ${Device.tablet} {
        display: flex;
        flex-direction: column;
    }
`;
const ContentItem = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 80%;
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    @media ${Device.desktop} {
        width: calc(100% - 2px);
        padding: 0;
        height: 30%;
        border-radius: 0;
        border: 0 0 0 1px solid black;
    }
    @media ${Device.tablet} {
        width: calc(100% - 2px);
        padding: 0;
        height: 33%;
        border-radius: 0;
        border: 0 0 0 1px solid black;
    }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <div className="wrapper">
                <Header>Tekken Info</Header>
                <Content>
                    <ContentItem></ContentItem>
                </Content>
            </div>
        </HomeWrapper>
    );
};

export default Home;
