/**
 * Created by mitchell_verter on 12/20/16.
 */

<ul>
    {this.props.todos.map(todo =>
        <li key={todo.id}
            onClick={()=> {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                });
            }}
            style={{
                textDecoration:
                    todo.completed ?
                        'line-through' :
                        'none'
            }}>
        {todo.text}
        </li>
    )}
</ul>


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;

    }

}


const todos = (state = [], action = {}) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t=>todo(t, action));
        default:
            return state;

    }
}
