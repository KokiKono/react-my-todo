import React from 'react';
import { Route,Switch } from 'react-router-dom';
import ToDoListSection from './ToDoList/';
import Home from './Home';

class MainSection extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isOpen:false
    };
  }

  render(){
    return(
        <div>
          <Switch>
            <Route
              exact
              path='/'
              component={Home} />
            <Route
              path={`/todo_list`} component={ToDoListSection} />
          </Switch>
        </div>
    )
  }
}

export default MainSection;
