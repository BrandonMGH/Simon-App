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


    const [simonSelection, updateSimonSelection] = useState([])
    const [userSelection, updateSelection] = useState([])

    let simonStart = () => {
        const updateSelection = Math.floor(Math.random() * panelsObject.panelsArray.length) + 1
        simonSelection.push(updateSelection)
        console.log(simonSelection)
    }

    let userChoice = (event) =>{
        let id = event.target.id
        let parsedID = parseInt(id)
        userSelection.push(parsedID)
        console.log(userSelection)
    }

    let scoreCompare = () => {
        let trueTotal = 0; 
        for(let i = 0; i < userSelection.length; i ++){
            for(let j = 0; j < simonSelection.length; j ++){
             console.log(userSelection[i],simonSelection[j])
             if(userSelection[i]===simonSelection[j]){
                 trueTotal ++; 
             }
            }
        }

        if(trueTotal === userSelection.length){
            console.log("yay")
        } else{
            console.log("nay")
        }
    }

    
    return (
        <div>
            <PanelWrapper>
                {panelsObject.panelsArray.map(properties => (
                    <Panel key={properties.id} inputColor={properties.color} id={properties.id} onClick={userChoice}></Panel>
                ))}
            </PanelWrapper>
            <button onClick={simonStart}>Start Button </button>
            <button onClick={scoreCompare}>Confirm Button  </button>
           
          
        </div>
    )
}