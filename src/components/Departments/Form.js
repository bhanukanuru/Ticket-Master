import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { findDepartments } from '../../selectors/DepartmentsSelector'

class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.departments?props.departments.name:''
        }
    }
    handleChange=(e)=>{
        let name=e.target.value
        this.setState({name})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
       // console.log('hi')
        this.props.handleSubmitDepartment(this.state.name)
        this.state.name=''
    }
    render(){
        return(
            <div> 
                <form onSubmit={this.handleSubmit}>
                <div className="class-group">
                    <label>Add Department:</label>
                    <br/>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="class-group">
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Add"/>
                    </div>
                </form>
               
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    let id=props.match.params.id
    return {
        departments:findDepartments(state.departments,id)
    }
}

export default withRouter(connect(mapStateToProps)(DepartmentForm))