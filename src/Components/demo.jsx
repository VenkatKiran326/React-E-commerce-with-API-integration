import React, { useEffect, useState } from 'react'

const Demo = () => {

    const[a,setA]=useState();
    useEffect(()=>{
        fetch("http://localhost:3002/productsDetails")
        .then((res)=>res.json())
        .then((data)=>setA(data))
    })
  return (
<>
<h1>hello</h1>
<div >
    {a.map((item)=>{
        <div className='bg-dark' key={item.key}>

            <Link to={`/feature/${item.id}`}>
            <h3>{item.title}</h3>
            <h3>{item.name}</h3>
            </Link>
        </div>
    })}
</div>
</>
)
}

export default Demo