import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Detail from '../../../../Components/ToDoDetail';

class ToDoDetailSection extends React.Component{
  render(){
    const { match,todos } = this.props;
    const todo = todos.find(item=>item.id == match.params.id);
    return(
      <Detail todo={todo} handleGoBack={()=>{this.props.history.goBack()}}/>
    )
  }
}

const mapStateToProps = state => ({
  todos:state.todos
});

export default withRouter(connect(mapStateToProps,null)(ToDoDetailSection));
