import React, { Component } from 'react'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';
export default class Home extends Component {
    constructor(){
        super()
        this.state ={
          showPassword:false,
        }
    }
    render() {

        return (
            <section className="py-4 container">
                <div className ="row justify-content-center">
                    <div className = "col-3">
                        <div className ="input-group mb-3 show border rounded ">
                    <input 
                    className ="form-control bg-dark text-light"
                    type = {this.state.showPassword ? "text" : "password"}
                    />
                   <button className ="input-group-text bg-dark text-light"
                    onClick ={() => this.setState({showPassword :!this.state.showPassword})}>
                        {this.state.showPassword ? <ShowIcon/> : <ShowOffIcon/>}</button>
                </div>
                </div>
                </div>
            </section> 
        )
    }
}
