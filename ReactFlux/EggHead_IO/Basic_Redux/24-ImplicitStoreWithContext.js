/**
 * Created by mitchell_verter on 12/21/16.
 */


const {combineReducers, createStore} = Redux;

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

class Provider extends Component {
    get ChildContext() {
        return {
            store: this.props.store
        }
    }
    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: React.PropTypes.object
}

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

const AddTodo = (props, {store}) => {
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
        const{store} = this.context
        this.unsubscribe = store.subscribe(()=>
            this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const {store} = this.context;
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

FilterLink.contextTypes = {
    store: React.PropTypes.object
}
const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)


VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
}
class VisibleTodoList extends Component {
    const {store} = this.context;
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
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementByID('root')
)