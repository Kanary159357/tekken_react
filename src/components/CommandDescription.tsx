import React from 'react';
import styled from 'styled-components';
import { Device, Palette, FontColor } from '../styles/theme';
import frame2 from '../img/Frame2.png';
import frame1 from '../img/Frame1.png';
import Overlay from './Overlay';
import CustomIcon from '../styles/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

const DescriptionWrapper = styled.div`
    width: 400px;
    margin: 30px auto;
    padding: 10px 25px;
    border-radius: 16px;
    position: relative;
    background: ${Palette.white_1};
    @media ${Device.tablet} {
        width: 300px;
    }
    .header {
        font-size: 40px;
        margin-bottom: 10px;
        font-weight: 800;
        text-align: center;
        @media ${Device.tablet} {
            font-size: 30px;
        }
    }
    .description {
        font-size: 1em;
        @media ${Device.desktop} {
            width: 100%;
        }
    }
    .command {
        margin-top: 30px;
        img {
            width: 150px;
            height: 150px;
            @media ${Device.tablet} {
                width: 125px;
                height: 125px;
            }
        }
    }
    .example {
        margin-top: 30px;
    }
`;
const Sentence = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    padding-top: 10px;
    font-size: 20px;
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
    font-size: 30px;
    @media ${Device.tablet} {
        padding-left: 80px;
    }
    @media ${Device.mobile} {
        padding-left: 0;
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

const Highlighted = styled.span<{ color?: string }>`
    box-shadow: ${(props) => (props.color ? props.color : Palette.black_2)};
    background: ${(props) => (props.color ? props.color : Palette.black_2)};
    color: ${FontColor.white};
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-around;
    align-items: center;
    @media ${Device.tablet} {
        justify-content: center;
    }
    .arrow {
        font-size: 50px;
        margin: 0 10px;
        color: ${Palette.gray_1};
    }
`;

const DeleteButton = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: center;
    color: black;
`;
const CommandDescription = ({ func }: { func?: () => void }) => (
    <>
        <Wrapper>
            <DescriptionWrapper>
                <DeleteButton onClick={func}>
                    <CustomIcon icon={faTimes} color={Palette.black_1} />
                </DeleteButton>
                <div className="header">커맨드 읽는법</div>
                <div className="description">
                    <SmallHeader>
                        <Highlighted color={Palette.red_1}>버튼</Highlighted>
                    </SmallHeader>
                    <Sentence> LP = 왼손, RP = 오른손</Sentence>
                    <Sentence>LK = 왼발, RK = 오른발 </Sentence>
                    <Sentence> AL = LP+LK, {'  '}AR = RP+RK </Sentence>
                    <Sentence> AP = LP+RP, {'  '}AK = LK+ RK </Sentence>
                </div>
                <div className="command">
                    <SmallHeader>
                        <Highlighted color={Palette.green_2}>레버</Highlighted>
                    </SmallHeader>
                    <Sentence> 숫자는 레버의 방향을 의미합니다 </Sentence>
                    <ImageWrapper>
                        <img src={frame1} alt={'numberpad'} />
                        <div className="arrow">{'=>'}</div>
                        <img src={frame2} alt={'arrows'} />
                    </ImageWrapper>
                </div>
                <div className="example">
                    따라서 3RP는 오른쪽 아래 대각선으로 레버를 밀고 오른손을
                    누르라는 의미입니다.
                </div>
            </DescriptionWrapper>
        </Wrapper>
        <Overlay func={func} />
    </>
);

export default CommandDescription;
