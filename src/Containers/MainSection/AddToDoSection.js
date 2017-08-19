import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Dialog,{ DialogTitle,DialogActions,DialogContent,DialogContentText } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  addFab:{
    position:'absolute',
    right:'20px'
  },
  addDialog:{

  }

});

class AddToDoSection extends React.Component{

  constructor(props){
    super(props);
    this.state={
      isOpen:false,
      text:''
    }
  }

  render(){
    const classes = this.props.classes;
    return(
      <div>
        <Button
          fab
          color='primary'
          aria-label="add"
          className={classes.addFab}
          onClick={()=>{
            this.setState({isOpen:true});
          }}>
          <AddIcon/>
        </Button>
        <Dialog
          open={this.state.isOpen}
          onRequestClose={()=>{this.setState({isOpen:false})}}
          className={classes.addDialog}
        >
          <DialogTitle>{"Add ToDo"}</DialogTitle>
          <TextField
            label="ToDo Name"
            fullWidth
            autoFocus
            onChange={(e)=>{
              this.setState({text:e.target.value});
            }}
          />
          <DialogActions>
            <Button
              color='primary'
              onClick={()=>{
                this.setState({
                  isOpen:false
                });
                this.props.handleSave?this.props.handleSave(this.state.text):null;
              }}>
              Save
            </Button>
            <Button
              color='accent'
              onClick={()=>{
                this.setState({
                  isOpen:false
                });
              }}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const AddToDoSectionWrapped = withStyles(styles)(AddToDoSection);

export default AddToDoSectionWrapped;
