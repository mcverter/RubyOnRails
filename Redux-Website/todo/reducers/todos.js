

const todo = (state={}, action={type: ''}) => {
    switch (action.type) {
        case ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ]
        case TOGGLE_TODO:
            return state.map((todo, index)=> {
                if (index===action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
            })
        default :
            return state
    }
}
