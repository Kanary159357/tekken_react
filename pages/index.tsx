import React from 'react';
import styled from 'styled-components';
import { Palette, FontColor, Device } from '../lib/styles/theme';

import PatchNote from '../components/PageComponents/Home/PatchNote';
import ContactForm from '../components/PageComponents/Home/ContactForm';
import Head from 'next/head';

const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media ${Device.tablet} {
        height: auto;
    }
`;

const Header = styled.div`
    width: 100%;
    height: 300px;
    text-align: center;
    background: ${Palette.black_2};
    top: 0;
`;
const MainHeader = styled.div`
    font-size: 50px;
    padding-top: 100px;
    font-weight: 900;
    color: ${FontColor.white};
`;

const SubHeader = styled.p`
    color: ${FontColor.white};
    padding-top: 40px;
    font-size: 20px;
    margin: 0;
`;

const Content = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    @media ${Device.tablet} {
        margin-top: 50px;
        flex-direction: column;
    }
`;

const ContentWrapper = styled.div`
    width: calc(100% - 200px);
    @media ${Device.tablet} {
        width: 100%;
    }
`;

const Index = () => {
    return (
        <HomeWrapper>
            <Head>
                <title>6N23RP</title>
                <meta
                    name="description"
                    content="철권 7 캐릭터들의 딜캐, 콤보, 주력기, 잡기 등의 정보 공유"
                />
            </Head>
            <Header>
                <MainHeader>6N23RP</MainHeader>
                <SubHeader>Tekken 7 FR Information</SubHeader>
            </Header>
            <Content>
                <ContentWrapper>
                    {/*<SiteDescription />*/}
                    <PatchNote />
                </ContentWrapper>
                <ContactForm />
            </Content>
        </HomeWrapper>
    );
};

export default Index;
