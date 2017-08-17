'use strict';

import React from 'react';
import {
  List,
  ListItem
} from 'material-ui/List';

export default class ToDoList extends React.Component{

  render(){
    return(
      <List>
        {this.renderToDoItem(this.props.todos)}
      </List>
    )
  }

  renderToDoItem(todos){
    console.log(todos);
    return todos?todos.map((item,index,array)=>{
      return (
        <ListItem
          primaryText={`${item.text}`}
          secondaryText="Always interrupt"
        />
      )
    }):null;
  }
}
