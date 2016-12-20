/**
 * Created by mitchell_verter on 12/20/16.
 */


const FilterLink = ({
    filter,
    children
}) => {
    return (
        <a href='#'
           onClick={e => {
            e.preventDefault();
            store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter
            });
           }}>
            {{children}}
        </a>
    )}

<p>
Show
    {' '}
<FilterLink
filter='SHOW_ACTIVE'>

Active
</FilterLink>

    {' '}
    <FilterLink
        filter='SHOW_COMPLETED'>

        Completed
    </FilterLink>

    {' '}
    <FilterLink
        filter='SHOW_ALL'>

        All
    </FilterLink>
</p>



const getVisibleTodos = (
    todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter (
                t=>t.completed
            )
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => ! t.completed
            )
    }
}


class TodoApp extends Component {
    render() {
        const visibleTodos = getVisibleTodos(
            this.props.todos,
            this.props.visibiltyFilter
        );
        return(
            <div>
                <input ref={node => {
                this.input = node}} />
                <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: this.input.value,
                    id: nextTodoId++
                });
                this.input.value = ''
                }}>
                    Add Todo
                </button>
                <ul>
                    {visibleTodos.map(todo =>
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}


const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
            />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();

class TodoApp extends Componet {
    render() {
        const {
            todos,
            visibilityFilter
            } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        )
        return(
            <div>
                <input ref={node => {
                this.input = node}} />
                <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text: this.input.value,
                    id: nextTodoId++
                });
                this.input.value = ''
                }}>
                    Add Todo
                </button>
                <ul>
                    {visibleTodos.map(todo =>
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                    )}
                </ul>
            </div>
        )
    }
}

const FilterLink = ({
    filter,
    currentFilter,
    children
}) => {
    if (filter === currentFilter) {
        return <span>{children}</span>
    }
    return (
        <a href='#'
           onClick={e => {
            e.preventDefault();
            store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter
            });
           }}>
            {{children}}
        </a>
    )}
}