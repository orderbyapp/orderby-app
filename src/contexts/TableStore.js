import React, { Component } from 'react'
import { tableService } from '../services/index'

const TableContext = React.createContext();

const CURRENT_TABLE_KEY = 'current-table';
let table = JSON.parse(localStorage.getItem(CURRENT_TABLE_KEY) || '{}')

class TableStore extends Component {

  state = {
    table: table,
    waiter : {}
  }
  tableChangeSubscription = {}

  componentDidMount() {
    this.tableChangeSubscription = tableService.onTableChange()
      .subscribe(table => this.setState({ table: table }));
      console.log("did ", this.state)
  }

  componentWillUnmount() {
    this.tableChangeSubscription.unsubscribe();
  }

  handleTableChange = (table) => {
    this.setState({ table: table });
  }

  isTable = () => this.state.table.id
  isPayed = () => this.state.table.payStatus === "payed"

  render() {
    return (
      <TableContext.Provider value={{
        table: this.state.table,
        isTable: this.isTable,
        isPayed: this.isPayed
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