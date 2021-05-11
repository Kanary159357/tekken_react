import Table from './Table'
import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        margin-left: 100px;
    }
`
const TabInfo = ({ data }) => {
    return (
        <Wrapper>
            {data.map((item) => {
                console.log(item)
                return (
                    <Table
                        header={item.header}
                        columns={item.columns}
                        data={item.data}
                    />
                )
            })}
        </Wrapper>
    )
}

export default TabInfo
