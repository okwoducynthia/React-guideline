import { useEffect, useState } from 'react'

const UseEffects = () => {

  const [count, setCount] = useState(0)
  
  const beginCount = () => {
    setInterval(() => {
      setCount(Count => Count + 1)
    }, 1000)
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{fontSize: "40px"}}>{count}</h1>
      <button onClick={beginCount}>Begin Count</button>
    </div>
  )
}

export default UseEffects