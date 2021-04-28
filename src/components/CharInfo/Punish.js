import styled from 'styled-components'
import Table from '../Table'
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-left: 100px;
    }

`


const Punish = ({Data})=>{
    return(
        <Wrapper>
                 <Table header="선자세 딜캐" columns={["프레임", "커맨드", "데미지", "판정", "히트이득"]}data={Data.standing}/>
                 <Table header="앉은자세 딜캐" columns={["프레임", "커맨드", "데미지", "판정", "히트이득"]}data={Data.up}/>
        </Wrapper>
    )
}

export default Punish;