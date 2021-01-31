import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const Wrapper = styled.div`
    width :13%;
    background: #333;
    height:100%;
    min-width: 130px;
    position:absolute;
    top:0;
    left:0;
    overflow-y: auto;
    -ms-overflow-style: none; 
    ::-webkit-scrollbar { display: none; }

    .Main{
        width: 100%;
        height: 60px;
    
        display:flex;
        justify-content:center;
        align-items:center;

        a{
            text-decoration:none;
            color: #fff;
        }
    }
`

const SideItemLink = styled.li`
display: flex;
padding:0;
    a{
        width:100%;
        padding-left: 30px;
        color:white;
        line-height:3;
        user-select:none;
        text-decoration: none;
    }
    &:active, &:hover{
        background: #323;
    }
`


const SidebarItem = ({path})=>{
    const checkedPath = path.replace('_', ' ');
    return(
        <SideItemLink>
            <Link to= {"/"+path}>
            {checkedPath}
            </Link>
        </SideItemLink>
    )
}


const Sidebar =()=>{
    return(
        <Wrapper>
            <div className="Main">
                <Link to="/">Tekken-Info</Link>
            </div>
            <SidebarItem path="Jin"/>
            <SidebarItem path="Asuka"/>
            <SidebarItem path="Akuma"/>
            <SidebarItem path="Lili"/>
            <SidebarItem path="Geese"/>
            <SidebarItem path="Katarina"/>
            <SidebarItem path="Noctis"/>
            <SidebarItem path="King"/>
            <SidebarItem path="Armor_king"/>
            <SidebarItem path="Lei"/>
            <SidebarItem path="Alisa"/>
            <SidebarItem path="Aliza"/>
            <SidebarItem path="Leroy"/>
            <SidebarItem path="Kuma/Panda"/>
            <SidebarItem path="Jin"/>
            <SidebarItem path="Asuka"/>
            <SidebarItem path="Jin"/>
            <SidebarItem path="Asuka"/>
            <SidebarItem path="Akuma"/>
            <SidebarItem path="Lili"/>
            <SidebarItem path="Geese"/>
            <SidebarItem path="Katarina"/>
            <SidebarItem path="Noctis"/>
            <SidebarItem path="King"/>
            <SidebarItem path="Armor_king"/>
            <SidebarItem path="Lei"/>
            <SidebarItem path="Alisa"/>
            <SidebarItem path="Aliza"/>
            <SidebarItem path="Leroy"/>
            <SidebarItem path="Kuma/Panda"/>
            <SidebarItem path="Jin"/>
            <SidebarItem path="Asuka"/>
        </Wrapper>
    )
}

export default Sidebar;