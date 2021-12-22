import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import Link from 'next/link';
import { Device, FontColor, Palette } from '../../styles/theme';
const Wrapper = styled.div<{ toggle: boolean }>`
    width: 240px;
    background: ${Palette.black_1};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    overflow-y: auto;
    -ms-overflow-style: none;
    flex-direction: column;
    transition: all 0.1s;

    ::-webkit-scrollbar {
        display: none;
    }

    @media ${Device.desktop} {
        width: 240px;
        left: ${(props) => (props.toggle ? '0' : '-240px')};
        z-index: 997;
    }

    .Main {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            text-decoration: none;
            color: #fff;
        }
    }
`;

const SideItemLink = styled.li`
    display: flex;
    padding: 0;
    a {
        width: 100%;
        padding-left: 30px;
        color: ${FontColor.white};
        line-height: 3;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        &:active,
        &:link,
        &:hover {
            color: ${FontColor.white};
        }
    }
    &:hover {
        background: ${Palette.black_2};
        color: ${FontColor.white};
    }
`;

interface itemProps {
    path: string;
    handleToggle: () => void;
}

const SidebarItem = ({ path, handleToggle }: itemProps) => {
    const checkedPath = path.replace('_', ' ');

    return (
        <SideItemLink onClick={handleToggle}>
            <Link href={`/char/${checkedPath}`}>{checkedPath}</Link>
        </SideItemLink>
    );
};

interface Props {
    toggle: boolean;
    handleToggle: () => void;
}
const CharNames = [
    'Akuma',
    'Alisa',
    'Anna',
    'ArmorKing',
    'Asuka',
    'Bob',
    'Bryan',
    'Claudio',
    'DevilJin',
    'Dragunov',
    'Eddy',
    'Eliza',
    'Feng',
    'Fahkumram',
    'Ganryu',
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
    'Leroy',
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
    'Zafina',
];

const Sidebar = ({ toggle, handleToggle }: Props) => {
    return (
        <Wrapper toggle={toggle}>
            <div className="Main">
                <Link href="/">6N23RP.COM</Link>
            </div>
            <UserProfile />
            {CharNames.map((element, index) => {
                return (
                    <SidebarItem
                        handleToggle={handleToggle}
                        path={element}
                        key={index}
                    />
                );
            })}
        </Wrapper>
    );
};

export default React.memo(Sidebar);
