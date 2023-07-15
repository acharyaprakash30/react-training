import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Product = () => {

  const [dataItem,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((data)=>{
      console.log(data.data);
      setData(data.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div >
  {
    dataItem && dataItem.map((item,i)=>{
      return(
        <div>
        <p>Title:{item.title}</p>
        <p>Description:{item.description}</p>
        <img src={item.image} alt='this is title' />
        </div>
      )
    })
  }
    </div>
  )
}

export default Product