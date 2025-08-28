
import { useState } from 'react'
import './App.css'
import maninfo from './components/Prectice/Jprectice'
import Prectice from './components/Prectice/Prectice'
import Demo from './components/prectice-2/Demo'

function App() {


  const [jisauns,setjisaun] = useState(10)
  console.log(jisauns);
  console.log(setjisaun);
  const clickprectice = ()=>{
    console.log(jisauns);
    setjisaun(jisauns - 1)
  }

if (jisauns == 0) {
    return <div className='jisaundfd'>
      <h1>please go back your code!</h1>
    </div>;
  }




const res =maninfo
  return (
    <>
     {
    res.map((item)=>(

    <Prectice items={item}></Prectice>


  ))
}
<Demo></Demo>
<div className='counting'>
{jisauns}

</div>

<div className='button-h'>

  <button className='rbtn' onClick={clickprectice}>click me</button>
</div>



    </>
  )

}

export default App
