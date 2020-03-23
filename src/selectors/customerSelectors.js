export const findCustomers=(customers,id)=>{
    return customers.find(customer=>customer._id==id)
}