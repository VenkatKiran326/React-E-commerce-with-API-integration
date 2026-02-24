import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DemoDetails = () => {
    const [a,setB] = useState({})
    const {id}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:3002/productsDetails/${id}`)
        .then((res)=>res.json())
        .then((data)=>setB(data))
    },[id])
  return (
    <>

    {a.name}
    </>
  )
}

export default DemoDetails