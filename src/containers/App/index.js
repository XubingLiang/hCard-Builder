import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HCardForm from '../../components/HCardForm'
import HCardPreview from '../../components/HCardPreview'
import '../../static/css/App.scss'


function App() {
  const [details, setDetails] = useState({
    givenName: '',
    surname: '',
    phone: '',
    email: '',
    houseName: '',
    street: '',
    suburb: '',
    state: '',
    postCode: '',
    country: '',
    avatar: '',
  });

  const handleOnChange = e => {
    const change = {...details, [e.target.name]: e.target.value};
    setDetails(change)
  }

  const handleAvatarUpload= e => {
    const selectedFile =  URL.createObjectURL(e.target.files[0])
    const change = {...details, avatar: selectedFile};
    setDetails(change)
  }

  return (
    <Container>
      <Row>
        <Col xs={6} md="6" className='hcard-builder-form'>
          <HCardForm 
            details={details} 
            handleOnChange={handleOnChange}
            handleAvatarUpload={handleAvatarUpload}
           />
         </Col>
        <Col xs={6} md="6" className='hcard-builder-preview'>
          <HCardPreview 
            details={details}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
