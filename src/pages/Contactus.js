import React from 'react';
import Card from 'react-bootstrap/Card';
import './contactus.css';

const Contactus = () => {
  return (
    <>
      <div className='title_div'>
        <h3 className='title'>
          <span>Ways to win my heart:</span> a) Buy me coffee  b) Make me coffee  c) Be coffee</h3>
      </div>

      <div className='cont_us'>
        <Card className='card_div'>
          <Card.Body>
            <p><span>Name: &nbsp;</span>Asmita Ajitkumar Bhinge</p>
            <p><span>Mobile: &nbsp;</span>+91-8669729033</p>
            <p><span>Email: &nbsp;</span> aasmitabhinge@gmail.com</p>
          </Card.Body>
        </Card>
      </div>

      <div className='thanks_div'>
        <p>Thank You...</p>
      </div>

    </>
  )
}

export default Contactus
