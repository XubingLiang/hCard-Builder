import React from 'react';
import {Form, Col, Button} from 'react-bootstrap'


const buttonGroup = props => {
  const {handleAvatarUpload } = props;

  return (
    <Form.Row>
      <Form.Group as={Col} md="6" controlId={`formGridAvatar`} >
        <label className="custom-file-upload">
            Upload Avatar
            <input
                type="file"
                accept="image/x-png,image/jpeg"
                onChange={handleAvatarUpload}
            />
        </label>
      </Form.Group>
      <Form.Group as={Col} md="6" controlId={`formGridSubmit`} >
        <Button variant="primary" type="submit" className='buttons'>
          Create hCard
        </Button>
      </Form.Group>
    </Form.Row>
   )
}

export default buttonGroup