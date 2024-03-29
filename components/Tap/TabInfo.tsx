import Table from '../Table/Table';
import React from 'react';
import styled from 'styled-components';
import {
    Combo,
    Extrahit,
    InfoProps,
    MainMove,
    Pattern,
    Standing,
    Throw,
    Up,
    WallCombo,
} from '../../lib/types/CharProps';
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 100px;
    }
`;

interface TabInfoProps {
    data: TableItemProps[];
}
export interface TableItemProps {
    header: string;
    columns: string[];
    data:
        | Standing[]
        | Up[]
        | Combo[]
        | WallCombo[]
        | Throw[]
        | Extrahit[]
        | InfoProps[]
        | Pattern[]
        | MainMove[];
    tag: { description: string; detail: string[] };
}

const TabInfo = ({ data }: TabInfoProps) => {
    return (
        <Wrapper>
            {data.map((item, index) => {
                return <Table key={index} item={item} />;
            })}
        </Wrapper>
    );
};

export default TabInfo;
