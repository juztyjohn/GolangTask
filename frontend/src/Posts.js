import React from 'react'

export const Posts = ({viewData, loading}) => {
    if(loading){
        return <h2>loading...</h2>;
    }
  return (
    <div>
        {viewData && (
        <table id='tablecss'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {viewData.map((data, i) => (
              <tr key={i}>
                <td>{data.date}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
  )
}
