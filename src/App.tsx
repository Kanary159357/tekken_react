import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Page/Home';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import Page from './components/Page/CharPage';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from './styles/GlobalStyle';
import db from './firebaseInit';
import { CharProps } from './types/CharProps';
import { StateProvider } from './DBContext';
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

const CharNames = [
    'Akuma',
    'Alisa',
    'Anna',
    'ArmorKing',
    'Asuka',
    'Bob',
    'Bryan',
    'Cladio',
    'DevilJin',
    'Dragunov',
    'Eddy',
    'Eliza',
    'Feng',
    'Geese',
    'Gigas',
    'Heihachi',
    'Hworang',
    'Jack7',
    'Jin',
    'Josie',
    'Julia',
    'Katarina',
    'Kazumi',
    'Kazuya',
    'King',
    'Kuma',
    'Kunimitsu',
    'Lars',
    'Law',
    'Lee',
    'Lei',
    'Leo',
    'Lidia',
    'Lili',
    'Lucky',
    'Marduk',
    'MasterRaven',
    'Miguel',
    'Negan',
    'Nina',
    'Noctis',
    'Paul',
    'Shaheen',
    'Steve',
    'Xiaoyu',
    'Yoshimitsu',
];

function App() {
    const [toggle, setToggle] = useState(false);
    const [curChar, setCurChar] = useState('Jin');
    const [data, setData] = useState<CharProps>();
    useEffect(() => {
        async function getFromDocs() {
            const ascorder = (arr: any[]) => {
                return arr.map((cur: { [key: string]: string }) =>
                    Object.keys(cur)
                        .sort()
                        .reduce((obj: any, key: string) => {
                            obj[key] = cur[key];
                            return obj;
                        }, {})
                );
            };
            const data = await db
                .collection('Character')
                .doc(curChar)
                .get()
                .then((snap) => {
                    return snap.data() as CharProps;
                });
            data.combo = ascorder(data.combo);
            data.WallCombo = ascorder(data.combo);
            data.Throw = ascorder(data.Throw);
            data.up = ascorder(data.up);
            data.standing = ascorder(data.standing);
            data.Extrahit = ascorder(data.Extrahit);
            setData(data);
        }
        getFromDocs();
    }, [curChar]);
    const onCharChange = (text: string) => {
        setCurChar(text);
    };

    return (
        <StateProvider>
            <title>Tekken_info 0.1.0</title>
            <GlobalStyle />
            <Wrapper>
                <MenuButtonBlock
                    icon={toggle ? faTimes : faBars}
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                />
                <Sidebar
                    toggle={toggle}
                    Data={CharNames}
                    onCharChange={onCharChange}
                />
                <Overlay
                    toggle={toggle}
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                />
                <PageContent>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />

                        <Route path="/data/:char" exact={true}>
                            <Page data={data} />
                        </Route>
                    </Switch>
                </PageContent>
            </Wrapper>
        </StateProvider>
    );
}

export default App;
