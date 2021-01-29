import React from 'react';
import Table from 'react-bootstrap/Table'; 
import Message from './Message';

class Tabled extends React.Component{
    render() {
    const rows = [];
    this.props.data.forEach((msg) => {
        rows.push(
            <Message what = {msg} key={msg.id} />
        );
    });


        return ( 
            <Table striped bordered hover>
                <thead id="chart">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Message</th>
                        </tr>
                </thead>
                <tbody id="chart">{rows}</tbody>
            </Table>
        );
    }
}
export default Tabled;