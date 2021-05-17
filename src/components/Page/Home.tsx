import React from 'react'
import styled from 'styled-components'
import ContactFrom from '../pageComponents/ContactForm'
import CommandDescription from '../pageComponents/CommandDescription'
import SiteUsage from '../pageComponents/SiteUsage'
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
        @media all and (max-width: 1140px) {
            width: 100%;
            height: 100%;
        }
    }
`

const Header = styled.div`
    width: 100%;
    font-size: 50px;
    font-weight: 900;
    height: 15%;
    padding-top: 5%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    @media all and (max-width: 1140px) {
        height: 7%;
        padding: 0;
        font-size: 20px;
        background-color: #333;
        color: #fff;
    }
`

const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media all and (max-width: 1140px) {
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    @media all and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
const ContentItem = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 80%;
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 10px;
    @media all and (max-width: 1140px) {
        width: calc(100% - 2px);
        padding: 0;
        height: 30%;
        border-radius: 0;
        border: 0 0 0 1px solid black;
    }
    @media all and (max-width: 768px) {
        width: calc(100% - 2px);
        padding: 0;
        height: 33%;
        border-radius: 0;
        border: 0 0 0 1px solid black;
    }
`

const Home = () => {
    return (
        <HomeWrapper>
            <div className="wrapper">
                <Header>Tekken Info</Header>
                <Content>
                    <ContentItem>
                        <CommandDescription />
                    </ContentItem>
                    <ContentItem>
                        {' '}
                        <SiteUsage />
                    </ContentItem>
                    <ContentItem>
                        {' '}
                        <ContactFrom />
                    </ContentItem>
                </Content>
            </div>
        </HomeWrapper>
    )
}

export default Home
