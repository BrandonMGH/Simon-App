import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Test from './Test.jsx'

export class Main extends Component {
    render() {
        return (
            <div>
                <Test name="Brandon" title="Magician"/>
                <p>test</p>
            </div>
        )
    }
}

export default Main

const wrapper = document.getElementById("testId");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;