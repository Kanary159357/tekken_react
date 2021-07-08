import React, { useEffect } from 'react';
import Info from './pageComponents/Info';
import Main from './pageComponents/Main';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useDBData, useDBDispatch } from '../Context/DBContext';
import { LoadData } from '../Context/DBContextFunc';
import { Device } from '../styles/theme';
import { LoadingWithoutOverlay } from './Loading';

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
    const { charProps, loading } = useDBData();
    const tempDispatch = useDBDispatch();
    useEffect(() => {
        console.log('temp');
        LoadData(charName, tempDispatch);
        console.log(charProps);
    }, [charName]);

    return (
        <CharWrap>
            {loading ? (
                <LoadingWithoutOverlay />
            ) : (
                <>
                    <Info data={charProps?.Info} />
                    <Main data={charProps!} />
                </>
            )}
        </CharWrap>
    );
};

export default Page;
