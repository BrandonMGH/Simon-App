import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// ** STYLED COMPONENTS ** // 

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
opacity: ${props => props.opacity}
`

export default function Panels() {

// ** REACT HOOKS ** // 
    const [simonSelection, updateSimonSelection] = useState([])
    const [userSelection, updateSelection] = useState([])
    const [panelOpacity, updateOpacity] = useState([".25",".50", ".75", "1"])
    const [panelValue, updatePanelValue] = useState([1,2,3,4])
    
 

    let simonStart = () => {
        console.log()
        const updateSelection = Math.floor(Math.random() * panelsObject.panelsArray.length) + 1
        simonSelection.push(updateSelection)
        console.log(simonSelection)
        highlightedPanel()
    }

    let highlightedPanel = (updateSelection) => {
        
    }

    let userChoice = (event) => {
        let id = event.target.id
        let parsedID = parseInt(id)
        userSelection.push(parsedID)
        console.log(userSelection)
    }

    let scoreCompare = () => {
        let trueTotal = 0;
        let simArrLength = simonSelection.length
        if (simonSelection.length !== userSelection.length) {
            return finalCompare(trueTotal, simArrLength)
        }

        for (let i = 0; i < simArrLength; i++) {
            if (simonSelection[i] === userSelection[i]) {
                trueTotal++;
            }
        }
        console.log(trueTotal)
        return finalCompare(trueTotal, simArrLength)

    }

    let finalCompare = (trueTotal, arrLength) => {
        console.log(trueTotal, arrLength)
        if (trueTotal === arrLength) {
            console.log("Congrats, you won!")
            updateSelection([]);
        } else {
            console.log("You lose")
            updateSimonSelection([]);
            updateSelection([]);
        }
    }

    return (
        <div>
            <PanelWrapper>
            <Panel  opacity={panelOpacity[0]} inputColor="red"  onClick={userChoice}></Panel>
            <Panel  opacity={panelOpacity[1]} inputColor="blue"  onClick={userChoice}></Panel>
            <Panel  opacity={panelOpacity[2]} inputColor="green"  onClick={userChoice}></Panel>
            <Panel  opacity={panelOpacity[3]} inputColor="yellow"  onClick={userChoice}></Panel>
            </PanelWrapper>
            <button onClick={simonStart}>Start Button </button>
            <button onClick={scoreCompare}>Confirm Button  </button>


        </div>
    )
}