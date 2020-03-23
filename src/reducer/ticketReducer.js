const initialState=[]

const ticketReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_TICKETS':{
            return [...action.payload]
        }
        case 'ADD_TICKETS':{
            return [...state,action.payload]
        }
        case 'REMOVE_TICKETS':{
           return state.filter(tickets=>tickets._id!==action.payload._id)
        }
        case 'EDIT_TICKETS':{
            return state.map(ticket=>{
                if(ticket._id==action.payload._id){
                    return {...ticket,...action.payload}
                }
                else{
                    return {...ticket}
                }
            })
        }
        case 'UPDATE_TICKETS':{
            return state.map(ticket=>{
                if(ticket._id==action.payload._id){
                    return {...ticket,...action.payload}
                }
                else{
                    return {...ticket}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default ticketReducer