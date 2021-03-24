import React from 'react';

class CarListClass extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.getCarList()
        .then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        ;
    }

    async getCarList(){
        const sUrl = "https://127.0.0.11:49157/WeatherForecast";
        const response = await fetch(sUrl);
       // const _data = await response.json();
        //console.log(_data);
        return response.json();
    }

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