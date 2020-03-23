import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {findEmployee} from '../../selectors/EmployeeSelector'

class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.employees?props.employees.name:'',
            email:props.employees?props.employees.email:'',
            mobile:props.employees?props.employees.mobile:'',
            department:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleDept=(e)=>{
      // console.log(this.department)
      this.setState({department:e.target.value})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
      this.props.handleSubmit(formData)
    }
    render(){
        console.log(this.state.department)
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br/>
                    <label>Email</label>
                    <input type="text"  name="email" value={this.state.email} onChange={this.handleChange}/>
                    <br/>
                    <label>Mobile</label>
                    <input type="text"  name="mobile" value={this.state.mobile} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="department">Choose a department</label>
                    <select value={this.state.department} onChange={this.handleDept} id="department">
                        <option>Select</option>
                        {this.props.departments.map(dept=>{
                            return(<option key={dept._id} value={dept._id}>{dept.name}</option>)
                        })}
                    </select>
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
        departments:state.departments,
        employees:findEmployee(state.employees,id)
    }
}

export default withRouter(connect(mapStateToProps)(EmployeeForm))