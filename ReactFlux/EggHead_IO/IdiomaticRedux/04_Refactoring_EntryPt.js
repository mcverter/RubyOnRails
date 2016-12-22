/**
 * Created by mitchell_verter on 12/22/16.
 */

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import todoApp from './reducers'
import App from './components/App'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(
    todoApp,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos,
    })
}, 1000))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// configureStore.js

import {createStore} from 'redux'
import throttle from 'lodash/throttle'
import todoApp from './reducers'
import {loadState, saveState} from './localStorage'

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(todoApp, persistedState)

    store.subscribe(throttle(()=> {
        saveState({
            todos: store.getState().todos
        })
    }, 1000))
}

export default configureStore;

// after index.js

import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import configureStore from './configureStore'

const store = configureStore()
render(
    <Root store={store} />,
    document.getElementById('root')
)

// root component

import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import App from './App'

const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
)

Root.propTypes = {
    store: PropType.object.isRequired
}
export default Root;

