import React from 'react'
import styled from 'styled-components'

const TableContent = styled.table`
    width: 90%;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 0 auto;
    margin-bottom: 50px;
`

const TableHead = styled.th`
    text-align: left;
    padding: 5px;
    border: 1px solid black;
    border-collapse: collapse;
`
const TableRow = styled.tr`
    padding: 5px;
`
const TableData = styled.td`
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
`

const Table = ({ header, columns, data }) => {
    return (
        <>
            <h2>{header}</h2>
            <TableContent>
                <thead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHead key={header + column}>
                                {column}
                            </TableHead>
                        ))}
                    </TableRow>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {Object.values(row).map((content, i) => (
                                <TableData key={i}>{content}</TableData>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </TableContent>
        </>
    )
}

export default Table
