import axios from '../config/axios'

export const GetTickets=(tickets)=>{
 return{
     type:"GET_TICKETS",payload:tickets
 }
}

export const startGetTickets=()=>{
    return(dispatch)=>{
        axios.get('/tickets',{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then(response=>{
            //console.log(response.data)
            const tickets=response.data
            dispatch(GetTickets(tickets))
        })
    }
}

export const AddTicket=(tickets)=>{
    return{
        type:'ADD_TICKETS',payload:tickets
    }
}

export const startAddTickets=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/tickets',formData,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then(response=>{
            //console.log(response.data)
            const tickets=response.data
            dispatch(AddTicket(tickets))
            redirect()
        })
    }
}
export const RemoveTickets=(tickets)=>{
    return{
        type:'REMOVE_TICKETS',payload:tickets
    }
}

export const startRemoveTickets=(id)=>{
    return(dispatch)=>{
        axios.delete(`/tickets/${id}`,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
              // console.log(response.data)
           const tickets=response.data
           dispatch(RemoveTickets(tickets))
            
        })
    }
}

export const EditTickets=(tickets)=>{
    return{
        type:"EDIT_TICKETS",payload:tickets
    }
}

export const startEditTickets=(formData,id)=>{
  //  console.log(formData,id)
    return(dispatch)=>{
        axios.put(`/tickets/${id}`,formData,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then(response=>{
         //   console.log(response.data)
            const tickets=response.data
            dispatch(EditTickets(tickets))
        })
    }
}

// export const UpdateTickets=(tickets)=>{
//     return{
//         type:"UPDATE_TICKETS",payload:tickets
//     }
// }

// export const startUpdateTickets=(formData,id)=>{
//   //  console.log(formData,id)
//     return(dispatch)=>{
//         axios.put(`/tickets/${id}`,formData,{headers:{
//             'x-auth':localStorage.getItem('authToken')
//         }})
//         .then(response=>{
//          //   console.log(response.data)
//             const tickets=response.data
//             dispatch(UpdateTickets(tickets))
//         })
//     }
// }