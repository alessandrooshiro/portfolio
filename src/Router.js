import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./conatiners/home/home"
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Routes() {
    return (
        <ParallaxProvider>
            <Router>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ParallaxProvider>
    );
}