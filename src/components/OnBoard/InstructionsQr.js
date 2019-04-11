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
    if(data !== null){
      this.setState({
        result: data,
      })
    }
   
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
      marginBottom: 100,
    }
 
    return(
      <div className='bg-qr'>
      <div className='container qr-item'>
        <h6 className='pt-4 mb-4 white enjoyed'>Escanea el <strong>código QR</strong> que hay sobre la mesa para comenzar</h6>  
        <div className='container '>   
        <QrReader
          ref="qrReader1"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          // legacyMode="true"
          />
          
          <a className='btn w-100 btn-pink mt-4 mb-4 white enjoyed result-qr' href={this.state.result}>Empieza a pedir!</a>
          <p className='white'>{this.state.result}</p>
          </div>
        {/* <input type="button" value="Submit QR Code" onClick={this.openImageDialog} /> */}
        </div>

    </div>
    )
  }
}
 
export default Instructions




