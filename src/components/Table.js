import React from 'react'
const Table = ({header,columns, data})=>{
    return(
        <>
        <h2>{header}</h2>
        <table>
            <thead>
                <tr>{columns.map(column=><th key={header+column}>{column}</th>)}</tr>
            </thead>
            <tbody>
                {data.map((row,index)=>(
                        <tr key={index}>
                        {Object.values(row).map((content,i)=>
                            <td key={i}>{content}</td>)}
                        </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Table;