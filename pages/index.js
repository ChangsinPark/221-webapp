import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';
import Tabled from '../components/Tabled';
import NewMessageForm from '../components/NewMessageForm';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([  
    { "id": 0, "Name": "Willium", "Message": "I graduated the university." },    
    { "id": 1, "Name": "Green", "Message": "I like to challenge my surviving skills in the wild."  },
    { "id": 2, "Name": "Van", "Message": "I was yoging." },
    { "id": 3, "Name": "Tom", "Message": "Hi"  },
    { "id": 4, "Name": "Julia", "Message": "I accuse you!" },
    { "id": 5, "Name": "Bob", "Message": "It is so easy!" },
    { "id": 6, "Name": "Mustard", "Message": "Who wants to play basket ball?" },
    { "id": 7, "Name": "Elan", "Message": "Bitcoin is all time high!" },
    { "id": 8, "Name": "Adam", "Message": "I wish." }
]);

// handler for submission of Form in
// NewMessageForm Component
const addNewMessage = (values) => {
    values.id = data.length;
    // data.unshift(values);
    setData([values, ...data]);
    console.log(data);
  }

  return (
    <Container> 
        <Row>
            <Col><Title title="ICS 221 Message Board App" /></Col> 
        </Row >
        <Row>
          <Col><NewMessageForm addNewMessage={addNewMessage} /></Col>
        </Row>
        <Row>
            <Col>
                <Tabled data={data} />
            </Col>
        </Row>

        <Row>
          <Col className="text-right"><p>&copy;2021 Changsin</p></Col> 
        </Row>
    </Container>
  )
}
