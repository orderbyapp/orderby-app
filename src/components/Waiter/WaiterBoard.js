import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { withAuthConsumer } from '../../contexts/AuthStore'
import { authService } from '../../services'
import TableItem from './TableItem';
import { tableService } from '../../services'
import { initializeFirebase, askForPermissioToReceiveNotifications } from '../../push-notification'
import svgTop from '../../sources/yellow-waiters.svg'

class WaiterBoard extends Component {

  state = {
   waiter: {}
  }
  userSubscription = undefined

  componentDidMount() {   
    this.userSubscription = authService.onUserChange().subscribe(
      user => this.setState({ 
        waiter: user
      })
    )
    tableService.getTables()
    .then(response => this.setState({
      tables: response.data
    }))
    initializeFirebase();
    askForPermissioToReceiveNotifications();
  }

componentWillUnmount() {   
  this.userSubscription.unsubscribe();
}


  render() {

    if(this.state.tables){
      const {tables} = this.state
      const renderCards =  tables.map( table => {
        return <TableItem key={table.id} table={table}/>
       })
       return (
         <div>
           <img className='waiters-top-yellow' src={svgTop}></img>
            <div className='absolute-text-top-waiters text-center'>
            <h3 className='mt-3'>MESAS</h3>
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