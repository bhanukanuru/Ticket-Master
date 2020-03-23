import React from 'react'
import {connect} from 'react-redux'
import {startSetDepartments} from '../../actions/departmentsAction'
import {startAddDepartments} from '../../actions/departmentsAction'
import {startRemoveDepartments} from '../../actions/departmentsAction'
import DepartmentForm from './Form'


function DepartmentList(props){
    if(props.departments.length==0){
        props.dispatch(startSetDepartments())
    }
   const handleShow=(id)=>{
        props.history.push(`/departments/${id}`)
    }
    const handleRemove=(department)=>{
        const confirmRemove=window.confirm(`Are sure to remove ${department.name}`)
        if(confirmRemove){
            props.dispatch(startRemoveDepartments(department._id))
        }
      
    }
    const handleSubmitDepartment=(department)=>{
        console.log(department)
       props.dispatch(startAddDepartments(department))
    }
    return(
        <div className="container">
            <h2>Departments - {props.departments.length}</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name of Department</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {props.departments.map(department=>{
                            return (<tr key={department._id}>
                                        <td>{department.name}</td>
                                        <td><button className="btn btn-info" onClick={()=>{handleShow(department._id)}}>Show</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>{handleRemove(department)}}>Remove</button></td>
                                    </tr>)
                        })}
                   
                </tbody>
            </table>
               <br/>
               <br/>
            
           <DepartmentForm  handleSubmitDepartment={handleSubmitDepartment}/>

        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        departments:state.departments
    }
}

export default connect(mapStateToProps)(DepartmentList)