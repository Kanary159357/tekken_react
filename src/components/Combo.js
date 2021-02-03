import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin-left: 50px;
    }
`

const CreateData = (state, command)=>{
    return {state, command};
}

const data = [
    CreateData("쉬운 콤보", "3rp-236lp-3lp4-rk-2rkrpap"),
    CreateData("쉬운 콤보", "3rp-236lp-3lp4-rk-2rkrpap"),
    CreateData("어려운 콤보", "3rp - 236lp - 236lp - 236lp - 3lp4 - rk - 2rkrpap"),
]

const CreateExdata = (state, command) =>{
    return {state, command};
}

const Exdata = [
    CreateExdata("3ap", "3lprkrp"),
    CreateExdata("3ap", "3lprkrp"),
    CreateExdata("3ap", "3lprkrp"),
    CreateExdata("3ap", "3lprkrp"),
    CreateExdata("3ap", "3lprkrp"),

]

const Combo = ()=>{
    return(
        <Wrapper>
            <h2>콤보</h2>
            <table>
                
                {data.map((row)=>(
                    <tr>
                        <td>{row.state}</td>
                        <td>{row.command}</td>
                    </tr>
    ))}            </table>

                    <h2>추가타</h2>
                    <table>
                {Exdata.map((row)=>(
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