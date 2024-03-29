import React from 'react';
import styled from 'styled-components';
import { Device, Palette, FontColor } from '../../../lib/styles/theme';
import Overlay from '../../Overlay';
import CustomIcon from '../../base/Icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
    Frame1HalfImage,
    Frame2HalfImage,
} from '../../../lib/styles/SpriteStyle';

const Animation = styled.div`
    animation: fadeInAnimation 0.3s;

    @keyframes fadeInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Wrapper = styled.div`
    position: fixed;
    left: calc(50% - 200px);
    top: 0;
    z-index: 2;
    @media ${Device.tablet} {
        left: calc(50% - 175px);
    }
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
    .content {
        margin-top: 30px;
    }
`;
const DescriptionContent = styled.div`
    font-size: 1em;
    @media ${Device.desktop} {
        width: 100%;
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
    justify-content: space-between;
    align-items: center;
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;
    }
    .arrow {
        font-size: 30px;
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
    cursor: pointer;
`;
const CommandDescription = ({ func }: { func?: () => void }) => (
    <Animation>
        <Wrapper>
            <DescriptionWrapper>
                <DeleteButton onClick={func}>
                    <CustomIcon icon={faTimes} color={Palette.black_1} />
                </DeleteButton>
                <div className="header">커맨드 읽는법</div>
                <DescriptionContent>
                    <SmallHeader>
                        <Highlighted color={Palette.red_1}>버튼</Highlighted>
                    </SmallHeader>
                    <Sentence> LP = 왼손, RP = 오른손</Sentence>
                    <Sentence>LK = 왼발, RK = 오른발 </Sentence>
                    <Sentence> AL = LP+LK, {'  '}AR = RP+RK </Sentence>
                    <Sentence> AP = LP+RP, {'  '}AK = LK+ RK </Sentence>
                </DescriptionContent>
                <div className="content">
                    <SmallHeader>
                        <Highlighted color={Palette.green_2}>레버</Highlighted>
                    </SmallHeader>
                    <Sentence> 숫자는 레버의 방향을 의미합니다 </Sentence>
                    <ImageWrapper>
                        <div className="img">
                            {' '}
                            <Frame1HalfImage />
                        </div>
                        <div className="arrow">{'>'}</div>
                        <div className="img">
                            {' '}
                            <Frame2HalfImage />
                        </div>
                    </ImageWrapper>
                </div>
                <div className="content">
                    따라서 3RP는 오른쪽 아래 대각선으로 레버를 밀고 오른손을
                    누르라는 의미입니다.
                </div>
            </DescriptionWrapper>
        </Wrapper>
        <Overlay func={func} />
    </Animation>
);

export default CommandDescription;
