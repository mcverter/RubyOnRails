/**
 * Created by mitchell_verter on 12/16/16.
 */
import React from "react"

import React from "react"
import {render} from "react-dom"
import {connect} from "react-redux"
import {addTodo} from "../actions"
import {createStore} from "redux"
import todoApp from "./reducers"
import App from "./components/App"

let store = createStore(todoApp)

render (
    <Provider store={store}>
        <App />
        </Provider>,
    document.getElementById("root")
)