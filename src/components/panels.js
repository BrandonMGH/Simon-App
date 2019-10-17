import React from 'react'
import styled from 'styled-components'

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
`
const RedPanel = styled(Panel)`
background-color: red; 
`
const BluePanel = styled(Panel)`
background-color: blue
`
const GreenPanel = styled(Panel)`
background-color: Green
`
const YellowPanel = styled(Panel)`
background-color: Yellow
`
export default function Panels () {

    return (
        <div>
        <PanelWrapper>
            <RedPanel>Red</RedPanel>
            <BluePanel>Blue</BluePanel>
            <GreenPanel>Green</GreenPanel>
            <YellowPanel>Yellow</YellowPanel>
        </PanelWrapper>

        <button>Start Button </button>
        </div>
    )
}