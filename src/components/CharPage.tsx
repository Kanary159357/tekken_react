import React, { useEffect } from 'react';
import Info from './pageComponents/Info';
import Main from './pageComponents/Main';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useDBData, useDBDispatch } from '../Context/DBContext';
import { LoadData } from '../Context/DBContextFunc';
import { Device } from '../styles/theme';

const CharWrap = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media ${Device.desktop} {
        flex-direction: column;
    }
`;

const Page = () => {
    let { char }: { char: string } = useParams();
    const charName = char.substring(1);
    const tempdata = useDBData().charProps;
    const tempDispatch = useDBDispatch();
    useEffect(() => {
        LoadData(charName, tempDispatch);
    }, [charName]);

    return (
        <CharWrap>
            <Info data={tempdata?.Info} />
            <Main data={tempdata!} />
        </CharWrap>
    );
};

export default Page;
