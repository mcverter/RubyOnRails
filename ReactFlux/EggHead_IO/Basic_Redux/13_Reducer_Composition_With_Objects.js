/**
 * Created by mitchell_verter on 12/19/16.
 */


const visibilityFilterReducer = (state = 'SHOW_ALL', action={} ) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}


const todoApp = (state={}, action = {}) => {
    return {
        todos: betterComposedTodoReducerEntireListOfTodos(
            state.todos,
            action
        ),
        visibiiltyFilter: visibilityFilterReducer(
            state.visibilityFilter,
            action
        )
    }
}