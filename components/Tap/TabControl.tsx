import styled from 'styled-components';
import { Device, Palette } from '../../lib/styles/theme';

const TabControlBox = styled.div`
    height: 70px;
    width: 500px;
    display: flex;
    justify-content: center;
    @media ${Device.mobile} {
        width: 100%;
    }
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
    @media ${Device.mobile} {
        font-size: 15px;
    }
`;

const TabControlItem = (props: {
    content: string;
    handleIndex: (index: number) => void;
    index: number;
    selected: boolean;
}) => {
    const { content, handleIndex, index, selected } = props;
    const handleChange = () => {
        handleIndex(index);
    };
    return (
        <TabControlItemBox selected={selected} onClick={handleChange}>
            {content}
        </TabControlItemBox>
    );
};

const TabControl = ({
    value,
    handleIndex,
    arr,
}: {
    value: number;
    handleIndex: (index: number) => void;
    arr: string[];
}) => {
    return (
        <TabControlBox>
            {arr.map((item, index) => {
                return (
                    <TabControlItem
                        selected={index === value}
                        content={item}
                        handleIndex={handleIndex}
                        index={index}
                        key={index}
                    />
                );
            })}
        </TabControlBox>
    );
};

export default TabControl;
