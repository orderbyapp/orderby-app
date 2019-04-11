import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

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
      <div>
        <QrReader
          ref="qrReader1"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          // legacyMode="true"
          />
        <a href={this.state.result}>{this.state.result}</a>
        {/* <input type="button" value="Submit QR Code" onClick={this.openImageDialog} /> */}
      </div>
    )
  }
}
 
export default Instructions




