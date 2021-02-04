import styled from 'styled-components'

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
            <div>
            <h2>선자세 딜캐</h2>
            <table>
                <tbody>
                <tr>
                    <th>프레임</th>
                    <th>커맨드</th>
                    <th>데미지</th>
                    <th>판정</th>
                </tr>
                {Data.standing.map((row,index)=>(
                    <tr key={index}>
                        <td>{row.frame}</td>
                        <td>{row.command}</td>
                        <td>{row.damage}</td>
                        <td>{row.range}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            
            <div>
            <h2>기상 딜캐</h2>
            <table>
                <thead>
                <tr>
                    <th>프레임</th>
                    <th>커맨드</th>
                    <th>데미지</th>
                    <th>판정</th>
                </tr>
                </thead>
                <tbody>
                {Data.up.map((row)=>(
                    <tr key={row.frame}>
                        <td>{row.frame}</td>
                        <td>{row.command}</td>
                        <td>{row.damage}</td>
                        <td>{row.range}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </Wrapper>
    )
}

export default Punish;