import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const BasicExample = () => (
    <Router>
        <div>
            <Link to="/congrats">Submit</Link>
            <hr />
            <Route path="/congrats" component={Congrats} />
        </div>
    </Router>
);

const Congrats = () => (
    <div>
        <h2>Congratulations on your adoption!</h2>
    </div>
);


export default BasicExample;