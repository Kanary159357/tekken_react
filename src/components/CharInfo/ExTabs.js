import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'
import TabInfo from './TabInfo'
const TabPanelBlock = styled.div`
    ${({ value }) => (value ? `width:100%;  height:90%;` : 'width:0%')};
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <TabPanelBlock
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            value={value === index}
        >
            {value === index && <>{children} </>}
        </TabPanelBlock>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

const Root = styled.div`
    flex-grow: 1;
`
const TabsBlock = styled(Tabs)`
    display: flex;
    width: 100%;
    justify-content: center;
`
const TabBlock = styled(Tab)`
    flex: 1 1 auto;
`

export default function VerticalTabs({ Data }) {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const PunishInfo = [
        {
            header: '선자세 딜캐',
            columns: ['프레임', '커맨드', '데미지', '판정', '히트이득'],
            data: Data.standing,
        },
        {
            header: '앉은자세 딜캐',
            columns: ['프레임', '커맨드', '데미지', '판정', '히트이득'],
            data: Data.up,
        },
    ]

    const ThrowInfo = [
        {
            header: '잡기',
            columns: ['커맨드', '프레임', '잡기풀기', '데미지', '설명'],
            data: Data.Throw,
        },
    ]

    const ComboInfo = [
        {
            header: '추가타',
            columns: ['상황', '커맨드'],
            data: Data.combo,
        },
        {
            header: '추가타',
            columns: ['상황', '커맨드'],
            data: Data.Extrahit,
        },
    ]

    return (
        <Root>
            <TabsBlock value={value} onChange={handleChange} centered>
                <TabBlock label="딜레이캐치" {...a11yProps(0)} />
                <TabBlock label="콤보" {...a11yProps(1)} />
                <TabBlock label="잡기" {...a11yProps(2)} />
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
    )
}
