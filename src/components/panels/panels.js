import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import panelsObject from './panelsObject.js'

const PanelWrapper = styled.section`
display: grid; 
grid-template-columns: 1fr 1fr;
justify-items: center;
`

const Panel = styled.section`
width: 50%
padding: 2.5%
margin: 2.5%
text-align: center; 
border: solid 5px black; 
background-color: ${props => props.inputColor}
`

export default function Panels() {


    const [SimonSelection, updateSimonSelection] = useState([])
    const [userSelection, updateSelection] = useState([])

    let SimonStart = () => {
        console.log(Math.floor(Math.random() * panelsObject.panelsArray.length) + 1)
        const updateSelection = Math.floor(Math.random() * panelsObject.panelsArray.length) + 1
        SimonSelection.push(updateSelection)
        console.log(SimonSelection)
    }

    let userChoice = (event) =>{
        const id = event.target.id
        console.log(id)
    }

    
    return (
        <div>
            <PanelWrapper>
                {panelsObject.panelsArray.map(properties => (
                    <Panel key={properties.id} inputColor={properties.color} id={properties.id} onClick={userChoice}></Panel>
                ))}
            </PanelWrapper>
            <button onClick={SimonStart}>Start Button </button>
            <button onClick={userChoice}>Confirm Button  </button>
          
        </div>
    )
}