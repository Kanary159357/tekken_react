import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-left: 50px;
    }
`

const CreateData = (move,description)=>{
    return {move, description};
}


const movedata = [
    CreateData("6rk", "뻥발, 리치 긴 노딜 중단 카운터기"),
    CreateData("6n23rk", "나락, 풍신류 근본의 강력한 하단"),
    CreateData("6n23rp(J)", "초풍, 좆사기"),
    CreateData("6rk", "뻥발, 리치 긴 노딜 중단 카운터기"),
    CreateData("6rk", "뻥발, 리치 긴 노딜 중단 카운터기"),


]

const MainMove = ({Data})=>{
    return(
        <Wrapper>
            <h2>주력기</h2>
            <table>
                <tbody>
                {Data.map((row,index)=>(
                     <tr key={index}>
                     <td>{row.command}</td>
                     <td>{row.state}</td>
                     <td>{row.damage}</td>
                     <td>{row.guard}</td>
                     <td>{row.description}</td>
                 </tr>
                ))}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default MainMove;