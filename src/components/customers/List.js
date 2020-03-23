import React from 'react'
import {connect} from 'react-redux'
import {startSetCustomers, startRemoveCustomer} from '../../actions/customersAction'
import {Link} from 'react-router-dom'

function CustomersList(props){
    if(props.customers.length==0){
        props.dispatch(startSetCustomers())
    }
   const handleShow=(id)=>{
    props.history.push(`/customers/${id}`)
   }
   const handleRemove=(id)=>{
        const confirmRemove=window.confirm('are you sure')
        if(confirmRemove){
            props.dispatch(startRemoveCustomer(id))
        }
   }
       console.log(props)
    return(
        <div className="container">
            <h2>Listing Customers:{props.customers.length}</h2>
          <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
                <th>Remove</th>
            </tr>    
            </thead>
            <tbody>
                {props.customers.map(customer=>{
                    //console.log(customer._id)
                    return(
                        <tr key={customer._id}>
                            <td>{customer._id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.mobile}</td>
                            <td><button className="btn btn-info" onClick={()=>{handleShow(customer._id)}}>Show</button></td>
                            <td><button className="btn btn-danger" onClick={()=>{handleRemove(customer._id)}}>Remove</button></td>
                        </tr>
                    )
                })}
            </tbody>
            
          </table>  
          <Link to="/customers/new">Add Customers</Link>
        </div>
    )
}
const mapStateToProps=(state)=>{
   return {customers:state.customers}
}

export default connect(mapStateToProps)(CustomersList)