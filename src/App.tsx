import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Page/Home';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Page from './components/Page/CharPage';
import Data from './components/Data';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from './styles/GlobalStyle';
import { CharProps } from './types/CharProps';

const Wrapper = styled.div`
    background: #e8e8e8;
`;

const PageContent = styled.div`
    position: absolute;
    height: 100%;
    width: calc(100% - 240px);
    left: 240px;
    background: #808080;
    @media all and (max-width: 1140px) {
        left: 0;
        width: 100%;
    }
`;

interface MenuProps {
    onClick: () => void;
    icon: IconDefinition;
}

const MenuButtonBlock = styled(FontAwesomeIcon)<MenuProps>`
    position: fixed;
    top: 2.5%;
    left: 20px;
    z-index: 999;
    font-size: 20px;
    color: #fff;
    visibility: hidden;
    @media all and (max-width: 1140px) {
        visibility: visible;
    }
`;

const Overlay = styled.div<{ toggle: boolean }>`
    width: 100%;
    position: fixed;
    height: 100%;
    z-index: 996;
    background: rgba(122, 122, 122, 0.5);
    visibility: ${(props) => (props.toggle ? 'visible' : 'hidden')};
`;

type Ops = {
    [key: string]: Object;
};
function App() {
    const [toggle, setToggle] = useState(false);
    const Opdata: Ops = Data;
    return (
        <>
            <title>Tekken_info 0.1.0</title>
            <GlobalStyle />
            <Wrapper>
                <MenuButtonBlock
                    icon={toggle ? faTimes : faBars}
                    onClick={() => {
                        setToggle(!toggle);
                        console.log(toggle);
                    }}
                />
                <Sidebar toggle={toggle} Data={Opdata} />
                <Overlay
                    toggle={toggle}
                    onClick={() => {
                        setToggle(!toggle);
                        console.log(toggle);
                    }}
                />
                <PageContent>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />

                        {Object.keys(Opdata).map((element, index) => (
                            <Route key={index} path={`/${element}`}>
                                <Page data={Opdata[element]} />
                            </Route>
                        ))}
                    </Switch>
                </PageContent>
            </Wrapper>
        </>
    );
}

export default App;
