import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import TabInfo from './TabInfo';
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const Root = styled.div`
    flex-grow: 1;
`;
const TabsBlock = styled(Tabs)`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const TabBlock = styled(Tab)`
    flex: 1 1 auto;
`;

interface TabsProps {
    Data: any;
}

export default function VerticalTabs({ Data }: TabsProps) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

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
            tag: { description: 'Combo', detail: ['state', 'command'] },
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
    ];

    return (
        <Root>
            <TabsBlock value={value} onChange={handleChange} centered>
                <TabBlock label="딜레이캐치" />
                <TabBlock label="콤보" />
                <TabBlock label="잡기" />
            </TabsBlock>
            <TabPanel value={value} index={0}>
                <TabInfo data={PunishInfo} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabInfo data={ComboInfo} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabInfo data={ThrowInfo} />
            </TabPanel>
        </Root>
    );
}
