import React from 'react'

function Rating({data}) {
  return (
    <div>
        {data.map(item => (
            <>
            <h4>{item.name}</h4>
            <div>
                <h6>{item.date}</h6>
                <p>{item.comments}</p>
            </div>
            </>
        ))}
    </div>
  )
}

export default Rating