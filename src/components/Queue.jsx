import React from 'react'

const Queue = ({q}) => {
  return (
    <div>
        <h3 className='counter-name'>{q.name}</h3>
        <ul className='line'>
            {
                q.que.map((item, i) => <li key={i}>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default Queue