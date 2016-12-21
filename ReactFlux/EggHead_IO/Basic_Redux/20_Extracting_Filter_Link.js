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

const AddTodo = (onAddClick) => {
    let input;
    return (
        <div>
            <input ref={node=> {
                    input=node;
                }} />
            <button onClick={()=>{
                    onAddClick(input.value);
                    input.value=''
                }}>
                AddTodo
            </button>
        </div>
    )
}

class FilterLink extends Component {

    componentDidMount() {
        this.unsubscribe = store.subscribe(()=>
         this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const state = store.getState();

        return (
            <Link
                active={
                props.filter == state.visibiiltyFilter
                }
                onClick={()=>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
                >
                {props.children}
            </Link>
        )

    }
}

const Link = ({
    active,
    children,
    onClick
    }) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href='#'
           onClick={ e => {
            e.preventDefault();
            onClick();
            }
            }
            >
            {children}
        </a>
    )
}

const Footer = () => {
    <p>
        <FilterLink
            filter='SHOW_ALL'
             >
            All
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_ACTIVE'
            >
            Active
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_COMPLETED'
            >
            Completed
        </FilterLink>
    </p>
}

const TodoApp = ({
    todos,
    visibiltyFilter
    }) => {
    //nextTodoId++
    return (
        <div>
            <div>
                <AddTodo
                    onAddClick={
                        store.dispatch({
                            type: 'ADD_TODO',
                            id: nextTodoId++,
                            text
                        })
                    } />
            </div>
            <div>
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
            <div>
                <Footer
                    visibiltyFilter={visibilityFilter}
                    onFilterClick={filter =>
                    store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                    })

                }
                    />
            </div>
        </div>
    )
};
