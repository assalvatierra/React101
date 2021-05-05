import React from 'react';

export default
class CarList extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: [], isReady: false };
    }

    componentDidMount(){
        this.getData();
    }

    async getData()
    {
        const response = await fetch("https://localhost:44382/api/mycars");
        const _data = await response.json();
        this.setState({
            data: _data, 
            isReady: true
        });
    }

    static datatohtml(data){
        return(
            <table>
                <thead>
                    <tr>
                        <td>id</td><td>Name</td><td>Remarks</td>
                    </tr>
                </thead>
                <tbody>
                    { data.map( _tmp=>
                    <tr key={_tmp.id}>
                        <td>{_tmp.name}</td>
                        <td>{_tmp.remarks}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render(){
        let htmlform = this.state.isReady ?
            CarList.datatohtml(this.state.data): 
            <div><p>Not ready</p></div>;
        return(
            <div>{htmlform}</div>
        );
    }
}

