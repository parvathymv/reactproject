import React, { Component } from 'react'
import EnComponent from './EnComponent'

class ClickCounter extends Component {
  /*constructor(props){
    super(props)
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
    const {increment,count}=this.props
    return(
      <div>
      <h3>{this.props.name}</h3>
      <button onClick={increment}>{count}</button>
      </div>
    )
  }
}
export default EnComponent(ClickCounter);