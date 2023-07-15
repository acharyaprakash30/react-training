import React,{useState} from 'react'
import './Pages.css'

const Counter = () => {

    const [data,setData] = useState(0);

    function addCounter(){
        setData(data+1)
    }
    function subractCounter(){
        if(data<1){
            setData(0)
        }
        else{
            setData(data -1)
        }
    }
    
  return (
    <div className='counter'>
    <button className='plus' onClick={()=>{addCounter()}}>+</button>
    <p className='counterText'>{data}</p>
    <button className='minus'onClick={()=>{subractCounter()}}>-</button>
    </div>
  )
}

export default Counter