import React from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';

class ToDoDetail extends React.Component{
  render(){
    // const { match } = this.props;
    // const todos = this.props;
    // const todo = todos[match.params.id];
    const todo = this.props.todo;
    return(
      <div>
        <h1>ToDoDetail !!</h1>
        <ul>
          <li>{`id:${todo.id}`}</li>
          <li>{`text:${todo.text}`}</li>
          <li>{`completed:${todo.completed}`}</li>
        </ul>
        <button type='button' onClick={()=>{this.props.handleGoBack();}}>go back</button>
      </div>
    );
  }
}

export default withStyles(null)(ToDoDetail);
