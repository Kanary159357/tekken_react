import React, { useCallback, useEffect, useState } from 'react';
import Info from '../../components/PageComponents/Info';
import Main from '../../components/PageComponents/Main';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDBData, useDBDispatch } from '../../context/DBContext';
import { LoadData } from '../../context/DBContextFunc';
import { Device, Palette } from '../../styles/theme';
import { LoadingWithoutOverlay } from '../../components/PageComponents/Loading';
import CommandDescription from '../../components/PageComponents/CommandDescription';
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

const Char = () => {
    const router = useRouter();
    const { name } = router.query;
    console.log(name);
    const { charProps, loading } = useDBData();
    const tempDispatch = useDBDispatch();
    const [description, setDescription] = useState(false);
    const [tableIndex, setTableIndex] = useState(0);
    useEffect(() => {
        LoadData(name as string, tempDispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

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
                        <Info data={charProps?.Info} name={name as string} />
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

export default Char;
