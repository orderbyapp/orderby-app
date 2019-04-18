import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { withTableConsumer } from '../../contexts/TableStore'

class RestaurantCard extends Component {

  render() {
      return (
        <div className='board-info'>
          <div className='image-enterprise' style={{backgroundImage: `url(${this.props.photo})`}} ></div>
          <h4 className='board-rest-name'>{this.props.name}</h4>
          <div className='location-div'><i className="fa fa-map-marker mr-2 pink"></i><span className='location-info'>{this.props.location}</span></div>        
          <h6 className='board-table'>- Mesa {this.props.tableNumber} -</h6>
        </div>
      );
    } 
}
export default withTableConsumer(RestaurantCard)

