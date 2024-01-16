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
  // console.log(search)
  return (
    <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={handleSubmit}>
              Search
            </Button>
          </Form>
    </div>
  )
}

export default Search