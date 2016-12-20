import {ADD_TODO, REMOVE_TODO} from "actionTypes"

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

dispatch(addTodo(text))