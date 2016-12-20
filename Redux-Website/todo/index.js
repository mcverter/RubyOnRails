import {createStore} from "redux"
import todoApp from "./reducers"

import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from "./actionTypes"

let store = createStore(todoApp)

console.log(store.getState());

let unsubscribe = store.subscribe(()=>
    console.log(store.getState())
)

store.dispatch(addTodo("learnaboutactions"))