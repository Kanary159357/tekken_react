import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Punish from './Punish'
import Combo from './Combo'
import styled from 'styled-components'


const TabPanelBlock = styled.div`
    ${({value}) => value ? `width:100%` : 'width:0%'}
`

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelBlock
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      value={value===index}
    >
      {value === index && <>{children} </>
}
    </TabPanelBlock>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Root = styled.div`
  width:100%;
  display: flex;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`
const TabsBlock =styled(Tabs)`
  border-right: 1px solid black;
`

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Root>
      <TabsBlock
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="딜레이캐치" {...a11yProps(0)} />
        <Tab label="콤보" {...a11yProps(1)} />
        <Tab label="주력기" {...a11yProps(2)} />
        <Tab label="주력기 딜캐" {...a11yProps(3)} />

      </TabsBlock>
      <TabPanel value={value} index={0}>
        <Punish/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Combo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>

   
    </Root>
  );
}