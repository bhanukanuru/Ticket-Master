const initialState=[]

const employeesReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_EMPLOYEE':{
            return action.payload
        }
        case 'EDIT_EMPLOYEE':{
            return state.map(employee=>{
                if(employee._id==action.payload._id){
                    return action.payload
                }
                else{
                    return employee
                }
            })
        }
        case 'REMOVE_EMPLOYEE':{
            return state.filter(employee=>employee._id!=action.payload._id)
        }
        case 'ADD_EMPLOYEE':{
            return [...state,action.payload]
        }
        default:{
            return[...state]
        }
    }

}
export default employeesReducer