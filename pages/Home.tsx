import React from 'react';
import styled from 'styled-components';
import { Palette, FontColor, Device } from '../styles/theme';
import Head from 'next/head';
import PatchNote from '../components/PageComponents/PatchNote';
import ContactForm from '../components/PageComponents/ContactForm';

const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media ${Device.tablet} {
        height: auto;
    }
`;

const HeadContainer = styled.div`
    width: 100%;
    height: 300px;
    text-align: center;
    background: ${Palette.black_2};
    top: 0;
`;
const MainHead = styled.div`
    font-size: 50px;
    padding-top: 100px;
    font-weight: 900;
    color: ${FontColor.white};
`;

const SubHead = styled.p`
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

const Home = () => {
    return (
        <HomeWrapper>
            <Head>
                <title>6N23RP</title>
            </Head>
            <HeadContainer>
                <MainHead>6N23RP</MainHead>
                <SubHead>Tekken 7 FR Information</SubHead>
            </HeadContainer>
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

export default Home;
