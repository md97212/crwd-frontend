import * as React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import {ApplyContainer} from "./pages/apply.container";
import {Home} from "./pages/home";
import {SignupContainer} from "./pages/signup.container";
import {Unqualified} from "./pages/unqualified";

export const App = () => {
    return (
        <>
                <HashRouter>
                    <Switch>
                        <Route path="/" component={ApplyContainer} exact={true}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/signup" component={SignupContainer}/>
                        <Route path="/apply" component={ApplyContainer}/>
                        <Route path="/unqualified" component={Unqualified}/>
                    </Switch>
                </HashRouter>
        </>
    );
};
