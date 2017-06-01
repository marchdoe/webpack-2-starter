import React from "react"
import ReactDom from "react-dom"
import App from "./app/App.jsx"

require('./assets/stylesheets/styles.scss')

ReactDom.render(<App />, document.getElementById('root'));
