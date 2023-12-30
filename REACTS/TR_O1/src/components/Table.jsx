//import React from 'react'

// eslint-disable-next-line react/prop-types
export const MyTable = ({data}) => {
console.log('data',data)
  // eslint-disable-next-line react/prop-types
  const rows = data.map(ele=>(
    <tr key = {ele.id}>
      <td>
        {ele.name}
      </td>
      <td>
        {ele.age}
      </td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
          <th>COL 1</th>
          <th>COL 2</th>
          <th>COL 3</th>
          <th>COL 4</th>

          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  )
}
