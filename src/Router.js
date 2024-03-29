import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./conatiners/home/home"
import Reviewer2u from "./conatiners/reviewer2u/reviewer2u"
import ElluxTroca from "./conatiners/elluxTroca/elluxTroca"
import Tfg360 from "./conatiners/tfg360/tfg360"
import TxB from "./conatiners/txb/txb"
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Routes() {
    return (
        <ParallaxProvider>
            <Router basename={process.env.PUBLIC_URL}>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/reviewer2u">
                        <Reviewer2u />
                    </Route>
                    <Route path="/ellux-return">
                        <ElluxTroca />
                    </Route>
                    <Route path="/360">
                        <Tfg360 />
                    </Route>
                    <Route path="/txb">
                        <TxB />
                    </Route>
                </Switch>
            </Router>
        </ParallaxProvider>
    );
}