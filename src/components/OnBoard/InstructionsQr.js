import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

export default class Instructions extends Component {

  constructor(props){
    super(props)
    this.state = {
        delay: 100,
        result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
}
handleScan(data){
    this.setState({
        result: data,
    })
}
handleError(err){
    console.error(err)
}
openImageDialog() {
    this.refs.qrReader1.openImageDialog()
}
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
  }
    return (
      <div className='' >
              <div className=''>
                <h6 className='mt-4'>Escanea el código QR que hay en la mesa</h6>
              </div>
              <div>
                <QrReader ref="qrReader1"
                    delay={300}
                    previewStyle={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    legacyMode={true} 
                />
                <p>{this.state.result}</p>
                <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
            </div>
      </div>
    )
  }
}
 




