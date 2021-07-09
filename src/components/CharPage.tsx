import React, { useCallback, useEffect, useState } from 'react';
import Info from './pageComponents/Info';
import Main from './pageComponents/Main';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useDBData, useDBDispatch } from '../Context/DBContext';
import { LoadData } from '../Context/DBContextFunc';
import { Device } from '../styles/theme';
import { LoadingWithoutOverlay } from './Loading';
import CommandDescription from './CommandDescription';

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
    const [description, setDescription] = useState(true);
    useEffect(() => {
        console.log('temp');
        LoadData(charName, tempDispatch);
        console.log(charProps);
    }, [charName]);

    const handleDescription = useCallback(() => {
        setDescription(false);
    }, []);
    return (
        <CharWrap>
            {loading ? (
                <LoadingWithoutOverlay />
            ) : (
                <>
                    {description && (
                        <CommandDescription func={handleDescription} />
                    )}
                    <>
                        <Info data={charProps?.Info} />
                        <Main data={charProps!} />
                    </>
                </>
            )}
        </CharWrap>
    );
};

export default Page;
