import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;

    h2{
        margin-left: 100px;
    }
  
`

const Throw = ({Data})=>{
    return(
        <Wrapper>
            <div>
            <h2>잡기</h2>
            <table>
            <thead>
                <tr>
                    <th>커맨드</th>
                    <th>프레임</th>
                    <th>잡기풀기</th>
                    <th>데미지</th>
                    <th>풀기 프레임</th>
                    <th>설명</th>
                </tr>
                </thead>
                <tbody>
                {Data.map((row,index)=>(
                     <tr key={index}>
                     <td>{row.command}</td>
                     <td>{row.frame}</td>
                     <td>{row.way}</td>
                     <td>{row.damage}</td>
                     <td>{row.unthrow}</td>
                     <td>{row.description}</td>
                 </tr>
                ))}
                </tbody>
            </table>
            </div>
        </Wrapper>
    )
}

export default Throw;