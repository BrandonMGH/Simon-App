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
    const [powerState, setPower] = useState(false)
    const [onText, setOnText] = useState('Off')
    const [counterText, updateCounterText] = useState("-")
    const [win, winSet] = useState(true)
    const [simonSelection, setSimonSelection] = useState([])
    const [playerSelection, setPlayerSelection] = useState([])
    const [panelFlashCount, updateFlashCount ] = useState(0);
    const [intervalId, setintervaID] = useState(0)
    const [turnCount, updateTurnCount ] =  useState(1)
    const [good, updateGood] = useState(true)



    // let order = [];
    // let playerOrder = [];
    // let flash;
    // let turn;
    // let good;
    let compTurn;
    // let intervalId;
    // let strict = false;
    // let noise = true;
    // let on = false;
    // let win;

    let power = () => {
        if(powerState === false){
            setPower(true)
            setOnText("On")
            // console.log(on)
            updateCounterText("__")
        } else {
            setPower(false)
            setOnText("Off")
            // console.log(on)
            updateCounterText("-")
        }
    }
console.log(powerState)
    let startSimon = () => {
        if (powerState){
            console.log("game has started")
            play();
        } else {
            console.log("Power on game first")
        }
    }

    let play = () => {
        winSet(false);
        setSimonSelection([]);
        setPlayerSelection([]);
        updateFlashCount(0);
        setintervaID(0);
        updateTurnCount(1);
        updateCounterText(1)
        updateGood(true)
        for(let i = 0; i < 25; i ++){
            simonSelection.push(Math.floor(Math.random() * 4) + 1);
        }
        // setintervaID(setInterval(gameTurn, 800))
        console.log(simonSelection)
    }


    return (
        <div>
            <PanelWrapper>
                <Panel  inputColor="red" ></Panel>
                <Panel  inputColor="red" ></Panel>
                <Panel  inputColor="red" ></Panel>
                <Panel  inputColor="red" ></Panel>
            </PanelWrapper>
            <button onClick={startSimon}>Start Button </button>
            <p>{counterText}</p>
            <button onClick={power}>{onText}</button>


        </div>
    )
}