import React, { useState } from 'react';
import styled from 'styled-components';
import TabInfo from './TabInfo';
import { CharProps } from '../../types/CharProps';
import { Palette } from '../../styles/theme';
const TabPanelBlock = styled.div<{ shown: boolean }>`
    ${({ shown }) => (shown ? `width:100%;  height:90%;` : 'width:0%')};
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

interface PanelProps {
    children: any;
    value: number;
    index: number;
}

function TabPanel(props: PanelProps) {
    const { children, value, index } = props;

    return (
        <TabPanelBlock
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            shown={value === index}
        >
            {value === index && <>{children} </>}
        </TabPanelBlock>
    );
}

interface TabsProps {
    Data: CharProps;
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const TabControlBox = styled.div`
    height: 70px;
    width: 500px;
    display: flex;
    justify-content: center;
`;

const TabControlItemBox = styled.div<{ selected: boolean }>`
    flex: 1 0;
    text-align: center;
    line-height: 70px;
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        width: ${(props) => (props.selected ? '100%' : '0%')};
        height: 2px;
        left: 50%;
        bottom: 0;
        background-color: ${Palette.red_1};
        transition: all ease-in-out 0.2s;
    }
`;

const TabControlItem = (props: {
    content: string;
    setValue: (index: number) => void;
    index: number;
    selected: boolean;
}) => {
    const { content, setValue, index, selected } = props;
    const handleChange = () => {
        setValue(index);
    };
    console.log(selected);
    return (
        <TabControlItemBox selected={selected} onClick={handleChange}>
            {content}
        </TabControlItemBox>
    );
};

const TabControl = ({
    value,
    setValue,
    arr,
}: {
    value: number;
    setValue: (index: number) => void;
    arr: string[];
}) => {
    return (
        <TabControlBox>
            {arr.map((item, index) => {
                return (
                    <TabControlItem
                        selected={index === value}
                        content={item}
                        setValue={setValue}
                        index={index}
                    />
                );
            })}
        </TabControlBox>
    );
};

function VerticalTabs({ Data }: TabsProps) {
    const [value, setValue] = useState(0);

    console.log(value);
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
            data: Data.standing,
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
            data: Data.up,
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
            data: Data.Throw,
        },
    ];

    const ComboInfo = [
        {
            tag: { description: 'combo', detail: ['state', 'command'] },
            header: '콤보',
            columns: ['커맨드', '상황'],
            data: Data.combo,
        },
        {
            tag: { description: 'Extrahit', detail: ['state', 'command'] },
            header: '추가타',
            columns: ['커맨드', '상황'],
            data: Data.Extrahit,
        },
        {
            tag: { description: 'WallCombo', detail: ['state', 'command'] },
            header: '벽콤보',
            columns: ['커맨드', '상황'],
            data: Data.WallCombo,
        },
    ];

    const PatternMainInfo = [
        {
            tag: {
                description: 'MainMove',
                detail: [
                    'frame',
                    'damage',
                    'command',
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
                '히트프레임',
                '가드프레임',
                '판정',
                '상황',
            ],
            data: Data.MainMove,
        },
        {
            tag: { description: 'Pattern', detail: ['state', 'command'] },
            header: '콤보',
            columns: ['커맨드', '상황'],
            data: Data.Pattern,
        },
    ];

    const arr = ['딜레이캐치', '콤보', '잡기', '주력기 + 패턴'];

    return (
        <Wrapper>
            <TabControl setValue={setValue} value={value} arr={arr} />
            <TabPanel value={value} index={0}>
                <TabInfo data={PunishInfo} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabInfo data={ComboInfo} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabInfo data={ThrowInfo} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TabInfo data={PatternMainInfo} />
            </TabPanel>
        </Wrapper>
    );
}

export default VerticalTabs;
