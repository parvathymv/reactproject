import React, { Component } from 'react';

class Student extends Component {
    
 
    constructor(props)
    {
        super(props);
    
    this.state={
        name : "Sai",
        college : "SCKT",
        year : "2nd",
        count: 0
    };
    this.changeState=this.changeState.bind(this);
    }
    increment=()=>
    {
        this.setState({count : this.state.count+1});
    }
    changeState()
    {
        this.setState({year : "2nd year IT"});
       
    }
   render() {
        return (
            <div>
                {this.state.count}
               <h3>I am {this.state.name} from {this.state.year} in {this.state.college}</h3> 
               <button onClick={this.increment}>Click</button>  
                   
            </div>
        )
    }
}
export default Student;
