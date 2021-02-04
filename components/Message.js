import React from 'react';

const Message = (props) => {
        const msg = props;
        const msgNum = props.msgNum;

        return (   
            <tr>
                <td>{msgNum}</td>
                <td>{msg.name}</td>
                <td>{msg.msgText}</td>
            </tr> 
        );
};

export default Message;