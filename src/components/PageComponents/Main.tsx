import styled from 'styled-components';
import React from 'react';
import { CharProps } from '../../types/CharProps';
import { Device, Palette } from '../../styles/theme';
import TabControl from '../TapComponents/TabControl';
import TabPanel from '../TapComponents/TabPanel';
import TabInfo from '../TapComponents/TabInfo';
const MainWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: ${Palette.white_1};

    @media ${Device.desktop} {
        height: calc(100% - 50px);
    }
    @media ${Device.tablet} {
        height: calc(100% - 100px);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

interface MainProps {
    data: CharProps;
    tableIndex: number;
    handleIndex: (index: number) => void;
}

const Main = ({ data, tableIndex, handleIndex }: MainProps) => {
    const PunishInfo = [
        {
            tag: {
                description: 'standing',
                detail: [
                    'frame',
                    'command',
                    'damage',
                    'range',
                    'hitframe',
                    'state',
                ],
            },
            header: '선자세 딜캐',
            columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
            data: data.standing,
        },
        {
            tag: {
                description: 'up',
                detail: [
                    'frame',
                    'command',
                    'damage',
                    'range',
                    'hitframe',
                    'state',
                ],
            },
            header: '앉은자세 딜캐',
            columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
            data: data.up,
        },
    ];

    const ThrowInfo = [
        {
            tag: {
                description: 'Throw',
                detail: ['command', 'damage', 'frame', 'state', 'way'],
            },
            header: '잡기',
            columns: ['커맨드', '데미지', '프레임', '설명', '잡기풀기'],
            data: data.Throw,
        },
    ];

    const ComboInfo = [
        {
            tag: { description: 'combo', detail: ['state', 'command'] },
            header: '콤보',
            columns: ['커맨드', '설명'],
            data: data.combo,
        },
        {
            tag: { description: 'Extrahit', detail: ['state', 'command'] },
            header: '추가타',
            columns: ['커맨드', '설명'],
            data: data.Extrahit,
        },
        {
            tag: { description: 'WallCombo', detail: ['state', 'command'] },
            header: '벽콤보',
            columns: ['커맨드', '설명'],
            data: data.WallCombo,
        },
    ];

    const PatternMainInfo = [
        {
            tag: {
                description: 'MainMove',
                detail: [
                    'command',
                    'damage',
                    'frame',
                    'range',
                    'hitframe',
                    'guardframe',
                    'state',
                ],
            },
            header: '주력기',
            columns: [
                '커맨드',
                '데미지',
                '프레임',
                '판정',
                '가드프레임',
                '히트프레임',
                '설명',
            ],
            data: data.MainMove,
        },
        {
            tag: { description: 'Pattern', detail: ['state', 'command'] },
            header: '패턴/날먹',
            columns: ['커맨드', '설명'],
            data: data.Pattern,
        },
    ];

    const arr = ['딜레이캐치', '콤보', '잡기', '주력기, 패턴'];

    return (
        <MainWrapper>
            <Wrapper>
                <TabControl
                    handleIndex={handleIndex}
                    value={tableIndex}
                    arr={arr}
                />
                <TabPanel value={tableIndex} index={0}>
                    <TabInfo data={PunishInfo} />
                </TabPanel>
                <TabPanel value={tableIndex} index={1}>
                    <TabInfo data={ComboInfo} />
                </TabPanel>
                <TabPanel value={tableIndex} index={2}>
                    <TabInfo data={ThrowInfo} />
                </TabPanel>
                <TabPanel value={tableIndex} index={3}>
                    <TabInfo data={PatternMainInfo} />
                </TabPanel>
            </Wrapper>
        </MainWrapper>
    );
};

export default Main;
