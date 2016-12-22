/**
 * Created by mitchell_verter on 12/22/16.
 */

export const addTodoArrow = (text) => {
    return {
        type: 'ADD_TODO',
        id: (nextTodoId++).toString(),
        text
    }
}

export function addTodoES5(text) {
    return {
        type: 'ADD_TODO',
        id: (nextTodoId++).toString(),
        text
    }
}
export const addTodoObjectExpression = (text) => ({
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text
})

const MapStateToPropsES6Function =
    (state, ownProps) => {
        return {
          active: ownProps.filter === state.visibiltyFilter
        }
    }

const mapDispatchToPropsES6Function =
    (dispatch, ownProps) => {
        return {
            onClick: () => {
                dispatch(setVisibiltyFilter(ownProps.filter))
            }
        }
    }


const mapStateToPropsES6Object = (state, ownProps) => ({
    active: ownProps.filter === state.visibiltyFilter
})
const mapDispatchToPropsES6Object = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibiltyFilter(ownProps.filter))
    }
})

const mapDispatchToPropsES6ObjectEvenMoreConcise = (dispatch, ownProps) => ({
    onClick()  {
        dispatch(setVisibiltyFilter(ownProps.filter))
    }
})
