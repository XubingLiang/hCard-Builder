import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import '../../static/css/App.scss'


const secondAddressLine = (details) => {
  return `${details.suburb}${details.suburb && details.state ? ", " : ''}${details.state}`;
}

const firstAddressLine = (details) => {
  return `${details.houseName} ${details.street}`
}

const hCardPreview = ({details}) => {
  return(
    <div className='content'>
      <h5 className='title'>HCARD PREVIEW </h5>
      <div className='profile'>
        <Jumbotron fluid className='text-light details'>
          <h1 style={{ flex: 3}}>{details.givenName} {details.surname}</h1>
          <div className="avatar">
            <img alt={`not found`} src={details.avatar} style={{width: '100%'}} />
          </div>
        </Jumbotron>
        <div className='address-detail'>
          <div className='detail-item'>
            <div className="label">Email</div> <div className="value">{details.email}</div>
          </div>
          <div className='detail-item'>
            <div className="label">Phone</div> <div className="value">{details.phone}</div>
          </div>
          <div className='detail-item'>
            <div className="label">Adress</div> <div className="value">{firstAddressLine(details)}</div>
          </div>
          <div className='detail-item'>
            <div className="label"></div> <div className="value">{secondAddressLine(details)}</div>
          </div>
          <div className='detail-item'>
            <div className="label">PostCode</div> <div className="value" style={{width: '25%'}}>{details.postCode}</div> 
            <div className="label">Country</div> <div className="value">{details.country}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hCardPreview