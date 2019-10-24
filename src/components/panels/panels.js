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
       panelSelection(); 
    }

   

    let panelSelection = () => {
       
        simonSelection.forEach((num) => {
            if(num === 1){
                setTimeout(function () {
                    updateOpacity(["1", ".25", ".25", ".25"]);
                }, num * 1000)
            }else if ( num === 2){
                setTimeout(function () {
                    updateOpacity([".25", "1", ".25", ".25"]);
                },  num * 1000)
            } else if( num === 3){
                setTimeout(function () {
                    updateOpacity([".25", ".25", "1", ".25"]);
                },  num * 1000)
            } else {
                setTimeout(function () {
                    updateOpacity([".25", ".25", ".25", "1"]);
                }, num * 1000)
            }
        })
        // callback()
    }

    let panelReset = () => {
        console.log("yay")
        // let num = 2 
        // setTimeout(function () {
        //     updateOpacity([".25", ".25", ".25", ".25"]);
           
        // }, num * 1000)
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
            simonStart(); 
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