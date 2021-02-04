import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';
import Tabled from '../components/Tabled';
import NewMessageForm from '../components/NewMessageForm';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([  
    { "id": 0, "name": "Willium", "msgText": "I graduated the university." },    
    { "id": 1, "name": "Green", "msgText": "I like to challenge my surviving skills in the wild."  },
    { "id": 2, "name": "Van", "msgText": "I was yoging." },
    { "id": 3, "name": "Tom", "msgText": "Hi"  },
    { "id": 4, "name": "Julia", "msgText": "I accuse you!" },
    { "id": 5, "name": "Bob", "msgText": "It is so easy!" },
    { "id": 6, "name": "Mustard", "msgText": "Who wants to play basket ball?" },
    { "id": 7, "name": "Elan", "msgText": "Bitcoin is all time high!" },
    { "id": 8, "name": "Adam", "msgText": "I wish." }
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
