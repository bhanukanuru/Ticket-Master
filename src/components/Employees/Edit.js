import React from 'react'
import EmployeeForm from '../Employees/Form'
import {connect} from 'react-redux'
import {startEditEmployee} from '../../actions/EmployeeAction'

function EmployeeEdit(props){
    const handleSubmit=(formData)=>{
        let id=props.match.params.id
        const redirect=()=> props.history.push('/employees')
        props.dispatch(startEditEmployee(formData,id,redirect))
    }
    return(
        <div>
            <h2>Edit Employee</h2>
            <EmployeeForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(EmployeeEdit)