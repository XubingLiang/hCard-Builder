import React from 'react';
import {Form, Col} from 'react-bootstrap'



const formField = props => {
  const {
    label1,
    label2,
    type1='text',
    type2='text',
    name1,
    name2,
    value1,
    value2,
    handleOnChange
  } = props;

  return (
      <Form.Row>
        <Form.Group as={Col} md="6" controlId={`formGrid${name1}`} >
          <Form.Label>{label1}</Form.Label>
          <Form.Control type={type1} name={name1} value={value1} onChange={handleOnChange} />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId={`formGrid${name2}`} >
          <Form.Label>{label2}</Form.Label>
          <Form.Control type={type2} name={name2} value={value2} onChange={handleOnChange} />
        </Form.Group>
      </Form.Row>
  )
}

export default formField