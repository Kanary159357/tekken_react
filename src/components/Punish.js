import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-left: 100px;
    }

`

const createData = (frame, command, damage, range)=>{
    return {frame,command,damage,range};
}


const Data = [
    createData(10, "lplprp", "6,6,8", "상,상,중"),
    createData(11, "3akrp", "20,30", "중,중"),
    createData(12, "3lprp", "10,30", "중,중"),
    createData(13, "7akrp", "10,10", "중,중"),
    createData(15, "3akrp", "20,30", "중,중"),
    createData(10, "lplprp", "6,6,8", "상,상,중"),
    createData(11, "3akrp", "20,30", "중,중"),
    createData(12, "3lprp", "10,30", "중,중"),
    createData(13, "7akrp", "10,10", "중,중"),
    createData(15, "3akrp", "20,30", "중,중"),
    createData(11, "3akrp", "20,30", "중,중"),
    createData(12, "3lprp", "10,30", "중,중"),
    createData(13, "7akrp", "10,10", "중,중"),
    createData(15, "3akrp", "20,30", "중,중"),       createData(11, "3akrp", "20,30", "중,중"),
    createData(12, "3lprp", "10,30", "중,중"),
    createData(13, "7akrp", "10,10", "중,중"),
    createData(15, "3akrp", "20,30", "중,중"),       
    
]

const Punish = ({Data})=>{
    console.log(Data);
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
                {Data.map((row)=>(
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
            
            <div>
            <h2>기상 딜캐</h2>
            <table>
                <tbody>
                <tr>
                    <th>프레임</th>
                    <th>커맨드</th>
                    <th>데미지</th>
                    <th>판정</th>
                </tr>
                {Data.map((row)=>(
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