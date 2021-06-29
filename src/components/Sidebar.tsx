import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper = styled.div<{ toggle: boolean }>`
    width: 240px;
    background: #212529;
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

    @media all and (max-width: 1140px) {
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
        color: white;
        line-height: 3;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        &:active,
        &:link,
        &:hover {
            color: #fff;
        }
    }
    &:hover {
        background: #333;
        color: #fff;
    }
`;

interface itemProps {
    path: string;
    onCharChange: (text: string) => void;
}

const SidebarItem = ({ path, onCharChange }: itemProps) => {
    const checkedPath = path.replace('_', ' ');
    const handleChange = () => {
        onCharChange(path);
    };
    return (
        <SideItemLink onClick={handleChange}>
            <Link to={`/data/:${checkedPath}`}>{checkedPath}</Link>
        </SideItemLink>
    );
};

interface Props {
    toggle: boolean;
    Data: string[];
    onCharChange: (text: string) => void;
}

const Sidebar = ({ toggle, Data, onCharChange }: Props) => {
    return (
        <Wrapper toggle={toggle}>
            <div className="Main">
                <Link to="/">Tekken-Info</Link>
            </div>
            {Data.map((element, index) => {
                return (
                    <SidebarItem
                        path={element}
                        key={index}
                        onCharChange={onCharChange}
                    />
                );
            })}
        </Wrapper>
    );
};

export default Sidebar;
