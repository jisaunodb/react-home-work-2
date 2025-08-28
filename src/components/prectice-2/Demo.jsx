import React, { useEffect, useState } from 'react'
import "./Demo.css"
const Demo = () => {

const [jisaund,setjisaun] =useState([])
useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => setjisaun(data))
},[])
console.log(jisaund);


  return (
    <div className='demo-prectice'>
        {
        jisaund.map((itemss)=>(
            <>
            <div className='demo-details'>

            <h1>{itemss.userId}</h1>
            <h1>{itemss.id}</h1>
            <h1>{itemss.title}</h1>
            <h1>{itemss.completed}</h1>
            </div>
            </>
        ))
    }
    </div>
  )
}

export default Demo