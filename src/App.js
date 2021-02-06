
import styled,{createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom'
import Jin from './character/Jin'
import Home from './character/Home'
import Sidebar from './components/Sidebar'
import {useState} from 'react'
import CharPage from './components/CharPage'
import AsukaData from './info/AsukaData.json'
import JinData from './info/JinData.json'
import CharData from './components/CharData'
const GlobalStyle = createGlobalStyle`
html, body{
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}

  table{
    width: 90%;
    border: 1px solid black;
    border-collapse:collapse;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  th,td{
    border : 1px solid black;
    border-collapse: collapse;
  }
  th,td,tr{
    padding: 5px;
  }
  th{
    text-align: left;
  }
`

const Wrapper = styled.div`
    background:#e8e8e8;
`

const PageContent = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 240px);
  left: 240px;
  background: gray;
  @media all and (max-width:1024px){
    left: 0;
    width:100%;
  }
`

const MenuButtonBlock = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
    background: tomato;
    visibility: hidden;
    @media all and (max-width: 1024px){
      visibility:visible;
    }
`

const Overlay = styled.div`
    width: 100%;
    position:fixed;
    height: 100%;
    z-index: 996;
    background: rgba(122, 122, 122, 0.5);
    visibility: ${props=>props.toggle ? 'visible' : 'hidden'};
`



function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
    <title>Tekken_info 0.1.0</title>
    <GlobalStyle/>
    <Wrapper>
            <MenuButtonBlock onClick={()=>{
              setToggle(!toggle);
              console.log(toggle);
            }}>안녕</MenuButtonBlock>
            <Sidebar toggle = {toggle} CharData={CharData}/>
            <Overlay toggle={toggle} onClick={()=>{
              setToggle(!toggle);
              console.log(toggle);
            }}/>
            <PageContent>
            <Switch>
                 <Route path="/" exact={true} component={Home}/>
                 {Object.keys(CharData).map((element,index)=>(
     <Route path={`/${element}`}><CharPage data={CharData[element]}/></Route>
))}
            </Switch>
            </PageContent>
    </Wrapper>
    </>
  );
}

export default App;
