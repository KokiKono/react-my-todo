import React from 'react';
import { withStyles } from 'material-ui/styles';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import ToDoInput from '../../../Components/ToDoInput';
import ToDoList from '../../../Components/ToDoList';
import ToDoActionDialog from '../../../Components/ToDoActionDialog';
import * as TodoActions from '../../../Actions';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import AddToDoSection from '../AddToDoSection';

import {Switch,Route,Link,withRouter} from 'react-router-dom';
import Detail from './ToDoDetail/';

const styles = theme => ({
  addFab:{
    position:'fixed',
    right:'5%'
  }
})
class ToDoListSection extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isOpen:false
    };
  }


  render(){
    const {match} = this.props;
    return(
      <Switch>
        <Route exact path={`${match.url}`} render={()=>( this.renderToDoList() )}/>
        <Route path={`${match.url}/:id`} component={Detail}/>
      </Switch>
    )
  }
  renderToDoList(){
    return(
      <div>
        <ToDoList
          todos={this.props.todos}
          onClickItem={(item)=>{
            const {match} = this.props;
            this.props.history.push(`${match.url}/${item.id}`)
          }}
          handleDelete={(item)=>{
            this.props.actions.deleteTodo(item.id)
          }}/>
        <ToDoActionDialog
          isOpen={this.state.isOpen}
          handleEdit={()=>{
            this.setState({isOpen:false});
          }}
          handleDelete={()=>{
            this.setState({isOpen:false});
            this.props.actions.deleteTodo(this.props.actionToDo.id);
          }}
          hanleCancel={()=>{
            this.setState({isOpen:false});
          }}/>
          <AddToDoSection
            handleSave={this.props.actions.addTodo}/>
      </div>
    )
  }
}

const MainSectionWrapped = withStyles(styles)(ToDoListSection);

const mapStateToProps = state => ({
  todos:state.todos,
  actionToDo:state.actionToDo
});

const mapDispatchToProps = dispatch =>({
  actions:bindActionCreators(TodoActions,dispatch)
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainSectionWrapped));
