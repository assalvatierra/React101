import React from 'react';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyCar from './Components/myCar';



export default
class Navi extends React.Component{
    render(){
        return(
            <div>
                <div>Navi</div>
                <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/Sample1">Sample 01 (render test)</Link>
                    </li>
                    <li>
                        <Link to="/Sample2">Sample 2 (SpyOn fetch)</Link>
                    </li>
                </ul>
                    <Switch>
                        <Route path="/Sample1" component={MyCar} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    };
}