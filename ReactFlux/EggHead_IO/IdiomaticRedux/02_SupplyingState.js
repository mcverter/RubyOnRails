/**
 * Created by mitchell_verter on 12/22/16.
 */


const store = createStore(todoApp)

const todoApp = combineReducers({
    todos,
    visibilityFilter
})
const todos = (state=[], action={}) => ({})
const visiblityFilter = (state='SHOW_ALL', action={}) => ({})

const persistedState = {
    todos: [{
        id: 0,
        text: 'Welcome Back!',
        completed: false
    }]
}

const store = createStore(
    todoApp,
    persistedState
)