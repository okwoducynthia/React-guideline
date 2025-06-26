import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import DeleteModal from '../DeleteModal/DeleteModal'

const Eventlisteners = () => {

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(true)
  }
  console.log(open);
  

  const [info, setInfo] = useState<any>("Welcome")

    const handleClick = () => {
      setInfo("Nigeria is a Country")
    }

  const [dataInfo, setDataInfo] = useState<any>([])
  console.log(dataInfo)

    const fetchData = () => {
      setDataInfo([
  {
    id: 1,
    image: "./images/leaf.jpg",
    title: "Web Design",
    desc: "My name is Okwodu Cynthia and i'm learning full stack software development"
  },

  {
    id: 2,
    image: "/images/service-2.jpg",
    title: "Graphic Design",
    desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people."
  },

  {
    id: 3,
    image: "/images/service-3.jpg",
    title: "Content Creation",
    desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people."
  }
])
    }

  return (
    <div>
      <div onClick={toggle}>
        <FaTrash style={{color: "red", fontSize: "100px", cursor: "pointer"}}/>
      </div>
      {open && (<DeleteModal/>)}
      <button onClick={handleClick}>Click: <span style={{color: "red", fontSize: "40px"}}>{info}</span> </button>  <br />
      <button onClick={fetchData}>Display Data</button>


      {/* ===A SAMPLE OF HOW TO DISPLAY DATA THAT IS RETURNING AS AN ARRAY===
      {dataInfo.map((items:any) => (
        <>

        </>
      ))} */}

      {dataInfo.map((items:any) => (
        <div>
          <h1>{items.id}</h1>
          <img src={items.image} style={{width: "200px"}} />
          <h2>{items.title}</h2>
          <p>{items.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Eventlisteners