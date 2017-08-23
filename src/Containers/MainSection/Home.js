import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Welcome to ToDo React at Home!</p>
      <Link to="/todo_list">
      ToDoList
      </Link>
    </div>
  );
}
export default Home;
