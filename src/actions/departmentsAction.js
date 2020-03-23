import axios from '../config/axios'

export const ListDepartments=(departments)=>{
    return{
        type:'LIST_DEPARTMENTS',payload:departments
    }
}

export const startSetDepartments=()=>{
    return(dispatch)=>{
        axios.get('/departments',{headers:{
            "x-auth":localStorage.getItem('authToken')
        }})
        .then((response)=>{
             console.log(response.data)
          const departments=response.data
          dispatch(ListDepartments(departments))
        })
    }
}

export const AddDepartment=(department)=>{
    return {type:'ADD_DEPARTMENT',payload:department}
}

export const startAddDepartments=(department)=>{
    return(dispatch)=>{
        axios.post('/departments',{name:department},{headers:{
            "x-auth":localStorage.getItem('authToken')
        }})
        .then((response)=>{
           const department=response.data
           dispatch(AddDepartment(department))
        })
    }
}

export const RemoveDepartment=(department)=>{
    return {type:'REMOVE_DEPARTMENTS',payload:department}
}

export const startRemoveDepartments=(id)=>{
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{headers:{
            "x-auth":localStorage.getItem('authToken')
        }})
        .then((response)=>{
            const department=response.data
            console.log(response.data)
            dispatch(RemoveDepartment(department))
        })
    }
}

export const EditDepartment=(department)=>{
    return{type:'EDIT_DEPARTMENTS',payload:department}
}

export const startEditDepartment=(department,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`/departments/${id}`,{name:department},{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
            const department=response.data
            dispatch(EditDepartment(department))
            redirect()
        })
    }
}