import React,{Fragment} from 'react'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import './Slidemenu.css'
 
export default function MyDropdown(props) {
  return (
    <Fragment>
        <SlideDown className={'my-dropdown-slidedown fade-in'}>
          {props.open ? props.children : null}
        </SlideDown>
    </Fragment>
    
  )
}