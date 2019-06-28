import React from 'react';
import FormField from './FormField'
import ButtonGroup from './ButtonGroup'
import {Form} from 'react-bootstrap'
import '../../static/css/App.scss'



const hCardForm = (props) => {
  const {details, handleOnChange, handleAvatarUpload} = props
  return (
    <div>
      <Form onSubmit={e => {e.preventDefault()}}>
        <h1 className='hcard-builder-header' >hCard Builder</h1>
        <h6 className='hcard-builder-subheader'>Personal Details</h6>
        <FormField 
          label1={'given name'}
          label2={'surname'}
          name1={'givenName'}
          name2={'surname'}
          value1={details.givenName}
          value2={details.surname}
          handleOnChange={handleOnChange}
        />
        <FormField 
          label1={'email'}
          type1={'email'}
          label2={'phone'}
          name1={'email'}
          name2={'phone'}
          value1={details.email}
          value2={details.phone}
          handleOnChange={handleOnChange}
        />
        <h6 className='hcard-builder-subheader'>Address</h6>
        <FormField 
          label1={'House name or #'}
          label2={'street'}
          name1={'houseName'}
          name2={'street'}
          value1={details.houseName}
          value2={details.street}
          handleOnChange={handleOnChange}
        />
        <FormField 
          label1={'suburb'}
          label2={'state'}
          name1={'suburb'}
          name2={'state'}
          value1={details.suburb}
          value2={details.state}
          handleOnChange={handleOnChange}
        />
        <FormField 
          label1={'postcode'}
          label2={'country'}
          name1={'postCode'}
          name2={'country'}
          value1={details.postCode}
          value2={details.country}
          handleOnChange={handleOnChange}
        />
        <ButtonGroup handleAvatarUpload={handleAvatarUpload} />
        </Form>
    </div>
  )
}

export default hCardForm