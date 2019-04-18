import React, { Component } from 'react'
import OrderItem from './OrderItem'
import TotalCount from './TotalCount'
import OrderButtons from './OrderButtons'
import TableService from '../../services/TableService'

class ContentOrder extends Component {
  state = {
    order : {
      open : false
    },
    orders :[], 
    table: null,
    editing: false,
    noProducts : false
  }

  payCardVisibility = () => {
      this.setState({
        order : {
          open: this.state.order.open ? false : true}
      })
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table })
  )};

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }

  onClickEdit = () => {
    this.setState({
      editing :  this.state.editing ? false : true
    })
  }

  deleteProduct = (name) => {
    const newTable = {
      ...this.state.table,
      orders :  this.state.table.orders.filter(order => order.title !== name)
    };
    this.setState({
      noProducts : newTable.orders.length === 0 ? true : false
    })
    TableService.updateTable(newTable);
  }

  render() {
    return (
      <div>
        <div className='pt-4'>
          <div className='button-close-div mb-4'>
            <h5 className='pedido-title'>Tu pedido</h5>
            <span onClick={this.props.visibilityMenu} className="material-icons white close-menu-content">clear</span>
          </div>
          <div className='over-flow-order'>
            <OrderItem {...this.state.table} delete={this.deleteProduct} editing={this.state.editing}></OrderItem>
          </div>
            { !this.state.noProducts && <TotalCount {...this.state.table}></TotalCount>}
            { this.state.noProducts && <h5 className='white'>Comienza a añadir productos</h5>}
          <div >
            <OrderButtons onClickEdit={this.onClickEdit} noProducts={this.state.noProducts}  visibilityMenuCard={this.payCardVisibility} editing={this.state.editing}></OrderButtons>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentOrder;