import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SampleCard(props) {
    const [fullName, setFullName] = useState(props.fullName);
    function handleClick()
    {
        alert('clicked')
    }
    return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.fullName}</Card.Title>
        <Card.Text>
          {props.lastName}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     );
}

export default SampleCard;