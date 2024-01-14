import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { apiKey } from './Api'
import { apiUrl } from './Api'

function Display() {
    const [displayValue, setDisplayValue] = useState('0')
    const inputRef = useRef(null)
    const api= apiKey
    const url= apiUrl
    // console.log(url)



  return (
    <div>Display</div>
  )
}

export default Display