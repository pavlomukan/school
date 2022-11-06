import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import SchoolInfo from '../components/SchoolInfo';


const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: '150vh',
    backgroundImage: `url("https://wallpapercave.com/wp/wp2017235.jpg")`  ,
    backgroudRepeat: "no-repeat",
    marginBottom: '5%'
  },
  title:{
    paddingTop: '5%',
    color:"#fff",
    fontSize:"4rem",
  },
  container: {
    // marginTop: "50vh",
    textAlign:"center",
  },

}));

function MainPage() {

const classes = useStyles();

  return (
    <>
     <div className={classes.root}>

        <div className={classes.container}>
          <h1 className={classes.title}>Welcome To<br/> Your Dream High School</h1>
        </div>
      </div>

      <SchoolInfo/>
    </>
  );
}


export default MainPage;
