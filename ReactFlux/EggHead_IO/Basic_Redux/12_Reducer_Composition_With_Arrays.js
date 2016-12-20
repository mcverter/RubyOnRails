const betterComposedTodoReducerSingleTodo = (state, action ) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}

const betterComposedTodoReducerEntireListOfTodos = (state = [], action ='' ) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                betterComposedTodoReducerSingleTodo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t =>
            betterComposedTodoReducerSingleTodo(t, action))
        default:
            return state;
    }

}
