import React from 'react'
import { useState, useEffect  } from "react";
import styled from 'styled-components'

export default function Buttons() {

    const [count, setCount] = useState(0);
    const [name, setName ] = useState("");
    const [list, setList ] = useState([])



   
    useEffect(() => {
       console.log(`You clicked ${count} times`);
      });

   
    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>{name}</h2>
            <form>
                <input 
                 value={name}
                 place="Full Name"
                 onChange={event => setName(event.target.value)}
                />
            </form>
            <Button onClick={() => setCount(count + 1)} >I am a button</Button>
            <Button type="submit" onClick={()=> setList(name)}>Post Name</Button>
            <ul>
               <li>{list}</li>
            </ul>
        </div>
    )
}

const Button = styled.button`
    background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
`