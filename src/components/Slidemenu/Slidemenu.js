import React,{Fragment} from 'react'
 
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
 
export default function MyDropdown(props) {
  return (
    <Fragment>
        <SlideDown className={'my-dropdown-slidedown'}>
          {props.open ? props.children : null}
        </SlideDown>
    </Fragment>
    
  )
}