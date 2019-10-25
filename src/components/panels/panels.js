import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// ** STYLED COMPONENTS ** // 

const PanelWrapper = styled.section`
display: grid; 
grid-template-columns: 1fr 1fr;
justify-items: center;
border-radius: 50%;
background: black; 
height: 750px;
width: 750px;
`

const Panel = styled.section`
border-radius: 50%;
height: 50%; 
width: 50%
padding: 2.5%
margin: 2.5%
text-align: center; 
border: solid 5px black; 
background-color: ${props => props.inputColor}
`

export default function Panels() {

    // ** REACT HOOKS ** // 
    const [simonSelection, updateSimonSelection] = useState([])
    const [userSelection, updateSelection] = useState([])
    const [panelColor, updateColor] = useState(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"])




    let simonStart = () => {
        const updateSelection = Math.floor(Math.random() * 4) + 1
        simonSelection.push(updateSelection)
        console.log(simonSelection)
        let simonSelectionLength = simonSelection.length
       panelSelection(0, simonSelectionLength, simonSelection); 
    }


    let panelSelection = (n, arrLength, arr) => {
       console.log(n, arrLength, arr)
        if(n < arrLength){
            if(arr[n] === 1){
                setTimeout(function () {
                    updateColor(["#9cd6a1", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                },  1000)
            }else if ( arr[n]  === 2){
                setTimeout(function () {
                    updateColor(["#3edd4b", "#e0948d", "#ffea37", "#4b3edd"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                },  1000)
            } else if( arr[n]  === 3){
                setTimeout(function () {
                    updateColor(["#3edd4b", "#dd4b3e", "#fff6ab", "#4b3edd"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                },  1000)
            } else {
                setTimeout(function () {
                    updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#918bd6"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                },  1000)
            }
        } 
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
                <Panel  inputColor={panelColor[0]} onClick={userChoice} id={1}></Panel>
                <Panel  inputColor={panelColor[1]} onClick={userChoice} id={2}></Panel>
                <Panel  inputColor={panelColor[2]} onClick={userChoice} id={3}></Panel>
                <Panel  inputColor={panelColor[3]} onClick={userChoice} id={4}></Panel>
            </PanelWrapper>
            <button onClick={simonStart}>Start Button </button>
            <button onClick={scoreCompare}>Confirm Button  </button>


        </div>
    )
}