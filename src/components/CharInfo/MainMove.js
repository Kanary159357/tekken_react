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

const MainMove = ({ Data }) => {
    return (
        <Wrapper>
            <Table
                header="주력기"
                columns={[
                    '커맨드',
                    '프레임',
                    '판정',
                    '데미지',
                    '가드프레임',
                    '설명',
                ]}
                data={Data}
            />
        </Wrapper>
    )
}

export default MainMove
