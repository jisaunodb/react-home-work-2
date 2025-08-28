// import React from 'react'

// const Prectice = (props) => {

//       return (
//         <>
//         <h1>student name: {props.items.name}</h1>
//         <h1>student age: {props.items.age}</h1>
//         </>
//       )
//     }
// )


// export default Prectice



import React from 'react'

import "./Prectice.css"

const Prectice = (jisaunprops) => {
  const {name,age,classe}= jisaunprops.items
  return (
    <>
    <div className='studentss'>
      <h1>Student name: {name}</h1>
      <h1>Student class: {classe}</h1>
      <h1>Student age: {age}</h1>
    </div>
    </>
  )
}

export default Prectice