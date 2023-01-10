import React from 'react'
import { useParams } from 'react-router-dom'

const Choice = () => {
    const { choice } = useParams();

  return (
    <div>
      <h1> Choice: { choice }</h1>
      <p> you are on page { choice }</p>
    </div>
  )
}

export default Choice
