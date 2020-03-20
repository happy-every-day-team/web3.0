import React from 'react'
import { BrowserRouter as Router, IndexRedirect, Route, Link, } from "react-router-dom";

import { Layout, Member } from './containers'

function RouterDemo() {
    return (
        <Router>
            <Route path="/" component={Layout}>
                <IndexRedirect to="index" />
                <Route path="/member" component={Member}></Route>
            </Route>
        </Router>
    )
}

export default RouterDemo

