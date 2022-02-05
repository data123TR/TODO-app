function Parent() {
    const [age, setage] = React.useState(10);
    const [name, setname] = React.useState('');

    // const age=10;
    const updatename=(value)=>{
setname(value)
   
    }
  return <div>
      ParentComponent-{age} {name}
      <Child age={age} update={updatename}/>

  </div>;
}


function Child(props) {
  const [name, setname] = React.useState('maha');

  return <div>
      ChildComponent-{props.age}
      <button onClick={()=>{props.update(name)}}>click</button>
    
  </div>;
}

ReactDOM.render(<Parent/>,document.getElementById('container'))



port React from 'react';
import Child from './Child';

import { render } from "@testing-library/react"


class Parent extends React.Component{
    state={
        name:'datta', 
        city:'Gulbarga'
    }

    update=(a,b)=>{
      this.setState({
         name:a,
        city:b
      })
    }
    render(){
        return <div>
         <h1>{this.state.name} from {this.state.city }</h1>
         <Child name={this.state.name} update={this.update}/>
    </div>
}
}

export default Parent



import React, { Component } from 'react';

export class Child extends Component {
    state={
        name:'Appu',
        city:'Ramnagara'
    }
  render() {
    return <div>
      {/* <h2>{this.state.name} from {this.state.city}</h2> */}
      <h3>child-{this.props.name}</h3>    
      <button onClick={()=>{
          this.props.update(this.state.name,this.state.city)
      }}>Click</button>
      {/* <button onClick={()=>{this.props.update(this.state.name,this.state.city)}}>click</button> */}
    </div>;
  }                                                                                                                      
} 