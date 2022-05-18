import React, { Component } from 'react';

class State1 extends Component {
    constructor(props) {
        var arr = Products_data();
        super(props);
        this.state = {arr};
    }
    render() {
        return (
            <div>{
                this.state.arr.map(key =>
                <div> <h2>{key.name} </h2>
                <h2>tuổi:{key.type}</h2> 
                </div>
                )
            } 
            </div>
            
        );
    }
}
export default State1;
