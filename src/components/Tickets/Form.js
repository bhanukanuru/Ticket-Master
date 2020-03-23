import React from 'react'
import {connect} from 'react-redux'
import { findTickets } from '../../selectors/TicketsSelector'
import {withRouter} from 'react-router-dom'


class TicketsForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:props.tickets?props.tickets.code:'',
            customer:'',
            department:'',
            employees:[],
            message:props.tickets?props.tickets.message:'',
            priority:''
        }
    }
//console.l
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleCustomer=(e)=>{
        this.setState({
            customer:e.target.value
        })
    }
    handleDepartment=(e)=>{
        this.setState({
            department:e.target.value
        })
    }
    handleEmployee=(e)=>{
        const employees=[]
        for(let emp of e.target.selectedOptions){
            employees.push({_id:emp.value})
        }
        console.log(employees)
        this.setState({employees})
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        
        const formData={
            code:this.state.code,
            customer:this.state.customer,
            department:this.state.department,
            employees:this.state.employees,
            message:this.state.message,
            priority:this.state.priority
        }
        this.props.handleTicketSubmit(formData)

    }
    render(){
        
        console.log(this.state.priority)
        return(
            <div className="col-md-11">
            <form className="form-group" onSubmit={this.handleSubmit}>  
               <label>Code:</label>              
               <input type="text" className="form-control" vlaue={this.state.code} onChange={this.handleChange} name="code"/>
               <br/>
               <label>Customer:</label>
               <select className="form-control" value={this.state.customer} onChange={this.handleCustomer}  id="customer">
               <option>select</option>
                    {this.props.customers.map(customer=>{
                        return(
                            <option key={customer._id} value={customer._id}>{customer.name}</option>
                        )
                    })}
               </select>
               <br/>
               <label>Departments:</label>
               <select className="form-control" value={this.state.department} onChange={this.handleDepartment}  id="department">
               <option>select</option>
                   {this.props.departments.map(department=>{
                       return(
                       <option key={department._id} value={department._id}>{department.name}</option>
                       )
                   })}
               </select>
               <br/>
               <label>Employees:</label>
                    <select  className="form-control" value={this.state.employeess}  onChange={this.handleEmployee} id="employees"  >
                        <option>select</option>
                        {this.props.employees.map(employee=>{
                           // console.log(employee.name)
                            return(
                            <option key={employee._id} value={employee._id}>{employee.name}</option>
                            )
                        })}

                   </select>
                   <br/>
                   <label>Message:</label>
                   <br/>
               <textarea rows="4" columns="1" value={this.state.form} className="form-control" onChange={this.handleChange} name="message"></textarea>
               <br/>
               <label>Priority</label>
               <br/>
               <label>High</label>
               <input type="radio" name="priority" value="High" onChange={this.handleChange} />
               <br/>
               <label>Medium</label>
               <input type="radio" name="priority" value="Medium" onChange={this.handleChange}/>
               <br/>
               <label>Low</label>
               <input type="radio" name="priority" value="Low" onChange={this.handleChange}/>
               <br/>

               <input type="submit" value="Add" />
                   
            </form>  
            
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    console.log(id)
   
    return{
        tickets:findTickets(state.tickets,id),
        customers:state.customers,
        departments:state.departments,
        employees:state.employees

    }
}
export default withRouter(connect(mapStateToProps)(TicketsForm))