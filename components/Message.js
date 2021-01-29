import React from 'react';

class Message extends React.Component{
    render(){
        const msg = this.props.what;

        return (   
            <tr >
                <td>{msg.id}</td>
                <td>{msg.Name}</td>
                <td>{msg.Message}</td>
            </tr> 
        );
    }   
}
export default Message;

