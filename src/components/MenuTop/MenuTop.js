import React, { Component, Fragment } from 'react'
import './MenuTop.css'
import Slidemenu from '../Slidemenu/Slidemenu'
import OrderLunch from '../OrderLunch/OrderLunch'
import ContentOrder from '../OrderLunch/ContentOrder'
import { withRouter } from 'react-router-dom'
import TableService from '../../services/TableService'

class MenuTop extends Component {


  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      order : {
        open : false
      },
      color: 'transparent',
      position:  window.scrollY,
      orders : []
    }
}

  orderVisibility = () => {
    this.state.table.orders.length > 0 &&
      this.setState({
        order : {
          ...this.order,
          open: this.state.order.open ? false : true}
      })
  }

  onOrderVisibility = () => {
      this.setState({
        order : {
          ...this.order,
          open: this.state.order.open ? false : true}
      })
  }

  onClickBack = () =>{
    this.props.history.goBack() 
  }

  onScroll = () => {
    let positionScroll = window.scrollY;
    this.setState({
      position: positionScroll
    }, () => { if(this.state.position >= 50){this.setState({color: 'pink-nav'})
      } else { this.setState({color: 'transparent'})}
    })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', this.onScroll, false);
    this.tableSubscription = TableService.onTableChange().subscribe(
      table => this.setState({ 
        table: table,
      })
    );
  }

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
      window.removeEventListener('scroll', this.onScroll, false);
  }

  render() {
    const { table } = this.state
    const getTableNum = () => {
      if (table) {
        return table.orders.length
      } else {
        return 0;
      }
    }
    return (
      
      <div>  
      <div className={`container-menu ${this.state.color} ${this.props.colorFix ? 'pink-nav' : ''} margin-top-16`}>
        <div className='container padding-menu-nav'>
          <nav className='top-menu'>
          {this.props.history.location.pathname !== '/board' ?  
          <div onClick={this.onClickBack} className='d-flex'><span className="material-icons white" >arrow_back</span></div> :
          <div><span className="material-icons pink" >arrow_back</span></div>}  
           <div className='flex-and-align'> 
           <span className="step-bg">{getTableNum()}</span> 
           <span className="material-icons white">
           <a onClick={this.orderVisibility}>shopping_cart</a></span></div>
          </nav>
        </div>
      </div>
       <Slidemenu open={this.state.order.open} >
          <Fragment>
            <OrderLunch>
            {this.state.order.open && 
             <ContentOrder visibilityMenu={this.onOrderVisibility} table={this.state.table}></ContentOrder>
              }
            </OrderLunch>
          </Fragment>
        </Slidemenu>
      </div>
    );
  }
}
export default withRouter( MenuTop);
