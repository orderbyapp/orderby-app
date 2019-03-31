import React, { Component } from "react";
import './OrderPayed.css'

class OrderPayed extends Component {
  render() {
  
          return (
            <div className="list-object-order">
              <div className="pb-2 pt-2 border-light">
                <div>
                  <div className="">
                    <div className="image-box">
                      <img
                        className="image-shape"
                        src="/shape.png"
                      />
                    </div>
                    <div className="text-payed">
                      <h6 className="white">¡Esperamos volver a verte pronto!</h6>
                      <h6 className="light-grey">El pago se ha hecho correctamente</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          }
     
}

export default OrderPayed
