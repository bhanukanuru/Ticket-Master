import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findTickets} from '../../selectors/TicketsSelector'

function TicketShow(props){
    const {_id,code,customer,employees,department,message,priority}=props.tickets||{}
console.log(props.tickets)
    return(
        <div>
         {props.tickets?(<div>
          <h2>Code - {code}</h2>
          <p>Customer-{props.customers && props.customers.find(custom=>custom._id==customer).name}</p>        
          <p>Employees-{props.employees && employees.map((emp,i)=>{ return( <p key={i}>{props.employees.length!==0 && props.employees.find(ele=>ele._id==employees[i]._id).name}</p>
            )
        })}</p>
        <p>Department-{props.departments && props.departments.find(dep=>dep._id==department).name}</p>
        <p>Message-{message}</p>
        <p>Priority-<strong>{priority}</strong></p>
        <Link to={`/tickets/edit/${_id}`}>Edit</Link>
         </div>):(
             <div>Loading...</div>
         )}
         
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        tickets:findTickets(state.tickets,id),
        customers:state.customers,
        employees:state.employees,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(TicketShow)