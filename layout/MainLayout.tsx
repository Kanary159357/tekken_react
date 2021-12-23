import styled from 'styled-components';

import { useCallback, useState } from 'react';
import React from 'react';
import {
    faBars,
    faTimes,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from '../styles/GlobalStyle';
import Modal from '../components/Modal';
import CustomIcon from '../components/base/Icon';
import Sidebar from '../components/Sidebar/Sidebar';
import { Device, Palette } from '../styles/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Head from 'next/head';
const Wrapper = styled.div`
    background: #e8e8e8;
`;

const PageContent = styled.div`
    position: absolute;
    height: 100%;
    width: calc(100% - 240px);
    left: 240px;
    @media ${Device.desktop} {
        left: 0;
        width: 100%;
    }
`;

interface MenuProps {
    onClick: () => void;
    icon: IconDefinition;
}

const MenuButtonBlock = styled(CustomIcon)<MenuProps>`
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 999;
    font-size: 20px;
    color: #fff;
    visibility: hidden;
    cursor: pointer;
    @media ${Device.desktop} {
        visibility: visible;
    }
`;

const Overlay = styled.div<{ toggle: boolean }>`
    width: 100%;
    position: fixed;
    height: 100%;
    z-index: 996;
    background: ${Palette.overlay};
    visibility: ${(props) => (props.toggle ? 'visible' : 'hidden')};
`;

function MainLayout({ children }) {
    const [toggle, setToggle] = useState(false);
    const isOpen = useSelector(
        (state: RootState) => state.dialogReducer.isOpen
    );
    const handleToggle = useCallback(() => {
        setToggle(false);
    }, []);
    const changeToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle]);
    return (
        <>
            <Head>
                {' '}
                <title>6N23RP</title>
                <link rel="icon" type="image/png" href="/icon/nneo.png" />
            </Head>
            <GlobalStyle />
            <Wrapper>
                <MenuButtonBlock
                    icon={toggle ? faTimes : faBars}
                    onClick={changeToggle}
                />
                <Sidebar toggle={toggle} handleToggle={handleToggle} />
                <Overlay toggle={toggle} onClick={handleToggle} />

                <PageContent>{children}</PageContent>
                {isOpen && <Modal />}
            </Wrapper>
        </>
    );
}

export default MainLayout;
