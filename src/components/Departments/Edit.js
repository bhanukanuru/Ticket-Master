import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from './Form'
import {startEditDepartment} from '../../actions/departmentsAction'

function DepartmentEdit(props){
    const handleSubmitDepartment=(department)=>{
        let id=props.match.params.id
        const redirect=()=>props.history.push('/departments')
        props.dispatch(startEditDepartment(department,id,redirect))
    }
    return(
        <div>
            <h2>Edit Department</h2>
            <DepartmentForm handleSubmitDepartment={handleSubmitDepartment} />
        </div>
    )
}
export default connect()(DepartmentEdit)