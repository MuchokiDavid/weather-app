import React, { useState } from 'react'
import {
    Form,
    FormControl,
    InputGroup,
    Container,
    Button,
    Row,
    Col,
  } from "react-bootstrap";
function Search({callback}) {
  const[search, setSearch]= useState("")

  function handleSubmit(e) {
    e.preventDefault()
    callback(search)
  }
  function handleKey(event){
    if (event.key === 'Enter'){
      handleSubmit(event);
    }
  }
  // console.log(search)
  return (
    <div>
        <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search City..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKey}
            />
            <Button onClick={handleSubmit}>
              Search 
            </Button>
          </Form>
    </div>
  )
}

export default Search