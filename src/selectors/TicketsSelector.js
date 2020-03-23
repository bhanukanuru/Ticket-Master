export const findTickets=(tickets,id)=>{
       return tickets.find(ticket=>ticket._id==id) 
}