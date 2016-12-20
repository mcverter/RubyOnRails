import Redux from 'redux';

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

const createStore = {Redux};

const store = createStore(counter);

console.log(store.getState()); // 0
store.dispatch({type: 'INCREMENT'});
console.log(store.getState());

const render = () => {
    document.body.innerText = store.getState()
};

/*
store.subscribe(()=> {
    document.body.innerText = store.getState();
})
*/
// any dispatch will cause a render
store.subscribe(render);


document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});