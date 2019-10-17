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

    let functionTest = () => {
        console.log(Math.floor(Math.random() * panelsObject.panelsArray.length) + 1)
        const updateSelection = Math.floor(Math.random() * panelsObject.panelsArray.length) + 1
        SimonSelection.push(updateSelection)
        console.log(SimonSelection)
    }

    functionTest();
    return (
        <div>
            <PanelWrapper>
                {panelsObject.panelsArray.map(properties => (
                    <Panel key={properties.id} inputColor={properties.color} id={properties.id}></Panel>
                ))}
            </PanelWrapper>
            <button onClick={functionTest}>Start Button </button>
        </div>
    )
}