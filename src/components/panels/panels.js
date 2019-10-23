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


    return (
        <div>
            <PanelWrapper>
                <Panel  inputColor="red" ></Panel>
                <Panel  inputColor="red" ></Panel>
                <Panel  inputColor="red" ></Panel>
                <Panel  inputColor="red" ></Panel>
            </PanelWrapper>
            <button >Start Button </button>
            <button >Confirm Button  </button>


        </div>
    )
}