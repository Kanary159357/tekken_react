import React from 'react';
import styled from 'styled-components';
import { Device } from '../../styles/theme';

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media ${Device.desktop} {
        flex-direction: row;
        justify-content: space-between;
    }
    .header {
        font-size: 1.5em;
        margin-bottom: 20px;
        font-weight: 800;
        text-align: center;
        @media ${Device.desktop} {
            margin: 0;
            font-weight: 500;
        }
    }
    .description {
        font-size: 1em;
        line-height: 30px;
        @media ${Device.desktop} {
            width: 30%;
        }
        @media ${Device.tablet} {
            font-size: 0.5em;
        }
    }
    .command {
        margin-top: 50px;
        @media ${Device.desktop} {
            margin: 0;
        }
    }
`;

const CommandDescription = () => (
    <DescriptionWrapper>
        <div className="header">커맨드</div>
        <div className="description">
            LP = 왼손, RP = 오른손
            <br />
            LK = 왼발, RK = 오른발
            <br />
            AL = LP+LK, AR = RP+RK
            <br />
            AP = LP+RP, AK = LK+ RK
            <br />
            숫자는 키패드의 방향, N은 중립
            <br />
        </div>
        <div className="command">
            7 8 9ㅤㅤㅤㅤ🡼 🡹 🡽
            <br />
            4 N 6ㅤ=&gt; ㅤ🡸 ★ 🡺 <br />
            1 2 3ㅤㅤㅤㅤ🡿 🡻 🡾
            <br />
        </div>
    </DescriptionWrapper>
);

export default CommandDescription;
