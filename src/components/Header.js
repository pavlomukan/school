import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, CssBaseline} from '@material-ui/core';
import { Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const useStyles = makeStyles((theme)=>({
  root: {
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center",
  },
  appbar: {
    background: '#DAA520',
  },
  icon: {
    color:"#fff",
    fontSize:"2rem",
  },
  container: {
    textAlign:"center",
  },
  appbarTitle:{
    width:'70%',
  },
  appbarTitle:{
    flexGrow:'1',
  },
  goDown:{
    // color:"#5AFF3D",
    fontSize:"7rem",
  },
  

}));  



function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation = {0}>
        <Toolbar className = {classes.appbarWrapper }>
        <h1 className={classes.appbarTitle}>Your Dream High School.</h1>
        <IconButton>
          <SortIcon className={classes.icon}/>
        </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;
