import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import { InfoProps } from '../../../lib/types/CharProps';
import { Device, FontColor, Palette } from '../../../lib/styles/theme';
import * as sprite from '../../../lib/styles/sprite.json';
import {
    DCHalfImage,
    DCImage,
    YoutubeHalfImage,
    YoutubeImage,
} from '../../../lib/styles/SpriteStyle';
const InfoWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 300px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media ${Device.desktop} {
        height: 50px;
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
    .info_img {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        color: ${FontColor.black};
        @media ${Device.desktop} {
            color: ${FontColor.white};
        }
        @media ${Device.tablet} {
            height: 50px;
        }
        .container {
            width: 200px;
            height: 200px;
            position: relative;
            @media ${Device.desktop} {
                display: none;
            }
        }
    }
`;

const InfoLinkList = styled.div`
    display: flex;
    flex-direction: column;
    @media ${Device.desktop} {
        flex-direction: row;
        align-items: center;
        margin-right: 100px;
    }
    @media ${Device.tablet} {
        margin: 0;
    }
    white-space: nowrap;
    a {
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
            height: 100%;
            &,
            &:active,
            &:link,
            &:visited {
                color: ${FontColor.white};
            }
        }
    }

    a .img_container {
        display: flex;
        width: 1.5em;
        position: relative;
        height: 1.5em;
        align-items: center;
        margin-left: 10px;
        border-radius: 30%;
        margin-right: 20px;
        @media ${Device.desktop} {
            width: 100%;
            text-align: center;
            margin-right: 5px;
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
                <div className="container">
                    {' '}
                    <Image
                        src={`/img/${name}.png`}
                        alt="char"
                        layout="fill"
                        objectFit="contain"
                        priority
                    />
                </div>
                <h2>{name}</h2>
            </div>
            <InfoLinkList>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={info?.punish}
                >
                    <div className="img_container">
                        <div>
                            <YoutubeHalfImage />
                        </div>
                    </div>
                    딜캐
                </a>
                <a target="_blank" rel="noopener noreferrer" href={info?.combo}>
                    <div className="img_container">
                        <div>
                            <YoutubeHalfImage />
                        </div>
                    </div>
                    콤보
                </a>
                <a target="_blank" rel="noopener noreferrer" href={info?.dc}>
                    <div className="img_container">
                        <div>
                            <DCHalfImage />
                        </div>
                    </div>
                    캐릭터 팁
                </a>
            </InfoLinkList>
        </InfoWrapper>
    );
};

export default Info;
