import React from 'react'
import styled from 'styled-components'

const PanelWrapper = styled.section`
display: grid; 
`

const Panel = styled.section`
width: 100%
`
const RedPanel = styled(Panel)`
background-color: red; 
`
const BluePanel = styled(Panel)`
background-color: blue
`
export default function Panels () {

    return (
        <PanelWrapper>
            <RedPanel></RedPanel>
            <BluePanel></BluePanel>
        </PanelWrapper>
    )
}