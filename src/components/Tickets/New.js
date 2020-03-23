import React from 'react'
import TicketForm from './Form'
import {connect} from 'react-redux'
import {startAddTickets} from '../../actions/ticketsAction'
import { withRouter } from 'react-router-dom'

function TicketNew(props){
   const handleTicketSubmit=(formData)=>{
       const redirect=()=>{
            props.history.push('/tickets')
        }
        props.dispatch(startAddTickets(formData,redirect))
    }

    return(
        <div>
            <h2>Add Ticket</h2>
            <TicketForm handleTicketSubmit={handleTicketSubmit} />
        </div>
    )
}
export default withRouter(connect()(TicketNew))