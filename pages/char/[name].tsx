import React, { useCallback, useState } from 'react';
import Info from '../../components/PageComponents/Character/Info';
import Main from '../../components/PageComponents/Character/Main';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Device, Palette } from '../../lib/styles/theme';
import { LoadingWithoutOverlay } from '../../components/base/Loading';
import CommandDescription from '../../components/PageComponents/Home/CommandDescription';
import CustomIcon from '../../components/base/Icon';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import { wrapper } from '../../lib/store/store';
import { verifyAdmin } from '../../fireabaseAdminInit';
import { setUser } from '../../lib/store/slice/userReducer';
import {
    getCharacterByName,
    getRunningOperationPromises,
    useGetCharacterByNameQuery,
} from '../../lib/store/api/charApi';
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

export const getServerSideProps: GetServerSideProps =
    wrapper.getServerSideProps((store) => async (context) => {
        const cookies = nookies.get(context);
        if (cookies.token !== undefined && cookies.token !== '') {
            try {
                const {
                    name: displayName,
                    picture: photoURL,
                    uid,
                } = await verifyAdmin(cookies.token);
                store.dispatch(setUser({ displayName, photoURL, uid }));
            } catch (e) {
                console.log(e.code);
            }
        }
        if (typeof context.query.name === 'string') {
            try {
                store.dispatch(
                    getCharacterByName.initiate(context.query.name as string)
                );
                await Promise.all(getRunningOperationPromises());
            } catch (error) {
                return {
                    redirect: {
                        permanent: false,
                        destination: '/404',
                    },
                };
            }
        }

        return {
            props: {},
        };
    });

const Char = () => {
    const router = useRouter();
    const name = router.query.name as string;
    const [description, setDescription] = useState(false);
    const [tableIndex, setTableIndex] = useState(0);
    const { data, error, isLoading, isFetching } =
        useGetCharacterByNameQuery(name);

    const handleDescription = useCallback(() => {
        setDescription(false);
    }, []);

    const handleIndex = useCallback((index: number) => {
        setTableIndex(index);
    }, []);

    return (
        <CharWrap>
            <Head>
                <title>{name} | 6N23RP</title>
                <meta
                    name="description"
                    content={
                        name +
                        ', 철권 7 캐릭터들의 딜캐, 콤보, 주력기, 잡기 등의 정보 공유'
                    }
                />
                <meta property="og:title" content={name} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="6n23rp.com" />
                <meta property="og:image" content={`/img/${name}.png`} />
            </Head>
            <DescriptionButton onClick={() => setDescription(true)}>
                <CustomIcon icon={faQuestionCircle} color={Palette.gray_1} />
            </DescriptionButton>
            {isLoading || isFetching ? (
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
