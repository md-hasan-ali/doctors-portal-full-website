import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../contexts/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoadding } = useAuth();
    if (isLoadding) { return <CircularProgress></CircularProgress> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;