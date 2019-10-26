import React from "react"
import ReactDom from "react-dom"
import App from "./components/app.js"
import "./style.css"





export default function Index(props) {
    return(
        <div>
            <App />
        </div>

    )

}

ReactDom.render(<Index />, document.getElementById("root"))