import React from 'react'

const ResultTable = () => {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earned Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Daiy Tution</td>
                    <td>04</td>
                    <td>20</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable