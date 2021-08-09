import styled from 'styled-components';

import React from 'react';
import { InfoProps } from '../../types/CharProps';
import { Device, FontColor, Palette } from '../../styles/theme';
const InfoWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 300px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media ${Device.desktop} {
        height: 50px;
        line-height: 49px;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        background: ${Palette.black_1};
    }
    @media ${Device.tablet} {
        height: 100px;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }
    h2 {
        @media ${Device.desktop} {
            margin: 0;
            font-size: 20px;
        }
    }

    .link {
        display: flex;
        flex-direction: column;
        @media ${Device.desktop} {
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
    .info_img {
        text-align: center;
        color: ${FontColor.black};
        @media ${Device.desktop} {
            color: ${FontColor.white};
        }
        img {
            width: 80%;
            @media ${Device.desktop} {
                display: none;
            }
        }
    }
    .link a {
        display: flex;
        text-decoration: none;
        align-items: center;
        &,
        &:active,
        &:link,
        &:visited {
            color: ${FontColor.black};
        }
        padding-bottom: 15px;
        @media ${Device.desktop} {
            padding-left: 10px;
            padding-bottom: 0;
            &,
            &:active,
            &:link,
            &:visited {
                color: ${FontColor.white};
            }
        }
    }

    .link a img {
        display: flex;
        width: 1.5em;
        height: 1.5em;
        align-items: center;
        margin-left: 10px;
        border-radius: 30%;
        margin-right: 10px;

        @media ${Device.desktop} {
            width: 2em;
            height: 2em;
            text-align: center;
        }
        @media ${Device.tablet} {
            width: 1.5em;
            height: 1.5em;
        }
        @media ${Device.mobile} {
            width: 1em;
            height: 1em;
        }
    }
`;

interface InfoInterface {
    data: InfoProps[] | undefined;
    name: string;
}

const Info = ({ data, name }: InfoInterface) => {
    const info = data === undefined ? null : data[0];
    return (
        <InfoWrapper>
            <div className="info_img">
                <img src={`/img/${name}.jpg`} alt="char" />
                <h2>{name}</h2>
            </div>
            <div className="link">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={info?.punish}
                >
                    <img src={`/img/youtube.png`} alt="youtube" />
                    딜캐
                </a>
                <a target="_blank" rel="noopener noreferrer" href={info?.combo}>
                    <img src={`/img/youtube.png`} alt="youtube" />
                    콤보
                </a>
                <a target="_blank" rel="noopener noreferrer" href={info?.dc}>
                    <img src={`/img/dc.png`} alt="dc" />
                    철마갤 캐릭터 팁
                </a>
            </div>
        </InfoWrapper>
    );
};

export default Info;
