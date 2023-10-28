import React, { Component } from 'react';
import './styles.css';

export default class Age extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ag: '',
            newage: null, // Define newage as a class property
        };
    }

    handleInput = (e) => {
        const newage = new Date(e.target.value); // Define newage within the handleInput function
        this.setState({
            ag: newage,
            agecount: this.countage(newage),
        });
    }

    countage = (newage) => { // Use the newage defined in handleInput
        const currentDate = new Date();
        const counta = currentDate.getFullYear() - newage.getFullYear();
        if(currentDate.getMonth() < newage.getMonth() ||
        (currentDate.getMonth() === newage.getMonth() &&
          currentDate.getDate() < newage.getDate())){
            return counta -1;
          }else{
            return counta;
          }      
    }
    

    render() {
        return (
            <div>
                <div className='box'>
                    <h1 className='head'>Age Calculator</h1>
                    <h4>Enter your date of birth</h4>
                    <input type='date' onChange={this.handleInput}></input>
                    <p className='wc'>Your Age is :{this.state.agecount} years</p> {/* Display word count */}
                </div>
            </div>
        )
    }
}
