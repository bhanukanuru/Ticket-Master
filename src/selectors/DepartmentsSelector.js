export const findDepartments=(departments,id)=>{
    return departments.find(department=>department._id==id)
}