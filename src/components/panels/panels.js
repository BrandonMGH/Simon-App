import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// ** STYLED COMPONENTS ** // 


const AppWrapper = styled.section`
display: grid; 
justify-items: center;
align-items: center;
font-family: 'Spicy Rice', cursive;
`

const PanelWrapper = styled.section`
display: grid; 
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr; 
justify-items: center;
align-items: center;
border-radius: 75%;
background: black; 
height: 500px
width: 500px
margin-top: 2%

`



const Panel = styled.section`
height: 60%; 
width: 60%
padding: 2.5%
margin: 2.5%
text-align: center; 
border: solid 5px black; 
background-color: ${props => props.inputColor}
border-radius: ${props => props.shape}
cursor: pointer;
:hover {
    background-color: ${props => props.hoverColor}
  }

`
const ButtonWrapper = styled.section`
display:flex;
margin-top: 5%; 
`
const  Button = styled.section`
background: color:
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;
cursor: pointer;
`


export default function Panels() {

    // ** REACT HOOKS ** // 
    const [simonSelection, updateSimonSelection] = useState([])
    const [userSelection, updateSelection] = useState([])
    const [panelColor, updateColor] = useState(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"])
    const [score, updateScore] = useState(0)




    let simonStart = () => {
        const updateSelection = Math.floor(Math.random() * 4) + 1
        simonSelection.push(updateSelection)
        console.log(simonSelection)
        let simonSelectionLength = simonSelection.length
        panelSelection(0, simonSelectionLength, simonSelection);
    }


    let panelSelection = (n, arrLength, arr) => {
        console.log(n, arrLength, arr)
        if (n < arrLength) {
            if (arr[n] === 1) {
                setTimeout(function () {
                    updateColor(["#9cd6a1", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                }, 1000)
            } else if (arr[n] === 2) {
                setTimeout(function () {
                    updateColor(["#3edd4b", "#e0948d", "#ffea37", "#4b3edd"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                }, 1000)
            } else if (arr[n] === 3) {
                setTimeout(function () {
                    updateColor(["#3edd4b", "#dd4b3e", "#fff6ab", "#4b3edd"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                }, 1000)
            } else {
                setTimeout(function () {
                    updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#918bd6"]);
                    setTimeout(function () {
                        updateColor(["#3edd4b", "#dd4b3e", "#ffea37", "#4b3edd"]);
                    }, 500)
                    panelSelection(n + 1, arrLength, arr)
                }, 1000)
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
            score++;
        } else {
            console.log("You lose")
            updateSimonSelection([]);
            updateSelection([]);
        }
    }

    return (
        <AppWrapper>
            <h1>SIMON</h1>
            <p> Start the game by clicking the start button.  Once started, try to keep up with Simon as he picks an ever growing selection of colors each round!</p>
            <PanelWrapper>
                <Panel inputColor={panelColor[0]} hoverColor="#9cd6a1" onClick={userChoice} shape="100% 0 0 0" id={1}></Panel>
                <Panel inputColor={panelColor[1]} hoverColor="#e0948d" onClick={userChoice} shape="0 100% 0 0 " id={2}></Panel>
                <Panel inputColor={panelColor[2]} hoverColor="#fff6ab" onClick={userChoice} shape="0 0 0 100% " id={3}></Panel>
                <Panel inputColor={panelColor[3]} hoverColor="#918bd6" onClick={userChoice} shape="0 0 100% 0 " id={4}></Panel>
            </PanelWrapper>
            <ButtonWrapper>
            <Button onClick={simonStart}>Start Button </Button>
            <p>Score:{score} </p>
            <Button onClick={scoreCompare}>Submit Answer </Button>
            </ButtonWrapper>
        </AppWrapper>


    )
}