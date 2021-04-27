import styled from 'styled-components';


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
            <h2>주력기</h2>
            <table>
            <thead>
                <tr>
                    <th>커맨드</th>
                    <th>프레임</th>
                    <th>판정</th>
                    <th>데미지</th>
                    <th>가드프레임</th>
                    <th>설명</th>
                </tr>
                </thead>
                <tbody>
                {Data.map((row,index)=>(
                     <tr key={index}>
                     <td>{row.command}</td>
                     <td>{row.frame}</td>
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