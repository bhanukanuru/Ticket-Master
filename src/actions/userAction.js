import axios from '../config/axios'
export const startRegister=(formData,redirect)=>{
    return()=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
                redirect()
                // props.history.push('/users/login')
            }
        })
    }
}
export const setUser=(user)=>{
    return {type:'SET_USER',payload:user}
}

export const startSetUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
         })
         .then((response)=>{
             //console.log(response.data)
             const user=response.data
             dispatch(setUser(user))
            // redirect()
         })
    }
}

export const startLogin=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/login',formData)
        .then((response)=>{
            console.log(response.data)
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)
            }
            else{
                localStorage.setItem('authToken',response.data.token)
                console.log(response.data.token)
                // redirect()
               axios.get('/users/account',{
                   headers:{
                       'x-auth':localStorage.getItem('authToken')
                   }
                })
                .then((response)=>{
                    //console.log(response.data)
                    const user=response.data
                    dispatch(setUser(user))
                    redirect()
                })
            }
        })
    }
}

export const removeUser=()=>{
    return{type:'REMOVE_USER'}
}
export const startLogout=(redirect)=>{
    return(dispatch)=>{
        axios.delete('/users/logout',{headers:{
            'x-auth':localStorage.getItem('authToken')

        }})
        .then((response)=>{
            if(response.data.notice){
               
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                redirect()
               // props.history.push('/users/login')
            }
        })
    }
}