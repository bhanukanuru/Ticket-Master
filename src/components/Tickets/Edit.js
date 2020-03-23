import React from 'react'
import TicketForm from './Form'
import {connect} from 'react-redux'
import {startEditTickets} from '../../actions/ticketsAction'
import { withRouter } from 'react-router-dom'

function TicketEdit(props){
   const handleTicketSubmit=(formData)=>{
       const redirect=()=>{
            props.history.push('/tickets')
        }
        props.dispatch(startEditTickets(formData,redirect))
    }

    return(
        <div>
            <h2>Edit Ticket</h2>
            <TicketForm handleTicketSubmit={handleTicketSubmit} />
        </div>
    )
}
export default withRouter(connect()(TicketEdit))