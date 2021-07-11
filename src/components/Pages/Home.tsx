import React from 'react';
import styled from 'styled-components';
import CustomIcon from '../../styles/components/Icon';
import { Palette, FontColor, Device } from '../../styles/theme';
import {
    faEnvelope,
    faBug,
    faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media ${Device.tablet} {
        height: auto;
    }
`;

const Head = styled.div`
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
    height: calc(100% - 300px);
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media ${Device.tablet} {
        margin-top: 100px;
        flex-direction: column;
    }
`;

const Description = styled.div`
    width: calc(100% - 200px);
    padding-left: 150px;
    @media ${Device.desktop} {
        padding-left: 50px;
    }
    @media ${Device.tablet} {
        padding-left: 10px;
    }
    .main {
        font-size: 60px;
        position: relative;
        color: ${FontColor.black};
        width: 100%;
        @media ${Device.desktop} {
            font-size: 40px;
        }
    }
    .sub {
        margin-top: 50px;
        font-size: 30px;
    }
`;

const Highlighted = styled.span<{ color?: string }>`
    box-shadow: ${(props) => (props.color ? props.color : Palette.black_2)};
    background: ${(props) => (props.color ? props.color : Palette.black_2)};
    color: ${FontColor.white};
`;

const Form = styled.div`
    margin-left: auto;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${Device.tablet} {
        margin-top: 50px;
        width: 100%;
        height: 300px;
        flex-direction: row;
    }
`;

const FormItem = styled.div<{ color?: string }>`
    width: 125px;
    height: 150px;
    cursor: pointer;
    div {
        box-shadow: 3px 4px 2px -2px #b8b8b8;
        width: 100px;
        height: 100px;
        background: ${(props) => (props.color ? props.color : Palette.red_1)};
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s ease-in-out;
        font-size: 40px;
    }
    div:hover {
        transform: scale(1.01);
    }
    p {
        padding-left: 10px;
    }
    a {
        &,
        &:visited,
        &:active {
            text-decoration: none;
            color: ${FontColor.black};
        }
    }
`;

const Home = () => {
    return (
        <HomeWrapper>
            <Head>
                <MainHead>6N23RP</MainHead>
                <SubHead>Tekken 7 FR Information</SubHead>
            </Head>
            <Content>
                <Description>
                    <div className="main">
                        <div className="box">
                            <Highlighted>철권 정보</Highlighted> 찾기 너무
                            불편해서
                        </div>
                        <div className="box">
                            <Highlighted>남코가</Highlighted> 일을 제대로 안해서
                        </div>
                        <div className="box">
                            <Highlighted>그래서 만들었습니다</Highlighted>
                        </div>
                    </div>
                    <div className="sub">
                        6N23RP는 철권 7FR의 캐릭터들의 정보를 손쉽게 열람 및
                        수정할 수 있는 사이트입니다.
                    </div>
                </Description>
                <Form>
                    <FormItem color={Palette.red_1}>
                        <a
                            href="https://forms.gle/Dz5QWXdzrskYXJjm7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                {' '}
                                <CustomIcon icon={faBug} />
                            </div>
                            <p>버그리포트</p>
                        </a>
                    </FormItem>
                    <FormItem color={Palette.green_1}>
                        <a
                            href="https://forms.gle/ZRnAUuoNbMiGjZu8A"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <CustomIcon icon={faBullhorn} />
                            </div>
                            <p>건의사항</p>
                        </a>
                    </FormItem>
                    <FormItem color={Palette.gray_1}>
                        <a
                            href="mailto:ddasfasd123@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div>
                                <CustomIcon icon={faEnvelope} />
                            </div>
                            <p>정보 복구 및 기타 문의</p>
                        </a>
                    </FormItem>
                </Form>
            </Content>
        </HomeWrapper>
    );
};

export default Home;
