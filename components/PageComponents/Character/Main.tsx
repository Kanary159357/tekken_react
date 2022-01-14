import styled from 'styled-components';
import React from 'react';
import { CharProps } from '../../../lib/types/CharProps';
import { Device, Palette } from '../../../lib/styles/theme';
import TabControl from '../../Tap/TabControl';
import TabPanel from '../../Tap/TabPanel';
import TabInfo from '../../Tap/TabInfo';
import { TableOrder } from '../../../lib/utils/TableOrder';
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
                detail: TableOrder.standing,
            },
            header: '선자세 딜캐',
            columns: ['프레임', '커맨드', '데미지', '판정', '히트이득', '설명'],
            data: data.standing,
        },
        {
            tag: {
                description: 'up',
                detail: TableOrder.up,
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
                detail: TableOrder.Throw,
            },
            header: '잡기',
            columns: ['커맨드', '데미지', '프레임', '설명', '잡기풀기'],
            data: data.Throw,
        },
    ];

    const ComboInfo = [
        {
            tag: { description: 'combo', detail: TableOrder.combo },
            header: '콤보',
            columns: ['커맨드', '설명'],
            data: data.combo,
        },
        {
            tag: { description: 'Extrahit', detail: TableOrder.Extrahit },
            header: '추가타',
            columns: ['커맨드', '설명'],
            data: data.Extrahit,
        },
        {
            tag: { description: 'WallCombo', detail: TableOrder.WallCombo },
            header: '벽콤보',
            columns: ['커맨드', '설명'],
            data: data.WallCombo,
        },
    ];

    const PatternMainInfo = [
        {
            tag: {
                description: 'MainMove',
                detail: TableOrder.MainMove,
            },
            header: '주력기',
            columns: [
                '커맨드',
                '별명',
                '데미지',
                '프레임',
                '가드프레임',
                '히트프레임',
                '판정',
                '설명',
            ],
            data: data.MainMove,
        },
        {
            tag: { description: 'Pattern', detail: TableOrder.Pattern },
            header: '패턴/날먹',
            columns: ['커맨드', '설명', '파해'],
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
