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

const Combo = ({ Data }) => {
    return (
        <Wrapper>
            <Table
                header="콤보"
                columns={['커맨드', '상황']}
                data={Data.combo}
            />
            <Table
                header="추가타"
                columns={['상황', '커맨드']}
                data={Data.extrahit}
            />
        </Wrapper>
    )
}

export default Combo
