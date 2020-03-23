import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {findDepartments} from '../../selectors/DepartmentsSelector'

function DepartmentShow(props){
    const {_id,name}=props.departments ||{}
    return(
        <div>
            {props.departments?(<div>
            <h1>Name-{name}</h1>
            <button>All</button>
            <button>Pending</button>
            <button>Completed</button>
            </div>
            ):(
                <div>loading...</div>
            )}
            
            <br/>
            <br/>
            <br/>
            <Link to={`/departments/edit/${_id}`}>Edit</Link>
            <br/>
            <Link to="/departments">Back</Link>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        departments:findDepartments(state.departments,id)
    }
}
export default connect(mapStateToProps)(DepartmentShow)