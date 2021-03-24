import React from 'react';

class CarListClass extends React.Component{

    render(){
        const isready = true;
        let datatable = (isready ? <p>Ready</p> : <p>Loading</p>);
        return(
            <div>
            <h1>Car List class</h1>    
            {datatable}
            </div>
            
        );
    }
}

const CarList = CarListClass;
export default CarList;