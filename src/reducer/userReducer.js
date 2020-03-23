const initialState={}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {...action.payload}
        }    
        case 'REMOVE_USER':{
            return initialState
        }
       default:{
            return {...state}
        }
    }
}
export default userReducer