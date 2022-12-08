import React, { Component } from 'react'
import EnComponent from './EnComponent';
class HoverCounter extends Component {
/*  constructor(){
    super()
    this.state={
        count:0
    }
  }
  inc=()=>{
    this.setState(({count})=>(
        {count:count+1})
        )
  }*/
  render()
  {
    return(
        <div>
        <h1 onMouseMove={this.props.increment}>{this.props.count}</h1>
        </div>
    )
  }
}
export default EnComponent(HoverCounter);