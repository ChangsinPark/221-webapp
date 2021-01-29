import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';
import Tabled from '../components/Tabled';

export default function Home() {
  const data = [  
    { "id": 1, "Name": "Willium", "Message": "I graduated the university." },    
    { "id": 2, "Name": "Green", "Message": "I like to challenge my surviving skills in the wild."  },
    { "id": 3, "Name": "Van", "Message": "I was yoging." },
    { "id": 4, "Name": "Tom", "Message": "Hi"  },
    { "id": 5, "Name": "Julia", "Message": "I accuse you!" },
    { "id": 6, "Name": "Bob", "Message": "It is so easy!" },
    { "id": 7, "Name": "Mustard", "Message": "Who wants to play basket ball?" },
    { "id": 8, "Name": "Elan", "Message": "Bitcoin is all time high!" },
    { "id": 9, "Name": "Adam", "Message": "I wish." }
]
  return (
    <Container> 
                <Row>
                    <Col><Title title="ICS 221 Message Board App" /></Col> 
                </Row >

                <Row>
                    <Col>
                        <Tabled data={data} />
                    </Col>
                </Row>

                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}><p>&copy;2021 Changsin</p></Col> 
                </Row>
            </Container>
        
  )
}
