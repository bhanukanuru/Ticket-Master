import React from 'react'
import CustomerForm from './Form'
import {startUpdateCustomer} from '../../actions/customersAction'
import {connect} from 'react-redux'

function CustomerEdit(props){
    const handleSubmit=(formData)=>{
        let id=props.match.params.id
        const redirect=()=>props.history.push('/customers')
        props.dispatch(startUpdateCustomer(formData,id,redirect))
    }
    return(
        <div>
            <h2>Add Customer</h2>
            <CustomerForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(CustomerEdit)