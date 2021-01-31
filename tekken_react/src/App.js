
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom'
import Jin from './character/Jin'
import Asuka from './character/Asuka'
import Home from './character/Home'
import Sidebar from './components/Sidebar'
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
