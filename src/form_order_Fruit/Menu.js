import React, { Component } from "react";
class Menu extends Component {
    constructor (props) {
        super (props);
        this.state = {
            type: '',
            price: '',
            money: ''
        };
    }
    checkOrder=(money)=>{
        if(money>this.state.price){
            alert("Đồ uống của bạn đây "+this.state.type+'\Số tiền dư: '+(money-this.state.price)+"đ");
        }
        else{
            alert("Không đủ tiền")
        }
    }
    submitForm=(event)=>{
        event.preventDefault();
        if(this.state.price==''){
            alert("Vui lòng chọn đồ uống");
        }
        else{
            if(this.state.money==''){
                alert("Vui lòng nhập số tiền của bạn")
            }
            else{
                this.checkOrder(this.state.money)
            }
        }
    }
    setHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name =='money') {
            if(!Number(value)){
                alert("Nhập số tiền của bạn nhé!")
            }
        }
        if(name=='type'){
            if(value=="Caffee sữa"){
                this.setState({price:12000})
            }
            else if(value=="Caffee đen"){
                this.setState({price:10000})
            }
            else if(value=="Sting dâu"){
                this.setState({price:8000})
            }
            else{
                this.setState({price:2000})
            }
        }
        this.setState({[name]:value});
        console.log(event);
    }
    render() {
        return (
            <form name="form" onSubmit={this.submitForm} >
                <select val>
                    <option></option>
                </select>
            </form>
        );
    }
}
export default Menu