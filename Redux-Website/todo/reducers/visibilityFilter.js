/**
 * Created by mitchell_verter on 12/16/16.
 */

const visibilityFilter = (state = 'SHOW_ALL', action={type: ''}) => {
    switch(action.type) {
        case 'SET_VISIBILTY_FILTER':
            return action.filter;
        default :
            return state
    }
}

export default visibilityFilter