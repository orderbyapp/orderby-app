import React, { Component } from 'react';
import './TableItem.css'
import {Link} from 'react-router-dom'


class TableItem extends Component {
  state = {
    table:{}
  }

  

  render() {
    console.log("table: ", this.props)
    return (
      <div>
        <Link to={{ 
         pathname: `/menulist/${this.props.name}`,
         state: {
           image: this.props.image0,
           category: this.props.title
          }
        }}>
        <div className="card mt-3 category-card-food">
          
        <div className='background-card'></div>
          <div className="card-body text-left pt-5 mt-5 body-category-info">
        
            <h4 className='pb-0 mb-0'>{this.props.title}</h4>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}

export default TableItem;