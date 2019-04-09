import React, { Component} from 'react';
import { Link } from 'react-router-dom'

// Images imported from sources //

import doggo from '../../sources/perritocalientecliente@2x.png'
import orange from '../../sources/path-7.svg'
import girl from '../../sources/clienteconpantalla@3x.png'
import yellow from '../../sources/path-6.svg'
import blue from '../../sources/oval.svg'
import text from '../../sources/logo.svg'
import './Intro.css'

// Hay que crear un observable donde venga: Restaurante, Mesa, Menu y Camarero
// Despues que se haya creado el observable, hay que hacer un set-time-out y que redirija a las promociones, al primer board.

class Intro extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro-bg overflow-x-hidden">
                  <img alt='path-orange' src={orange} className="path-7 scale-in-bl"/>
                  <img alt='doggy-intro' src={doggo} className="doggo slide-in-blurred-bl"/>
                  <img alt='girl-intro' src={girl} className="girl slide-in-blurred-right"/>
                  <img alt='yellow-intro' src={yellow} className="path-6 scale-in-tr"/>
                  <img alt='blue-intro' src={blue} className="path-3 scale-in-left "/>
                  <img alt='text-intro' src={text} className="text-intro-logo flip-in-diag-2-br"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Intro;