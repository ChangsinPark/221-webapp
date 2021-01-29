import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Title = ({className, title}) =>{
    return(
        <div className = {className}>
            <Jumbotron>
                <h1>{title}</h1>
            </Jumbotron>
        </div>
    );
}

export default Title;