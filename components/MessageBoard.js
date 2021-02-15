import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import Tabled from './Tabled';
import NewMessageForm from './NewMessageForm';
import { useState } from 'react';
import ky from 'ky-universal';

const MessageBoard = ({jsonData}) => {
  const [data, setData] = useState([...jsonData]);

// handler for submission of Form in
// NewMessageForm Component
const addNewMessage = async (values) => {
    try{
      const message = await ky.post('http://localhost:3004/api/messages', {
        json: values
      }).json();
      // values.id = jsonData.length;
      // values = {'id': values.id, 'name': values.name, 'msgText': values.msgText }
      setData([message, ...data]);
    } catch (err) {
      console.log('API error: ' + err);
    }
    
  }

  return (
    <Container> 
        <Row>
            <Col><Title title="ICS 221 Message Board App" /></Col> 
        </Row >
        <Row>
          <Col><NewMessageForm addNewMessage={addNewMessage} /></Col>
          {console.log(data)}
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

export default MessageBoard;