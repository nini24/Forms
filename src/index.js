import React from 'react'
import ReactDOM from 'react-dom';
import Forms from './App.js'


function Form()   {
    return (
        <div> 
            <Forms/>
        </div>
    )
    
}


ReactDOM.render( <Form/>,
    document.getElementById('root')
);