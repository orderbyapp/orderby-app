
import React, { Component } from 'react'
import { tableService } from '../services/index'


const TableContext = React.createContext();

class TableStore extends Component {

  state = {
    table: {}
  }
  tableChangeSubscription = {}

  componentDidMount() {
    this.tableChangeSubscription = tableService.onTableChange()
      .subscribe(table => this.setState({ table: table }));
  }

  componentWillUnmount() {
    this.tableChangeSubscription.unsubscribe();
  }

  handleTableChange = (table) => {
    this.setState({ table: table });
  }

  render() {
    return (
      <TableContext.Provider value={{
        table: this.state.table,
      }}>
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const withTableConsumer = (Component) => {
  return (props) => (
    <TableContext.Consumer>
      {(storeProps) => <Component {...props} {...storeProps}/>}
    </TableContext.Consumer>
  )
}

export { TableContext, TableStore, withTableConsumer }