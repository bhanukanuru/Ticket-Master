import React from 'react'
import {connect} from 'react-redux'
import {findEmployee} from '../../selectors/EmployeeSelector'
import {Link} from 'react-router-dom'


function EmployeesShow(props){
    
  const {_id,name,email}=props.employees||{}

    return(
       
        <div>
             {props.employees?(<div>
                <h2>Name -{name} <br/>Email- {email}</h2>
                <Link to={`/employees/edit/${_id}`}>Edit</Link>
             </div>
             ):(
                 <div>Loading....</div>
             )}
          
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    let id=props.match.params.id
    return {
        employees:findEmployee(state.employees,id)
    }
}

export default connect(mapStateToProps)(EmployeesShow)