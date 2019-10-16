import React from "react"
import ReactDom from "react-dom"

export default function Index(props) {
    return(
        <div>
            <p>hello {props.name}  </p>
        </div>

    )

}

ReactDom.render(<Index name="world"/>, document.getElementById("root"))