import React from 'react';

class CarListClass extends React.Component{
    constructor(props){
        super(props);

        this.state = { data:[], isReady:false};
    }

    componentDidMount(){
        this.getCarList()
        .then(
            res=>{
                console.log(res);
                this.setState({data:res, isReady:true})
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        ;
    }

    async getCarList(){
        const sUrl = "https://localhost:49161/WeatherForecast";
        const response = await fetch(sUrl);
        //const _data = await response.json();
        //console.log(_data);
        return response.json();
    }

    render(){
        
        let datatable = (this.state.isReady ? <p>Ready</p> : <p>Loading</p>);
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