import React from 'react'

export default class Counter extends React.Component{
  state= {
    count: 0,
  }
  handleMinus100=()=>{
    this.setState((prevState)=>({count:prevState.count-100}))
  }
    handleMinus10=()=>{
    this.setState((prevState)=>({count:prevState.count-10}))
  }
    handleMinus1=()=>{
    this.setState((prevState)=>({count:prevState.count-1}))
  }
    handlePlus1=()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
  }
    handlePlus10=()=>{
    this.setState((prevState)=>({count:prevState.count+10}))
  }
    handlePlus100=()=>{
    this.setState((prevState)=>({count:prevState.count+100}))
  }

  render(){
    const {count}= this.state;
    return(
        <center>
        <button type="button" onClick={this.handleMinus100}>-100</button>
        <button type="button" onClick={this.handleMinus10}>-10</button>
        <button type="button" onClick={this.handleMinus1}>-1</button>
        <h1>Counter:{count}</h1>
        <button type="button" onClick={this.handlePlus1}>+1</button>
        <button type="button" onClick={this.handlePlus10}>+10</button>
        <button type="button" onClick={this.handlePlus100}>+100</button>
        </center>
    )
  }
}