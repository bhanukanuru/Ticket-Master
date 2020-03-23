import React from 'react'
import {Chart} from 'react-google-charts'
import {connect} from 'react-redux'

function PieCharts(props){
    const high = props.tickets.filter(ticket=>!ticket.isResolved && ticket.priority == "High").length
    const medium = props.tickets.filter(ticket=>!ticket.isResolved && ticket.priority == "Medium").length
    const low = props.tickets.filter(ticket=>!ticket.isResolved && ticket.priority == "Low").length
    return(
      <div className="container">
         <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Priority', 'Has per customer'],
                    ['high', high],
                    ['medium', medium],
                    ['low', low]
                   
                ]}
                options={{
                    title: 'Ticket Priority',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
      </div>  
    )
}

const mapStateToProps=(state)=>{
    return{
        tickets:state.tickets
    }
}

export default connect(mapStateToProps)(PieCharts)