import { useState } from 'react'



const UseState = () => {

  const [count, setCount] = useState(0)
  const btnClick = () => {
    setCount (count + 1)
  }


  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{fontSize: "50px"}}>The number is {count}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default UseState