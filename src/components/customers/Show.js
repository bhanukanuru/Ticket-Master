import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCustomers} from '../../selectors/customerSelectors'

function CustomerShow(props){
    const {_id,name,email,mobile}=props.customers ||{}
    return(
        <div>
            {props.customers?(<div>
                    <h1>id:{_id}</h1>
                    <p>Name:{name}</p>
                    <p>Email:{email}</p>
                    <p>Mobile:{mobile}</p>
                    <Link to={`/customers/edit/${_id}`}>Edit</Link>
                    <Link to="/customers">Back</Link>
         </div>
                     ):(<div>"Loading"</div>)}
          
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    let id=props.match.params.id
    return{customers:findCustomers(state.customers,id)}
}
export default connect(mapStateToProps)(CustomerShow) 