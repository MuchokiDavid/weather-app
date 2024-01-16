import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { apiKey } from './Api'
import { apiUrl } from './Api'
import SearchPage from './Search';

function Display() {
    const[data, setData]= useState(null)
    const[city, setCity]= useState("Nairobi")
    const[loading, setLoading]= useState(true)
    const[error, setError]= useState(null)
    const api= apiKey
    const url= apiUrl
    // console.log(url)

    function searchTerm(searchTrm){
        setCity(searchTrm)
    }
  // console.log(city)

    useEffect(()=>{
      const fetchData= async ()=>{
        try{
          await fetch(`${url}${city}&appid=${api}`)
          .then((response)=> response.json())
          .then((data)=>{
            // console.log(data)
            setData(data)
          })
        }
        catch(err){
          setError('Error! City not found')
        }
        finally{
          setLoading(false)
        }
        
      }
      fetchData()
    },[city, apiKey])
    console.log(data)
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
    
  const kelvinToDegrees= 5/9*(data.main.temp-32)
  const feels_likeTemp= 5/9*(data.main.feels_like-32)
  return (
    <div>
      <div>
        <SearchPage callback={searchTerm}/>
      </div>
      <div className='mt-12'>
        <h1>{data.name}, {data.sys.country}</h1>
        <p>Weather: {data.weather[0].main}</p>
          <p>Temperature: {kelvinToDegrees.toFixed(1)}°C</p>
          {/* <p>Temp: {data.main.temp}</p> */}
          <p>Feels like: {feels_likeTemp.toFixed(1)} °C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
      </div>
    </div>
  )
}

export default Display