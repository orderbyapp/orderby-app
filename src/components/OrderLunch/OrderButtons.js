import React, { Component } from 'react'
import Button from '../Utilities/Button'
import { Redirect } from 'react-router-dom'
import TableService from '../../services/TableService'

class OrderButtons extends Component {

    state = {
      table : {},
      redirect : false
    }
    editMenu = () => {
      this.props.onClickEdit()
    }
    closeCard = () => {
      this.props.closeCard()
    }
  
    updateOrder = () => {
      const order = {
        products : this.state.table.orders
      }
      TableService.updateOrder(this.state.table.orderId, order )
        .then(response => response.data)
        this.setState({
          redirect :  true
        })
    }
  
    postOrder = () => {
      const order = {
        table : this.state.table.id,
        products : this.state.table.orders
      }
      TableService.newOrder(order.table, order)
        .then(response => {
          this.setState({
            table : {
              ...this.state.table,
              orderId : response.data.id
            }
          })
          TableService.updateTable(this.state.table);
          this.setState({
            redirect :  true
          })
        })
    }
  
    componentDidMount = () => {
      this.tableSubscription = TableService.onTableChange().subscribe(table =>
        this.setState({ table: table}))
      };
  
    componentWillUnmount() {
      this.tableSubscription.unsubscribe();
    }

    render() {
      if(this.state.redirect){
        return(
        <Redirect to='/payment'/>
        )
      } else {
        return (
            <div className='absolute-buttons-order'>
                {!this.props.noProducts && this.props.editing && <Button
                    color='btn btn-linear-white-bg-trans '
                    text='Dejar de editar'
                    width='w-100'
                    onClick={this.editMenu}/>}
                {!this.props.noProducts && !this.props.editing && <Button
                    color='btn btn-linear-white-bg-trans'
                    text='Editar pedido'
                    width='w-100'
                    onClick={this.editMenu}/>}
                {!this.props.noProducts && <div className="strike mt-2">
                    <span className='white'>o</span>
                </div>}
                {!this.props.noProducts && <Button
                    color='btn btn-pink-color-white '
                    width='w-100'
                    text='Pagar por la app'
                    onClick={
                      !this.state.table.orderId ? this.postOrder : this.updateOrder
                      }/>}
            </div>
        );
                    }
    }
}

export default OrderButtons;