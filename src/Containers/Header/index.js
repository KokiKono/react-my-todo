import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom';


const styles = ({
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

function Header({ classes }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          <Link to="/">
          React ToDo
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
Header.propTypes = {
  classes: Object,
};
Header.defaultProps = {
  classes: styles,
};

const HeaderWrapped = withStyles(styles)(Header);
export default HeaderWrapped;
