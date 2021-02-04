import React from 'react';

export default function Message(props) {
        const msg = props;
        const msgNum = props.msgNum;

        return (   
            <tr>
                <td>{msgNum}</td>
                <td>{msg.Name}</td>
                <td>{msg.Message}</td>
            </tr> 
        );
};

