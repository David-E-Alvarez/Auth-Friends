import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import FriendsList from './FriendsList';

const PrivateRoute = ({component: Component, ...rest}) => {    
    return(
        <div>
            <h1>PrivateRoute.js</h1>
            <FriendsList/>
        </div>
    );
}

export default PrivateRoute;