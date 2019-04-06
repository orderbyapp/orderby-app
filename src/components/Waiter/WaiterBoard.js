import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { withAuthConsumer } from '../../contexts/AuthStore'
import { authService } from '../../services'
import TableItem from './TableItem';


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
  }

  componentWillUnmount() {   
    this.userSubscription.unsubscribe();
  }

  render() {
    console.log("state",this.state)
    if(this.state.waiter.table){
      const {table} = this.state.waiter
      const renderCards =  table.map( table => {
        console.log(table)
        return <TableItem key={table}/>
       })
       return (
         <div>
         <h1>mesas</h1>
         <div className='container-top-margin'>
         <div className='container'>
         {renderCards}
         </div> 
       </div>
       </div>
       );
    } else { return null}
  }
}
export default withRouter(withAuthConsumer(WaiterBoard))