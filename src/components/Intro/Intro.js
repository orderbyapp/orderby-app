import React, { Component} from 'react';

// Images imported from sources //

import doggo from '../../sources/perritocalientecliente@2x.png'
import orange from '../../sources/path-7.svg'
import girl from '../../sources/clienteconpantalla@3x.png'
import yellow from '../../sources/path-6.svg'
import blue from '../../sources/oval.svg'
import text from '../../sources/logo.svg'
import './Intro.css'



class Intro extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro-bg">
                  <img alt='path-orange' src={orange} class="path-7 scale-in-bl"/>
                  <img alt='doggy-intro' src={doggo} class="doggo slide-in-blurred-bl"/>
                  <img alt='girl-intro' src={girl} class="girl slide-in-blurred-right"/>
                  <img alt='yellow-intro' src={yellow} class="path-6 scale-in-tr"/>
                  <img alt='blue-intro' src={blue} class="path-3 scale-in-left "/>
                  <img alt='text-intro' src={text} class="text-intro-logo flip-in-diag-2-br"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Intro;