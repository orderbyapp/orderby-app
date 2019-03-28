import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { withTableConsumer } from '../../contexts/TableStore';
import { tableService } from '../../services'
import Skeleton from 'react-skeleton-loader';


class RestaurantCard extends Component {

  state = {
    imageUrl : this.props.image || 'https://cdn-3.expansion.mx/dims4/default/4738f15/2147483647/strip/true/crop/650x434+0+0/resize/800x534!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fc3%2F79%2Fcbe0f67f402085f477e72529205d%2Fth-031116-jacinta-020.jpeg',
    restaurant : {
      name: '80 Grados',
      location: 'Calle Mirallos 4, Madrid'
    }
  }


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

