import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;

    h2{
        margin-left: 100px;
    }
  
`

const TableBox = styled.div`

`

const CreateData = (move,description)=>{
    return {move, description};
}


const movedata = [
    CreateData("6rk", "뻥발, 반시계횡으로 피해자"),
    CreateData("6n23rk", "나락, -23"),
    CreateData("6n23rp(J)", "초풍, 앉아서 띄우면 좋겠지면 힘드니 기상킥이라도 때리자"),
    CreateData("rprk", "2타 앉아서 숙이기"),
    CreateData("rplprk", "통칭 투원포, 노딜레이로 쓰면 얌전히 가드해야하고 딜레이 주면 반시계횡으로 피해짐"),


]

const MainMove = ()=>{
    return(
        <Wrapper>
            <TableBox>
            <h2>주력기 딜캐 및 파해</h2>
            <table>
                {movedata.map((row)=>(
                     <tr>
                     <td>{row.move}</td>
                     <td>{row.description}</td>
                     <td>{row.move}</td>
                     <td>{row.description}</td>
                 </tr>
                ))}
            </table>
            </TableBox>
            <TableBox>
            <h2>주력기 딜캐 및 파해</h2>
            <table>
                {movedata.map((row)=>(
                     <tr>
                     <td>{row.move}</td>
                     <td>{row.description}</td>
                 </tr>
                ))}
            </table>
            </TableBox>
        </Wrapper>
    )
}

export default MainMove;