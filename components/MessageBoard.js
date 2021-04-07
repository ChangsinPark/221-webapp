import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import Tabled from './Tabled';
import NewMessageForm from './NewMessageForm';
import LoginForm from './LoginForm';
import { useState } from 'react';
import ky from 'ky-universal';

const MessageBoard = ({jsonData}) => {
  const [data, setData] = useState([...jsonData]);
  const [user, setUser] = useState(false)
// handler for submission of Form in
// NewMessageForm Component
const addNewMessage = async (values) => {
    try{
      const message = await ky.post(`${process.env.NEXT_PUBLIC_HOST}/api/messages`, {
        json: values,
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        }).json();
      // values.id = jsonData.length;
      // values = {'id': values.id, 'name': values.name, 'msgText': values.msgText }
      setData([message, ...data]);
    } catch (err) {
      console.log('API error: ' + err);
    }
  }

const logInUser = async (values) => {
  try{
    const logIn = await ky.post(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      json: values
    }).json();
    sessionStorage.setItem('token', logIn.token);
    setUser(true)
    } catch(err) {
      console.log('API error: ' + err);
    }
  }


  return (
    <Container> 
        <Row>
            <Col><Title title="ICS 221 Message Board App" /></Col> 
        </Row >
        <Row>
          <Col>{ user == true ? (<NewMessageForm addNewMessage={addNewMessage}/>) : (<LoginForm logInUser={logInUser}/>)}</Col>
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