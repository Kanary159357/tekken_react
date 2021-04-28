import styled from 'styled-components';
import Table from '../Table'

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-left: 50px;
    }
`

const MainMove = ({Data})=>{
    return(
        <Wrapper>
     <Table header="주력기" columns={["커맨드", "프레임", "판정", "데미지", "가드프레임",  "설명"]}data={Data}/>
        </Wrapper>
    )
}

export default MainMove;