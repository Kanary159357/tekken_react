import styled from 'styled-components';

import React from 'react';
import { InfoProps } from '../../types/CharProps';
const InfoWrapper = styled.div`
    display: flex;
    background: #fff;
    height: 90%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media all and (max-width: 1140px) {
        height: 50px;
        line-height: 50px;
        width: 100%;
        border-bottom: 1px solid black;
        flex-direction: row;
        justify-content: space-around;
        background: #212529;
    }
    @media all and (max-width: 768px) {
        border-bottom: 1px solid black;
        justify-content: center;
    }
    h2 {
        @media all and (max-width: 1140px) {
            margin: 0;
            font-size: 20px;
        }
    }

    .link {
        display: flex;
        flex-direction: column;
        @media all and (max-width: 1140px) {
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
    .info_img {
        text-align: center;
        color: #333;
        img {
            width: 80%;
            @media all and (max-width: 1140px) {
                display: none;
            }
        }
        @media all and (max-width: 1140px) {
            color: #dee2e6;
        }
    }
    .link a {
        display: flex;
        text-decoration: none;
        align-items: center;
        &:active,
        &:link,
        &:visited {
            color: #333;
        }
        padding-bottom: 15px;
        @media all and (max-width: 1140px) {
            padding-left: 10px;
            padding-bottom: 0;
            color: #dee2e6;

            &:active,
            &:link,
            &:visited {
                color: #dee2e6;
            }
        }
        @media all and (max-width: 768px) {
            display: none;
            color: #dee2e6;
        }
    }

    .link a img {
        display: flex;
        width: 1.5em;
        height: 1.5em;
        align-items: center;
        margin-left: 10px;
        border-radius: 30%;
        @media all and (max-width: 1140px) {
            width: 1em;
            height: 1em;
        }
        @media all and (max-width: 1140px) {
            width: 2em;
            height: 2em;
            text-align: center;
        }
        @media all and (max-width: 768px) {
            width: 1.5em;
            height: 1.5em;
            text-align: center;
        }
    }
`;

const Info = ({ punish, combo, dc, name }: any) => {
    return (
        <InfoWrapper>
            <div className="info_img">
                <img
                    src={process.env.PUBLIC_URL + `/img/${name}.jpg`}
                    alt="char"
                />
                <h2>{name}</h2>
            </div>
            <div className="link">
                <a target="_blank" rel="noopener noreferrer" href={punish}>
                    <img
                        src={process.env.PUBLIC_URL + `/img/youtube.png`}
                        alt="youtube"
                    />
                    딜캐
                </a>
                <a target="_blank" rel="noopener noreferrer" href={combo}>
                    <img
                        src={process.env.PUBLIC_URL + `/img/youtube.png`}
                        alt="youtube"
                    />
                    콤보
                </a>
                <a target="_blank" rel="noopener noreferrer" href={dc}>
                    <img
                        src={process.env.PUBLIC_URL + `/img/dc.png`}
                        alt="dc"
                    />
                    철마갤 캐릭터 팁
                </a>
            </div>
        </InfoWrapper>
    );
};

export default Info;
