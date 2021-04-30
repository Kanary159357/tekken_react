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

const Throw = ({ Data }) => {
    return (
        <Wrapper>
            <Table
                header="잡기"
                columns={[
                    '커맨드',
                    '프레임',
                    '잡기풀기',
                    '데미지',
                    '가드프레임',
                    '설명',
                ]}
                data={Data}
            />
        </Wrapper>
    )
}

export default Throw
