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
let nextTodoId=0;

const addTodoActionCreator = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
    }
}
let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node=> {
                    input=node;
                }} />
            <button
                onClick={
                        dispatch()
                    }>
                Add Todo
            </button>
        </div>
    )
}


AddTodo = connect(
        state => {
        return {}
    },
        dispatch => {
        return {dispatch}
    }
)(AddTodo);

AddTodo = connect()(AddTodo)


const mapStateToLinkProps = (state, ownProps) => {
    return {
        active:
        ownProps.filter === state.visibiltyFilter
    }
}

const setVisibilityFilterActionCreator = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
            filter: ownProps.filter
    }
}
const mapDispatchToLinkProps = (state, ownProps) => {
    return {
        onClick=()=>
            dispatch(
                setVisibilityFilterActionCreator(ownProps.filter)
            )
        }
}


const FilterLink =
    connect(mapStateToLinkProps,
        mapDispatchToLinkProps)(Link)
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

mapVisibleTodoListStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visiblityFilter
        )
    };
}
mapVisibleTodoListDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
    };
}

const {connect} = ReactRedux
const VisibleTodoList = connect(
    mapVisibleTodoListStateToProps,
    mapVisibleTodoListDispatchToProps
)(TodoList)

const {Provider} = ReactRedux;

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementByID('root')
)