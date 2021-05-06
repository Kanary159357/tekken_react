import styled from 'styled-components'
import Table from '../Table'
import React from 'react'
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 100px;
    }
`

const Punish = ({ Data }) => {
    return (
        <Wrapper>
            <Table
                header="선자세 딜캐"
                columns={['프레임', '커맨드', '데미지', '판정', '히트이득']}
                data={Data[0]}
            />
            <Table
                header="앉은자세 딜캐"
                columns={['프레임', '커맨드', '데미지', '판정', '히트이득']}
                data={Data[1]}
            />
        </Wrapper>
    )
}

export default Punish
