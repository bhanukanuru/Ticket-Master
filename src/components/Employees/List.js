import React from 'react'
import {connect} from 'react-redux'
import {startSetEmployee} from '../../actions/EmployeeAction'
import {startSetDepartments} from '../../actions/departmentsAction'
import {startRemoveEmployee} from '../../actions/EmployeeAction'

function EmployeesList(props){
    if(props.employees.length==0){
        props.dispatch(startSetEmployee())
        props.dispatch(startSetDepartments())
    }
    const handleShow=(id)=>{
        props.history.push(`/employees/${id}`)
    }
  
    const handleAdd=()=>{
        props.history.push('employees/new')
    }
    const handleRemove=(employee)=>{
        const confirm=window.confirm(`Are you Sure to remove ${employee.name}`)
        if(confirm){
            props.dispatch(startRemoveEmployee(employee._id))
        }
    }
    return(
        <div className="container">
            <h2>Employees-{props.employees?props.employees.length:""}</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Department</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employees.map(employee=>{
                            return(<tr key={employee._id}>
                                <td>{employee._id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobile}</td>
                                 <td>{employee.department.name|| props.departments.find(dept=>dept._id==employee.department).name} </td> 
                                 
                                <td><button className="btn btn-info" onClick={()=>{handleShow(employee._id)}}>Show</button></td>
                                <td><button className="btn btn-danger" onClick={()=>{handleRemove(employee)}}>Remove</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <br/>
            <button className="btn btn-info" onClick={handleAdd}>Add Employee</button>
           
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        employees:state.employees,
        departments:state.departments
    }
}

export default connect(mapStateToProps)(EmployeesList)