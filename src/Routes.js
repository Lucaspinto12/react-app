import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import ListCar from "./pages/ListCar";
import CrierCar from "./pages/CrierCar";


const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/car" component={ListCar} />
                <Route exact path="/CrierCar" component={CrierCar} />
            </Switch>
        </div>
    )
}

export default Routes;