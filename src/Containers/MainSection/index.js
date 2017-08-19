import React from 'react';
import { withStyles } from 'material-ui/styles';
import ToDoInput from '../../Components/ToDoInput';
import ToDoList from '../../Components/ToDoList';
import ToDoActionDialog from '../../Components/ToDoActionDialog';
import * as TodoActions from '../../Actions';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import AddToDoSection from './AddToDoSection';
const styles = theme => ({
  addFab:{
    position:'fixed',
    right:'5%'
  }
})
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
        <ToDoList
          todos={this.props.todos}
          onClickItem={(item)=>{
            this.setState({
              isOpen:true
            });
            this.props.actions.setActionToDo(item.id,item.completed,item.text);
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

const MainSectionWrapped = withStyles(styles)(MainSection);

export default MainSectionWrapped;
