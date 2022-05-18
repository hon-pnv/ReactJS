import React,{Component} from 'react';
import getData from '../component/Content/data'
import One from './One'
class state extends Component {
    constructor() {
        super()
        this.state = getData()
    }
    render() {
        return (
            <div>
                {this.state.map(key => {
                    return (<One image={key.image} name={key.name}></One>)
                })}
            </div>
        )
    }
}
export default state;