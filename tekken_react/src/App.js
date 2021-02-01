
import styled,{createGlobalStyle} from 'styled-components';
import {Route, Switch} from 'react-router-dom'
import Jin from './character/Jin'
import Asuka from './character/Asuka'
import Home from './character/Home'
import Sidebar from './components/Sidebar'

const GlobalStyle = createGlobalStyle`
  table{
    width: 80%;
    min-width:200px;
    border: 1px solid black;
    border-collapse:collapse;
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
    height:100%;
    width: 100%;
    display:flex;
`

const PageContent = styled.div`
  position: absolute;
  top:0;
  left: 13%;
  width:87%;
  height:100%;
  overflow-y:auto;
  background:#e8e8e8;
  flex: 1 1 auto;
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
            <Sidebar/>
            <PageContent>
            <Switch>
                 <Route path="/" exact={true} component={Home}/>
                 <Route path="/Jin" component={Jin}/>
                 <Route path="/Asuka" component={Asuka}/>
            </Switch>
            </PageContent>
    </Wrapper>
    </>
  );
}

export default App;
