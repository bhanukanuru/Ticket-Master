import axios from '../config/axios'

export const SetEmployee=(employee)=>{
    return{type:'SET_EMPLOYEE',payload:employee}
}

export const startSetEmployee=()=>{
    return(dispatch)=>{
        axios.get('/employees',{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
            let employees=response.data
            dispatch(SetEmployee(employees))
        })
    }
}

export const AddEmployee=(employee)=>{
    return{type:'ADD_EMPLOYEE',payload:employee}
}

export const startAddEmployee=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/employees',formData,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
           // console.log(response.data)
           const employee=response.data
           dispatch(AddEmployee(employee))
           redirect()
        })
    }
}

export const EditEmployee=(employee)=>{
    return{type:'EDIT_EMPLOYEE',payload:employee}
}

export const startEditEmployee=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/employees/${id}`, formData,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
            console.log(response.data)
            const employee=response.data
            dispatch(EditEmployee(employee))
            redirect()
        })
    }
}

export const RemoveEmployee=(employee)=>{
    return {type:'REMOVE_EMPLOYEE',payload:employee}
}


export const startRemoveEmployee=(id)=>{
    return(dispatch)=>{
        axios.delete(`/employees/${id}`,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
            const employee=response.data
            dispatch(RemoveEmployee(employee))

        })
    }
}