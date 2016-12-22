/**
 * Created by mitchell_verter on 12/22/16.
 */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {Router, Route, browserHistory} from 'react-router'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>
);


// Footer

const Footer = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter="all">
            All
         </FilterLink>
        {", "}
        <FilterLink filter="active">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="completed">
           Completed
        </FilterLink>
    </p>
)

// FilterLink

import React, {PropTypes} from 'react';
import {Link} from 'react-router'
const FilterLink = ({filter, children}) => (
    <Link
        to={filter==='all'? '' : filter}
        activeStye={{
        textDecoration: 'none',
        color: 'black'
        }}
        >
        {{children}}
        </Link>
)


FilterLink.propTypes = {
    filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
    children: PropTypes.node.isRequired
}
