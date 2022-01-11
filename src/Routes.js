import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./pages/Home";
import ListCar from "./pages/ListCar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {isAuthenticated} from "./auth/Auth";


const PrivateRoute = ({component: Component, ...rest})  =>  (
    <Route {...rest} render={props =>  (
         isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/login", state: {from: props.location} }} />
        )
    )} />
)


const Routes = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute exact path="/home" component={Home}/>
                <PrivateRoute exact path="/">
                    <Redirect to="/home"/>
                </PrivateRoute>
                <PrivateRoute exact path="/car" component={ListCar}/>
                <Route exact path="/login" component={SignIn}/>
                <Route exact path="/register" component={SignUp}/>
            </Switch>
        </div>
    )
}

export default Routes;
