import React from 'react';

export default class CarAdd extends React.Component {
    constructor(props){
        super(props);

        this.renderFormModel = this.renderFormModel.bind(this);
        this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
        this.submitApi = this.submitApi.bind(this);
    }

    handleSubmitEvent(e){
        e.preventDefault();
        console.log("handleSubmitEvent");
        
        const _formdata = new FormData(document.getElementById("formNewModel"));
        _formdata.append("id","0");


        
        //fetch(sUrl, requestOptions);


        this.submitApi(_formdata)
        .then( res => {
            console.log(res);
        }).catch( err =>{
            console.log(err);
        })
    }

    async submitApi(_formdata ){
        for ( var d of _formdata.entries() ){
            console.log(d[0] + ":" + d[1]);
        }

        const sUrl = "https://localhost:44337/api/CarModels";
        const requestOptions = {
            method: 'POST',
            body: _formdata
        };

        const res = await fetch(sUrl, requestOptions);
        return res;
    }



    renderFormModel(){
            return(
                <form onSubmit={this.handleSubmitEvent} id="formNewModel" >
                    <div>
                    <label>Name</label>
                    <input type="textinput" name="name" defaultValue="Name01" />
                    </div>
                    <div>
                        <label>Dealer</label>
                        <input type="textinput" name="dealer" defaultValue="dealer101" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>


            );

    }

    render(){

    return (
        <div>
            {this.renderFormModel()}
        </div>    
        );
    
    }
}

