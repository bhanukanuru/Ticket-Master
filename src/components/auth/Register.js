import React from 'react'
import {connect} from 'react-redux'
import {startRegister} from '../../actions/userAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
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
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        console.log(formData)
        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegister(formData,redirect))

    }
    render(){
        return(
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>UserName</label>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                    <label>Email:</label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <label>Paassword:</label>
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <input type="submit" value="register"/>
                </form>
            </div>
        )
    }
}
export default connect()(Register)