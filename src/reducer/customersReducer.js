const initialState=[]

const customersReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CUSTOMER':{
            return [...state,action.payload]
        }
        case 'UPDATE_CUSTOMER':{
            return state.map(customer=>{
                if(customer._id==action.payload._id){
                    return{...customer,...action.payload}
                }
                else{
                    return{...customer}
                }
            })
        }
        case 'REMOVE_CUSTOMER':{
            return state.filter(customer=>customer._id!=action.payload)
        }
        case 'SET_CUSTOMER':{
            return action.payload
                }
        default:{
            return [...state]
        }
               }

}
export default customersReducer