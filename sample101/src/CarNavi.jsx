import React from 'react';
import {BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import CarAdd from './CarAdd';

export default function Navi(){
    return(
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/list'>List</Link></li>
                <li><Link to='/Add/20'>Add</Link></li>
                <li><Link to='/Edit'>Edit</Link></li>
            </ul>
        </div>
        <Switch>
            <Route path='/List' render={MenuCarList}></Route>
            <Route path='/Add:id' render={(props)=>MenuCarAdd(props.match.params.id)} />
            <Route path='/Edit'><MenuCarEdit /></Route>

        </Switch>
        </BrowserRouter>

    );
}


function MenuCarList(){
    return(
        <h1>car List function</h1>
    );
}

function MenuCarAdd(typeid){
    return(
        <h1>Car Add : {typeid} </h1>
    );
}

function MenuCarEdit(){
    return(
        <h1>Car Edit</h1>
    );
}
