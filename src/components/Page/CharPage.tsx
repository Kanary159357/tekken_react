import React, { useEffect } from 'react';
import Info from '../pageComponents/Info';
import Main from '../pageComponents/Main';
import styled from 'styled-components';
import { CharProps } from '../../types/CharProps';
import { useParams } from 'react-router';
import { AddData, LoadData, useDBData, useDBDispatch } from '../../DBContext';

const CharWrap = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1140px) {
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
