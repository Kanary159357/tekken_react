import React, { useCallback, useEffect, useState } from 'react';
import Info from '../PageComponents/Info';
import Main from '../PageComponents/Main';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useDBData, useDBDispatch } from '../../context/DBContext';
import { LoadData } from '../../context/DBContextFunc';
import { Device, Palette } from '../../styles/theme';
import { LoadingWithoutOverlay } from '../PageComponents/Loading';
import CommandDescription from '../PageComponents/CommandDescription';
import CustomIcon from '../../styles/components/Icon';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const CharWrap = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media ${Device.desktop} {
        flex-direction: column;
    }
`;

const DescriptionButton = styled.div`
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    cursor: pointer;
    @media ${Device.desktop} {
        top: 5px;
        right: 20px;
    }
`;

const Page = () => {
    let { char }: { char: string } = useParams();
    const charName = char.substring(1);
    const { charProps, loading } = useDBData();
    const tempDispatch = useDBDispatch();
    const [description, setDescription] = useState(false);
    const [tableIndex, setTableIndex] = useState(0);
    useEffect(() => {
        console.log('temp');
        LoadData(charName, tempDispatch);
        console.log(charProps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charName]);

    const handleDescription = useCallback(() => {
        setDescription(false);
    }, []);

    const handleIndex = useCallback((index: number) => {
        setTableIndex(index);
    }, []);

    return (
        <CharWrap>
            <DescriptionButton onClick={() => setDescription(true)}>
                <CustomIcon icon={faQuestionCircle} color={Palette.gray_1} />
            </DescriptionButton>
            {loading ? (
                <LoadingWithoutOverlay />
            ) : (
                <>
                    {description && (
                        <CommandDescription func={handleDescription} />
                    )}
                    <>
                        <Info data={charProps?.Info} name={charName} />
                        <Main
                            data={charProps!}
                            tableIndex={tableIndex}
                            handleIndex={handleIndex}
                        />
                    </>
                </>
            )}
        </CharWrap>
    );
};

export default Page;
