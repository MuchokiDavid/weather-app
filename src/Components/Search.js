import React from 'react'
import {
    Form,
    FormControl,
    InputGroup,
    Container,
    Button,
    Row,
    Col,
  } from "react-bootstrap";

function Search() {
  return (
    <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>
              Search
            </Button>
          </Form>
    </div>
  )
}

export default Search