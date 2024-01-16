import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { apiKey } from './Api'
import { apiUrl } from './Api'
import SearchPage from './Search';

function Display() {
    const [displayValue, setDisplayValue] = useState('0')
    const[data, setData]= useState(null)
    const[city, setCity]= useState("")
    const inputRef = useRef(null)
    const api= apiKey
    const url= apiUrl
    // console.log(url)

    function searchTerm(searchTrm){
        setCity(searchTrm)
    }
  // console.log(city)

    useEffect(()=>{
      const fetchData= async ()=>{
        fetch(`${url}${city}&appid=${api}`)
        .then((response)=> response.json())
        .then((data)=>{
          // console.log(data)
          setData(data)
        })
      }
      fetchData()
    },[])
    console.log(data)

    
  return (
    <div>
      <SearchPage callback={searchTerm}/>
    </div>
  )
}

export default Display