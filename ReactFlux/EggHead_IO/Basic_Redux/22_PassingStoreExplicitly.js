/**
 * Created by mitchell_verter on 12/21/16.
 */


const {combineReducers, createStore} = Redux;

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

//const store = createStore(todoApp)



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
            <button
                onClick={
                        store.dispatch({
                            type: 'ADD_TODO',
                            id: nextTodoId++,
                            text: input.value
                        })
                    }>
                Add Todo
            </button>
        </div>
    )
}


class FilterLink extends Component {

    componentDidMount() {
        const{store} = this.props
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

const Footer = ({store}) => {
    <p>
        <FilterLink
            filter='SHOW_ALL'
            store={store}
            >
            All
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_ACTIVE'
            store={store}
            >
            Active
        </FilterLink>
        {', '}
        <FilterLink
            filter='SHOW_COMPLETED'
            store={store}
            >
            Completed
        </FilterLink>
    </p>
}

const TodoApp = ({store}) => (
    <div>
        <AddTodo store={store}/>
        <VisibleTodoList store={store}    />
        <Footer store={store}  />
    </div>
)


class VisibleTodoList extends Component {
    const {store} = this.props
    componentDidMount() {
        this.unsubscribe = store.subscribe(()=>this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const props = this.props;
        const {store} = props
        const state = store.getState();

        return (
            <TodoList
                todos={
                    getVisibleTodos(
                    state.todos,
                    state.visiblityFilter
                    )
                }
                onTodoClick = {id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })

                }
                />
        )
    }

}


ReactDOM.render(
    <TodoApp store={createStore(todoApp)}/>,
    document.getElementByID('root')
)