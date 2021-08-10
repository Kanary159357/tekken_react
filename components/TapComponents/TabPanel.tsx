import styled from 'styled-components';

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

export default TabPanel;
