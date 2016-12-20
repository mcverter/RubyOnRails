/**
 * Created by mitchell_verter on 12/20/16.
 */

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                completed?
                'line-through' :
                'none'
        }}
     >
        {{text}}
     </li>

)

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={()=>onTodoClick(todo.id)}
                />
        )}
        </ul>
)

class TodoApp extends Component {
    render () {
        const {
            todos,
            visibilityFilter
            } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        )
        return (
            <div>
                <input ref={node=> {
                    this.input=node;
                }} />
                <button onClick={()=>{
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    })
                    this.input.value=''
                }}>
                    AddTodo
                </button>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id =>
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    }
                    />
            </div>
        )
    }
}