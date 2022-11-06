import React from 'react';
import ImageCard from './Imagecard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    justifyContent:"center",
  },
}));  

function SchoolInfo() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageCard/> 
    </div>  
  );
}


export default SchoolInfo;
