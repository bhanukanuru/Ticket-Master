const initialState=[]

const departmentsReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LIST_DEPARTMENTS':{
            return [...action.payload]
        }
        case 'REMOVE_DEPARTMENTS':{
            return state.filter(department=>department._id!==action.payload._id)
        }
        case 'EDIT_DEPARTMENTS':{
            return state.map(department=>{
                if(department._id==action.payload._id){
                    return{...department,...action.payload}
                }
                else{
                    return {...department}
                }
            })
        }
        case 'ADD_DEPARTMENT':{
            return [...state, action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default departmentsReducer