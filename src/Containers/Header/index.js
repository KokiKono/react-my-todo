import React from 'react';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

class Header extends React.Component{
  render(){
    const classes = this.props.classes;
    console.log(this);
    return(
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              React ToDo
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

const HeaderWrapped = withStyles(styles)(Header);
export default HeaderWrapped;
