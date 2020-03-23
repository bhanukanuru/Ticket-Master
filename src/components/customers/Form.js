import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomers} from '../../selectors/customerSelectors'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.customer?props.customer.name:'',
            email:props.customer?props.customer.email:'',
            mobile:props.customer?props.customer.mobile:''
        }
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handlechange} />
                    <br/>
                    <br/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handlechange}/>
                    <br/>
                    <br/>
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.handlechange} />
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    let id=props.match.params.id
    return{
        customer:findCustomers(state.customers,id)
    }

}
export default withRouter(connect(mapStateToProps)(CustomerForm))