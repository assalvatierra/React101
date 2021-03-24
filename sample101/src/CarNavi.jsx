import React from 'react';
import {BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import CarAdd from './CarAdd';
import CarEdit from './CarEdit';
import CarList from './CarList';

export default function Navi(){
    return(
        <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/list'>List</Link></li>
                <li><Link to='/Add/20'>Add</Link></li>
                <li><Link to='/Edit/21'>Edit</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path='/List' render={()=><CarList />}></Route>
            <Route exact path='/Add/:id' render={(props)=>
                <CarAdd typeid={props.match.params.id}/>
                } />
            <Route exact path='/Edit/:id' render={(props)=>
                <CarEdit id={props.match.params.id} />

                } />

        </Switch>
        </BrowserRouter>

    );
}


function MenuCarList(){
    return(
        <h1>car List function</h1>
    );
}

function MenuCarAdd(){
    return(
        <h1>Car Add</h1>
    );
}

function MenuCarEdit(){
    return(
        <h1>Car Edit</h1>
    );
}
