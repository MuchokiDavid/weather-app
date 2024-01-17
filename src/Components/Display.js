import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { apiKey } from './Api'
import { apiUrl } from './Api'
import SearchPage from './Search';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from 'react-bootstrap';

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
          const response= await fetch(`${url}${city}&appid=${api}`)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // .then((response)=> response.json())
          const data = await response.json();
            // console.log(data)
            setData(data)
        }
        catch(err){
          setError('Error! City not found!!!!!')
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
    
  const kelvinToDegrees= (data.main.temp-273)
  // const feels_likeTemp= 5/9*(data.main.feels_like-32)
  return (
    <div>
      <div>
        <SearchPage callback={searchTerm}/>
      </div>
      <div className='mt-12'>
      <Container>
      <Row>
          <Col>
            <h1 className='text-white'>{data.name}, {data.sys.country}</h1>
          </Col>
        </Row>
        <Row>
        {/* <img src='/assets/clouds.png' alt='cloudy'width="100" height="100"/> */}
          <h2 className='text-white'>{data.weather[0].main}</h2>
        </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Condition</th>
            <th>Measurement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Weather</td>
            <td>{data.weather[0].description}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Temperature</td>
            <td>{kelvinToDegrees.toFixed(1)}°C</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Humidity</td>
            <td>{data.main.humidity}%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Wind Speed</td>
            <td>{data.wind.speed}m/s</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Coordinates</td>
            <td>Long: {data.coord.lon} Lat: {data.coord.lat}</td>
          </tr>
        </tbody>
      </Table>
{/*         
        
        <Row>
          <Col>
          
            <h3 className='text-white'>Temperature</h3>
            <p className='text-white'>{kelvinToDegrees.toFixed(1)}°C</p>
          </Col>
          <Col>
              <h3 className='text-white'>Humidity</h3>
              <p className='text-white'>{data.main.humidity}%</p>
          </Col>
          <Col>
            <h3 className='text-white'>Wind speed</h3>
            <p className='text-white'>{data.wind.speed} m/s</p>
          </Col>
        </Row> */}
      </Container>
          
          
      </div>
    </div>
  )
}

export default Display