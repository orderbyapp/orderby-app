import React from 'react'
import { withTableConsumer } from '../contexts/TableStore';
import { Redirect, Route } from 'react-router-dom';

const TableRoute = ({component: Component, isTable, ...rest}) => {
  if (!isTable()) return <Redirect to="/" />;
  return (
    <Route {...rest} render={ (props) => {
        return (<Component {...props} />);
    }}/>
  )
}

export default withTableConsumer(TableRoute);