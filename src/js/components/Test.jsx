import React from 'react'
import Buttons from './Buttons.jsx'


export default function Test(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.title}</p>
                <Buttons />  
        </div>
    )
}

