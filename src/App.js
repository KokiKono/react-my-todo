import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainSection from './Containers/MainSection/';
import Header from './Containers/Header/';
import { BrowserRouter as Router } from 'react-router-dom';
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
          <Router>
            <div>
              <Header/>
              <MainSection/>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
