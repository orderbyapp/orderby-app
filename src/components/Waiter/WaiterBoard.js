import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withAuthConsumer } from '../../contexts/AuthStore'
import TableItem from './TableItem'
import { tableService, restaurantService, authService } from '../../services'
import svgTop from '../../sources/yellow-waiters.svg'
//import { initializeFirebase, askForPermissioToReceiveNotifications } from '../../push-notification'

class WaiterBoard extends Component {

  state = {
   waiter: {},
   restaurant: {}
  }
  userSubscription = undefined
  restaurantSubscription = undefined

  componentDidMount() {   
    this.userSubscription = authService.onUserChange().subscribe(
      user => this.setState({ 
        waiter: user
      }, () => 
      restaurantService.getRestaurantById(user.restaurant)
        .then(response => {this.setState({ restaurant: response })},
        err => {if(err){  
          this.setState({
            error: true
          })
        }}
      ))
    )
    tableService.getTables()
    .then(response => this.setState({
      tables: response.data
    }))

    this.restaurantSubscription = restaurantService.onRestaurantChange().subscribe(
      response => this.setState({ 
        restaurant: response
      })
    )

    // initializeFirebase();
    // askForPermissioToReceiveNotifications();
  }

  componentWillUnmount() {   
    this.userSubscription.unsubscribe();
    this.restaurantSubscription.unsubscribe();
  }


  render() {
    if(this.state.restaurant.tables){
      const {tables} = this.state.restaurant
      const renderCards =  tables.map( table => {
        return <TableItem key={table.id} table={table} status={table.state}/>
       }).reverse()
       return (
         <div>
           <img className='waiters-top-yellow' src={svgTop}></img>
            <div className='absolute-text-top-waiters text-center'>
            <h3 className='mt-3'>{this.state.restaurant.name}</h3>
          </div>
         <div className='container-top-margin mt-5'>
         <div className='container row mx-auto mt-5'>
         {renderCards}
         </div> 
       </div>
       </div>
       );
    } else { return null }
  }
}
export default withRouter(withAuthConsumer(WaiterBoard))