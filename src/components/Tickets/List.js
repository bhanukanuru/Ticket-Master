import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {startGetTickets} from '../../actions/ticketsAction'
import {startRemoveTickets,startEditTickets} from '../../actions/ticketsAction'
import {startSetEmployee} from '../../actions/EmployeeAction'
import {startSetCustomers} from '../../actions/customersAction'
import PieCharts from './pi-chart'
import BarGraph from './Bar-Graph'
//import SearchTicket from './search'
//import {withRouter} from 'react-router-dom'
// import {findCustomers} from '../../selectors/customerSelectors'
// import {findDepartments} from '../../selectors/DepartmentsSelector'


function TicketList(props){
    const [completed,setcompleted] = useState(true)
    const [tickets,setTickets] = useState([])
    useEffect(()=>{
        setTickets(props.tickets.filter(ele=>ele.isResolved==completed))
    },[props.tickets,completed])
    

    if(props.tickets.length==0){
        props.dispatch(startGetTickets())
        props.dispatch(startSetCustomers())
        props.dispatch(startSetEmployee())
    }
        
    
    const handleAdd=()=>{
        props.history.push('/tickets/new')
    }
    const handleShow=(id)=>{
        props.history.push(`/tickets/${id}`)
    }
    const handleRemove=(id)=>{
        const confirm=window.confirm("Are You Sure")
        if(confirm){
            props.dispatch(startRemoveTickets(id))
        }
    }
    const handleCheck=(id,status)=>{
       props.dispatch(startEditTickets({isResolved:!status},id))
    }
    const handleClick=(status)=>{
        setcompleted(status)
    }
    // let completed = props.tickets.filter(ticket=>ticket.isResolved==true)
    // let Incompleted = props.tickets.filter(ticket=>ticket.isResolved==false)
    return(
        <div className="container">
            <h2>Listing Tickets {props.tickets.length}</h2>
            <br/>
            <button className="btn btn-light" onClick={()=>handleClick(false)} >Incompleted</button>
            <button className="btn btn-light" onClick={()=>handleClick(true)}>Completed</button>
            {/* <SearchTicket code={this.state.search}/> */}
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Code</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employees</th>
                        <th>Message</th>
                        <th>Prority</th>
                        <th>Actions</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket=>{
                       //console.log(ticket.employees)
                        return(
                            <tr key={ticket._id}>
                                <td>{ticket.code}</td>
                                <td>{ticket.customer && ticket.customer.name}</td>
                                <td>{ticket.department.name || props.departments.find(department=>department._id==ticket.department).name}</td>
                                <td>{ ticket.employees.map(employee=>employee.name) || ticket.employees.map((tik,i)=>{
                                    return(
                                        <p key={i}>
                                            {
                                               props.employees.length!==0 && props.employees.find(ele=>ele._id==ticket.employees[i]._id).name
                                            }
                                        </p>
                                    )
                                })}</td>
                                <td>{ticket.message}</td>
                                <td>{ticket.priority}</td>
                                <td><button className="btn btn-info" onClick={()=>{handleShow(ticket._id)}}>Show</button></td>
                                <td><button  className="btn btn-danger" onClick={()=>{handleRemove(ticket._id)}}>Remove</button></td>
                                <td><input type="checkbox" checked={ticket.isResolved} name="isResolved" onChange={()=>handleCheck(ticket._id,ticket.isResolved)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
               
            </table>
               
            <button className="btn btn-primary"  onClick={handleAdd}>Add Ticket</button>
            <br/>
            <br/>
            <center><p>Completed Percentage-{(props.tickets.filter(ticket=>ticket.isResolved==true).length/props.tickets.length*100).toFixed(2)}%</p></center>
            <progress className="progress-bar" value={props.tickets.filter(ticket=>ticket.isResolved==true).length/props.tickets.length*100} max="100" style={{width:"100%"}}></progress>
            <br/>
            <h3 align="center">Data on Pending Ticket</h3>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                         <PieCharts />
                      </div>
                      <div className="col-md-6">
                         <BarGraph />
                      </div>

                  </div>

              </div>
           
        </div> 
    )
}

const mapStateToProps=(state)=>{
    return{
        tickets:state.tickets,
        customers:state.customers,
        departments:state.departments,
        employees:state.employees
    }
}
export default connect(mapStateToProps)(TicketList)