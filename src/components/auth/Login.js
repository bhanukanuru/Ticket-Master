import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../../actions/userAction'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        const redirect=()=>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startLogin(formData,redirect))
    }
    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <label>Paassword:</label>
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}

export default connect()(Login)