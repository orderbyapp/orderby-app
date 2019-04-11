import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import './InstructionsQr.css'
class Instructions extends Component {

  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
    // this.openImageDialog = this.openImageDialog.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  // openImageDialog() {
  //   this.refs.qrReader1.openImageDialog()
  // }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div className='bg-payment'>
      <div className='container payment-item'>
        <h6 className='mt-4 mb-4 white enjoyed'>Escanea el código QR que hay en la mesa</h6>  
        <div className='container payment-item'>   
        <QrReader
          ref="qrReader1"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          // legacyMode="true"
          />
          

        <a className='mt-4 mb-4 white enjoyed result-qr' href={this.state.result}>{this.state.result}</a>
          </div>
        {/* <input type="button" value="Submit QR Code" onClick={this.openImageDialog} /> */}
        </div>
    </div>
    )
  }
}
 
export default Instructions




