import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {startSetUser} from './actions/userAction'
import {startSetCustomers} from './actions/customersAction'
import {startSetDepartments} from './actions/departmentsAction'
import {startSetEmployee} from './actions/EmployeeAction'
import {startGetTickets} from './actions/ticketsAction'

const store=configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
    store.dispatch(startSetDepartments())
    store.dispatch(startSetEmployee())
    store.dispatch(startGetTickets())
}
const jsx=(
    <Provider store={store}>
        <App/>

    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))
// ReactDOM.render(jsx,document.getElementById('root'))