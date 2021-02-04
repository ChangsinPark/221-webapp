import React from 'react';

export default function Message(props) {
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

