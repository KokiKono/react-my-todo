import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as TodoActions from './Actions';
import MainSection from './Containers/MainSection/';
import Header from './Containers/Header/';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen:false
    }
  }
  render(){
    return(
      <MuiThemeProvider>
        <div>
          <Header/>
          <MainSection
            {...this.props}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  todos:state.todos,
  actionToDo:state.actionToDo
});

const mapDispatchToProps = dispatch =>({
  actions:bindActionCreators(TodoActions,dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
