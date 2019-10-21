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
    const [panelOpacity, updateOpacity] = useState([".25", ".25", ".25", ".25"])




    let simonStart = () => {
        const updateSelection = Math.floor(Math.random() * panelOpacity.length) + 1
        simonSelection.push(updateSelection)
        console.log(simonSelection)
        panelSelection(simonSelection)
    }

    let panelSelection = (n) => {
        console.log(n)

        let myVar; 
        
        for (let i = 0; i < n.length; i++) {
            setTimeout(function () { 
                if (simonSelection[i] === 1) {
                    // updateOpacity(["1", ".25", ".25", ".25"])
                    console.log(n[i])
                } else if (simonSelection[i] === 2) {
                    // updateOpacity([".25", "1", ".25", ".25"])
                    console.log(n[i])
                   
                } else if (simonSelection[i] === 3) {
                    // updateOpacity([".25", ".25", "1", ".25"])
                    console.log(n[i])
                   
                } else if (simonSelection[i] === 4) {
                    // updateOpacity([".25", ".25", ".25", "1"])
                    console.log(n[i])
             
                }

            }, 2000)
            // setInterval(function () { panelReset() }, 5000); 
        }

    }

    let panelReset = (PanelReset) => {
        updateOpacity([".25", ".25", ".25", ".25"])
        clearInterval(PanelReset)
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
                <Panel opacity={panelOpacity[0]} inputColor="red" onClick={userChoice} id={1}></Panel>
                <Panel opacity={panelOpacity[1]} inputColor="blue" onClick={userChoice} id={2}></Panel>
                <Panel opacity={panelOpacity[2]} inputColor="green" onClick={userChoice} id={3}></Panel>
                <Panel opacity={panelOpacity[3]} inputColor="yellow" onClick={userChoice} id={4}></Panel>
            </PanelWrapper>
            <button onClick={simonStart}>Start Button </button>
            <button onClick={scoreCompare}>Confirm Button  </button>


        </div>
    )
}