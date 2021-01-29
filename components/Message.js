import React from 'react';

class Message extends React.Component{
    render(){
        const msg = this.props.what;
        const msgNum = this.props.msgNum;

        return (   
            <tr>
                <td>{msgNum}</td>
                <td>{msg.Name}</td>
                <td>{msg.Message}</td>
            </tr> 
        );
    }   
}
export default Message;

