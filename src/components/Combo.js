import styled from 'styled-components';
import Jin from '../character/Jin';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-left: 50px;
    }
`

const Combo = ({Data})=>{
    return(
        <Wrapper>
            <h2>콤보</h2>
            <table>
                <tbody>
                {Data.combo.map((row,index)=>(
                    <tr key={index}>
                        <td>{row.state}</td>
                        <td>{row.command}</td>
                        <td>{row.damage}</td>
                    </tr>
                 ))}          
    </tbody> 
     </table>

                    <h2>추가타</h2>
                    <table>
                    <tbody>
                {Data.extrahit.map((row,index)=>(
                       <tr  key={index}>
                       <td>{row.state}</td>
                       <td>{row.extra}</td>
                   </tr>
                ))}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Combo;