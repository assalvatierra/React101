import React from 'react';

class CarListClass extends React.Component{
    constructor(props){
        super(props);

        this.state = { data:[], isReady:false};
        //this.renderDataTable = this.renderDataTable.bind(this);
    }

    componentDidMount(){
        this.getCarList()
        .then(
            res=>{
                console.log("componentDidMount:" + res);
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
        const sUrl = "https://localhost:44337/WeatherForecast";
        const response = await fetch(sUrl);
        //const _data = await response.json();
        //console.log("getCarList:" + _data);
        return response.json();
    }

    static renderDataTable(_data)
    {
        console.log("renderDataTable:" + _data);
        return(
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>TempC</td>
                        <td>TempF</td>
                        <td>Summary</td>
                    </tr>
                </thead>
                <tbody>
                    {   _data.map( d=> 
                        <tr key={d.date}>
                            <td>{d.date}</td>
                            <td>{d.temperatureC}</td>
                            <td>{d.temperatureF}</td>
                            <td>{d.summary}</td>
                        </tr>
                    )

                    }
                </tbody>
            </table>

        );
    }

    render(){
        
        let datatable = (this.state.isReady ? CarListClass.renderDataTable(this.state.data) : <p>Loading</p>);
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