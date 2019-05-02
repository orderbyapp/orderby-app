import React, { Component } from 'react'
import doggo from '../../sources/perritocalientecliente@2x.png'
import orange from '../../sources/path-7.svg'
import girl from '../../sources/clienteconpantalla@3x.png'
import yellow from '../../sources/path-6.svg'
import blue from '../../sources/oval.svg'
import text from '../../sources/OrderBYManager.svg'
import manager from '../../sources/gerentecarlos.png'
import './Intro.css'
import {Redirect} from 'react-router-dom'

class IntroManager extends Component {
    state = {
        timeout: false
    }

    redirectHome = () => {
        setTimeout(() => {
            this.setState({
              timeout: true
            })
           }, 3000)  
    }
    render() {
        if(!this.state.timeout){
            return (
                <React.Fragment>
                    <div activeRedirect={this.redirectHome()}className="intro-bg-manager overflow-x-hidden">
                      <img alt='doggy-intro' src={manager} className="manager slide-in-blurred-bl"/>
                      <img alt='text-intro' src={text} className="text-intro-logo flip-in-diag-2-br"/>
                    </div>
                </React.Fragment>
            );

        } else {
            return (
                <Redirect to='/managerlogin'></Redirect>
            )
        }
       
    }
}

export default IntroManager;