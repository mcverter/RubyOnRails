/**
 * Created by mitchell_verter on 12/22/16.
 */

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState===null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState)
    } catch(err) {
    }
}


store.subscribe(throttle(()=>{
    saveState({
        todos: store.getState().todos})
}, 1000))

import {v4} from 'node-uuid'