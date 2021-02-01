import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    align-items: center;
`

const CreateData = (state, command)=>{
    return {state, command};
}

const data = [
    CreateData("쉬운 콤보", "3rp-236lp-3lp4-rk-2rkrpap"),
    CreateData("쉬운 콤보", "3rp-236lp-3lp4-rk-2rkrpap"),
    CreateData("어려운 콤보", "3rp - 236lp - 236lp - 236lp - 3lp4 - rk - 2rkrpap"),
]

const Combo = ()=>{
    return(
        <Wrapper>
            <table>
                {data.map((row)=>(
                    <tr>
                        <td>{row.state}</td>
                        <td>{row.command}</td>
                    </tr>
    ))}

            </table>
        </Wrapper>
    )
}

export default Combo;