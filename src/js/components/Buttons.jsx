import React from 'react'
import { useState } from "react";
import styled from 'styled-components'

export default function Buttons() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <Button onClick={() => setCount(count + 1)} >I am a button</Button>
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