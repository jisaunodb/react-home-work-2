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
        jisaund.slice(1,10).map((itemss)=>(
            <Propss item = {itemss}/>
        ))
    }
    </div>
  )
}

function Propss (jisaunprops){
const {userId,id,title,completed}= jisaunprops.item


return(
  <div className='demos'>
              <div className='demo-details'>

                <h1>{userId}</h1>
                <h1>{id}</h1>
                <h1>{title}</h1>
                <h1>{completed == true ? "true" : "false"}</h1>
              </div>
            </div>
)
}

export default Demo