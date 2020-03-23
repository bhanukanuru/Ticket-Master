import React from 'react'
import EmployeeForm from '../Employees/Form'
import {connect} from 'react-redux'
import {startAddEmployee} from '../../actions/EmployeeAction'

function EmployeeNew(props){
    const handleSubmit=(formData)=>{
        const redirect=()=> props.history.push('/employees')
        props.dispatch(startAddEmployee(formData,redirect))
    }
    return(
        <div>
            <h2>Add Employee</h2>
            <EmployeeForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(EmployeeNew)