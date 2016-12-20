
const counter = (state=0, action='') => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default :
            return state;
    }
};


const Counter = ({value}) => (
    <h1>{value}</h1>
)

const render = () => {
    ReactDOM.render (
        <Counter value={store.getState()} />,
        document.getElementById('root')
    )
}

store.subscribe(render);
render();

const Counter2 = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h2>{value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render2 = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement = {() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('root')
    )
}