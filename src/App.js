import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToDoInput from './Components/ToDoInput';
import ToDoList from './Components/ToDoList';

import * as TodoActions from './Actions';

class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"/>
          <ToDoInput
            onSave={this.props.actions.addTodo}/>
          <ToDoList
            todos={this.props.todos}/>
          </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  todos:state.todos
});

const mapDispatchToProps = dispatch =>({
  actions:bindActionCreators(TodoActions,dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
