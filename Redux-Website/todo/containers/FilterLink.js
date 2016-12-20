/**
 * Created by mitchell_verter on 12/16/16.
 */
import {connect} from "react-redux"
import {setVisibilityFilter} from "../actionTypes"
import Link from "../components/Link"

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibiltyFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibiltyFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;