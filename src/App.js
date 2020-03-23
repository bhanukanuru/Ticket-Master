import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/Home'
import Account from './components/Account'
import CustomersList from './components/customers/List'
import CustomersShow from './components/customers/Show'
import CustomerNew from './components/customers/New'
import CustomerEdit from './components/customers/Edit'
import DepartmentList from './components/Departments/List'
import DepartmentShow from './components/Departments/Show'
import DepartmentEdit from './components/Departments/Edit'
import EmployeesList from './components/Employees/List'
import EmployeesShow from './components/Employees/Show'
import EmployeesNew from './components/Employees/New'
import EmployesEdit from './components/Employees/Edit'
import TicketList from './components/Tickets/List'
import TicketNew from './components/Tickets/New'
import TicketShow from './components/Tickets/Show'
import TicketEdit from './components/Tickets/Edit'
import {startLogout} from './actions/userAction'
//import {connect} from 'react-redux'


function App(props){
  const handleLogout=()=>{
    const redirect=()=>{
      console.log('Bhanu')
      props.history.push('/users/login')
    }
    props.dispatch(startLogout(redirect))   

  }
  return(
  <BrowserRouter> 
   
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <h2>Ticket Master</h2>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

         {Object.keys(props.user).length===0?(
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink href="/users/register">Register</NavLink>
               </NavItem>

               <NavItem>
                <NavLink href="/users/login">Login</NavLink>
               </NavItem>
            </Nav>

          </div>
        ):(
          <div>
            <Nav tabs>
            <NavItem>
                <NavLink href="/">Home</NavLink>
               </NavItem>
              <NavItem>
                <NavLink href="/users/account">Account</NavLink>
               </NavItem>
              <NavItem>
                <NavLink href="/customers">Customers</NavLink>
               </NavItem>

               <NavItem>
                <NavLink href="/departments">Departments</NavLink>
               </NavItem>

               <NavItem>
                <NavLink href="/employees">Employees</NavLink>
               </NavItem>

               <NavItem>
                <NavLink href="/tickets">Tickets</NavLink>
               </NavItem>
               
               <NavItem>
                <NavLink href="/users/logout" onClick={()=>{handleLogout()}}>Logout</NavLink>
               </NavItem>
                </Nav>  
          </div>
        )} 
    </nav>
       
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/users/register" component={Register} />
        <Route path="/users/login" component={Login}/>
        <Route path="/users/account" component={Account}/>
        <Route path="/customers" component={CustomersList} exact={true}/>
        <Route path="/customers/new" component={CustomerNew}/>
        <Route path="/customers/edit/:id" component={CustomerEdit}/>
        <Route path="/customers/:id" component={CustomersShow} />
        <Route path="/departments" component={DepartmentList} exact={true}/>
        <Route path="/departments/edit/:id" component={DepartmentEdit} />
        <Route path="/departments/:id" component={DepartmentShow}/>
        <Route path="/employees" component={EmployeesList} exact={true}/>
        <Route path="/employees/new" component={EmployeesNew} />
        <Route path="/employees/edit/:id" component={EmployesEdit}/>
        <Route path="/employees/:id" component={EmployeesShow}/>
        <Route path="/tickets" component={TicketList} exact={true}/>
        <Route path="/tickets/new" component={TicketNew}/>
        <Route path="/tickets/edit/:id" component={TicketEdit}/>
        <Route path="/tickets/:id" component={TicketShow}/>
      </Switch>  
    </div>
   
  </BrowserRouter>
   
  )
}
const mapStateToProps=(state)=>{
   return {
      user:state.user
    }
}
export default connect(mapStateToProps)(App)