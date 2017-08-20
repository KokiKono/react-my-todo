import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
  render(){
    console.log(this);
    return(
      <div>
        <p>Welcome to ToDo React at Home!</p>
        <Link to='/todo_list'>
        ToDoList
        </Link>
      </div>
    )
  }
}

export default Home;
