import React from 'react'
import { withTableConsumer } from '../contexts/TableStore';
import { Redirect, Route } from 'react-router-dom';

const ThanksRoute = ({component: Component, isTable, isPayed, ...rest}) => {
  if (!isTable()) return <Redirect to="/instructions" />;
   if (!isPayed()) return <Redirect to="/payment" />;
  return (
    <Route {...rest} render={ (props) => {
        return (<Component {...props} />);
    }}/>
  )
}

export default withTableConsumer(ThanksRoute);