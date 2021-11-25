import React, { useCallback, useEffect, useState } from 'react';
import Info from '../../components/PageComponents/Info';
import Main from '../../components/PageComponents/Main';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Device, Palette } from '../../styles/theme';
import { LoadingWithoutOverlay } from '../../components/PageComponents/Loading';
import CommandDescription from '../../components/PageComponents/CommandDescription';
import CustomIcon from '../../base/Icon';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import useCharDataQuery from '../../hooks/useCharDataQuery';
import { dehydrate, QueryClient } from 'react-query';
import { GetServerSideProps } from 'next';
import { getCharData } from '../../utils/queryFn';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['char', context.query.name], () =>
        getCharData(context.query.name as string)
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};

const Char = () => {
    const router = useRouter();
    const { name } = router.query;
    const [description, setDescription] = useState(false);
    const [tableIndex, setTableIndex] = useState(0);
    const { data, isLoading, isFetching, isError } = useCharDataQuery(
        name as string
    );
    if (isError) {
        router.push('/404');
    }
    const handleDescription = useCallback(() => {
        setDescription(false);
    }, []);
    useEffect(() => {
        console.log(isError);
    }, [isError]);
    const handleIndex = useCallback((index: number) => {
        setTableIndex(index);
    }, []);

    return (
        <CharWrap>
            <Head>
                <title>{name} | 6N23RP</title>
            </Head>
            <DescriptionButton onClick={() => setDescription(true)}>
                <CustomIcon icon={faQuestionCircle} color={Palette.gray_1} />
            </DescriptionButton>
            {isLoading ? (
                <LoadingWithoutOverlay />
            ) : (
                <>
                    {description && (
                        <CommandDescription func={handleDescription} />
                    )}
                    <>
                        <Info data={data?.Info} name={name as string} />
                        <Main
                            data={data!}
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
