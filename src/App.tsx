import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { useCallback, useState } from 'react';
import Page from './components/CharPage';
import React from 'react';
import {
    faBars,
    faTimes,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from './styles/GlobalStyle';
import { useDBData } from './Context/DBContext';
import Error from './components/Error';
import Modal from './components/Modal';
import { useModalData } from './Context/ModalContext';
import CustomIcon from './styles/Icon';
import { Device, Palette } from './styles/theme';
import { NewProps } from './Context/DBContextFunc';
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
    top: 2.5%;
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

function App() {
    const [toggle, setToggle] = useState(false);
    const { open } = useModalData();
    const handleToggle = useCallback(() => {
        setToggle(false);
    }, []);
    return (
        <>
            <title>Tekken_info 0.1.0</title>
            <GlobalStyle />
            <Wrapper>
                <MenuButtonBlock
                    icon={toggle ? faTimes : faBars}
                    onClick={() => setToggle(!toggle)}
                />
                <Sidebar toggle={toggle} handleToggle={handleToggle} />
                <Overlay toggle={toggle} onClick={handleToggle} />

                <PageContent>
                    <button onClick={NewProps}>안녕</button>

                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/data/:char" exact={true}>
                            <Page />
                        </Route>
                        <Route component={Error} />
                    </Switch>
                </PageContent>
                {open && <Modal />}
            </Wrapper>
        </>
    );
}

export default App;
