import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
const EnComponent=(OriginalComponent)=>
{
   
class NewComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
      }
      inc=()=>{
        this.setState(({count})=>(
            {count:count+1})
            )
      }
    render() 
    {
        return (<OriginalComponent name="suit" count={this.state.count} increment={this.inc}/>);
    }
} 
return NewComponent;
}

 export default EnComponent;
