import React from 'react';
import Table from 'react-bootstrap/Table'; 
import Message from './Message';


const Tabled = (props) => {
    const rows = [];
        {props.data.map((msg, index) =>{
            rows.push(
                <Message key={msg.id} {...msg} msgNum={index + 1} />
            )}
        )};

    // const rows = [];
    // this.props.data.forEach((msg) => {
    //     rows.push(
    //         <Message what = {msg} key={msg.id} />
    //     );
    // });
    

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

export default Tabled; 