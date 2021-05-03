import React from 'react';

export default 
class MyCar extends React.Component{
    render(){
        return(
            <div>
            <div>Sample Component</div>
            <p>Name:{this.props.name}</p>
            </div>
        );
    }
}