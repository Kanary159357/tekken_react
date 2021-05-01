import React from 'react'
import styled from 'styled-components'
import ContactFrom from './Home/ContactForm'
import CommandDescription from './Home/CommandDescription'
import SiteUsage from './Home/SiteUsage'
const HomeWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    .wrapper{
    width: calc(70% + 200px);
    height: 90%;
    background: #fff;
    display:flex;
    flex-direction:column;
    }
`

const Header = styled.div`
    width: 100%;
    font-size: 50px;
    font-weight: 900;
    height: 15%;
    padding-top : 5%;
    display: table-cell; 
    vertical-align: middle;
    text-align: center;
`

const Content = styled.div`
    width: 100%;
    height: 80%;
    display:flex;
    flex-direction:row;
`

const Home = ()=>{
    return(
        <HomeWrapper>
            <div className="wrapper">
                <Header>
                Tekken Info
                </Header>
                <Content>
                <CommandDescription/>
                <SiteUsage/>
                <ContactFrom/>
                </Content>
            </div>
        </HomeWrapper>
    )
}

export default Home;