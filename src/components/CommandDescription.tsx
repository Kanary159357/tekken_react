import React from 'react';
import styled from 'styled-components';
import { Device, Palette } from '../styles/theme';
import frame2 from '../../img/Frame2.png';
import frame1 from '../../img/Frame1.png';
const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;

    .header {
        font-size: 1.5em;
        margin: 20px 0px;
        font-weight: 800;
        text-align: center;
        @media ${Device.desktop} {
            font-weight: 500;
        }
    }
    .description {
        font-size: 1em;
        @media ${Device.desktop} {
            width: 100%;
        }
    }
    .command {
        margin-top: 50px;
        img {
            width: 200px;
            height: 200px;
            @media ${Device.mobile} {
                width: 150px;
                height: 150px;
            }
        }
    }
    .example {
        margin-top: 50px;
    }
`;
const Sentence = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    & + & {
        padding-top: 10px;
    }
    @media ${Device.tablet} {
        display: block;
        width: 100%;
    }
`;
const SmallHeader = styled.div`
    height: 30px;
    display: inline-block;
    padding-left: 30px;
    font-weight: 800;
    @media ${Device.tablet} {
        padding-left: 80px;
    }
    &:after {
        content: '';
        display: block;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        background: ${Palette.red_1};
        transition: all ease-in-out 0.2s;
    }
    &:hover::after {
        width: 100%;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-around;
    align-items: center;
    @media ${Device.mobile} {
        justify-content: center;
    }
    .arrow {
        font-size: 50px;
        margin: 0 10px;
        color: ${Palette.gray_1};
    }
`;
const CommandDescription = () => (
    <>
    <DescriptionWrapper>
        <div className="header">커맨드 읽는법</div>
        <div className="description">
            <SmallHeader>버튼</SmallHeader>
            <Sentence> LP = 왼손, RP = 오른손</Sentence>
            <Sentence>LK = 왼발, RK = 오른발 </Sentence>
            <Sentence> AL = LP+LK, {'  '}AR = RP+RK </Sentence>
            <Sentence> AP = LP+RP, {'  '}AK = LK+ RK </Sentence>
        </div>
        <div className="command">
            <SmallHeader>레버</SmallHeader>
            <Sentence> 숫자는 레버의 방향을 의미합니다 </Sentence>
            <ImageWrapper>
                <img src={frame1} alt={'numberpad'} />
                <div className="arrow">{'=>'}</div>
                <img src={frame2} alt={'arrows'} />
            </ImageWrapper>
        </div>
        <div className="example">
            따라서 3RP는 오른족 아래 대각선으로 레버를 밀고 오른손을 누른
            의미입니다.
        </div>
    </DescriptionWrapper>
    <Overlay/>
    </>
);

export default CommandDescription;
