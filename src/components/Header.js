import React from 'react';
//import StudentsTable from './components/StudentsTable'
//import { Routes, Route, Link } from "react-router-dom";
//import AddStudent from "./components/AddStudent";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, CssBaseline} from '@material-ui/core';
import { Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
//import { textAlign } from '@mui/system';
//import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const useStyles = makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        height:"100vh",
        textAlign:"center",
    },
  appbar: {
   
   background: 'none' ,
   
  },
  icon :{
      color:"#fff",
      fontSize:"2rem",
  },
  container:{
      textAlign:"center",
    },
  appbarTitle:{
      width:'70%',
      margin:"o auto ",
  },
  appbarTitle:{
      flexGrow:'1',
  },
  goDown:{
       color:"#5AFF3D",
       fontSize:"7rem",

},
  title:{
  color:"#fff",
fontSize:"4rem",},

}));  
  function Header() {
  
const classes = useStyles();

  // const [students, setStudents] = React.useState([{ name: 'John', surname: 'Doe', group: '11'}]);

  // const addStudent = (n, surname, group) => {
  //   setStudents([...students, {name: n, surname, group}])
  // }

  return (
    
    // <Link to="/">All student</Link>
    // <Link to="/add-student">Add student</Link>
    //  <Routes>
    //     <Route path="/" element={<StudentsTable students={students} />} />
    //     <Route path="/add-student" element={<AddStudent addStudent={addStudent}/>} />
    //   </Routes>
    // </>

   
     <div className={classes.root}>
         <AppBar className={classes.appbar} elevation = {0}>
             <Toolbar className = {classes.appbarWrapper }>
             <h1 className={classes.appbarTitle}>Your Dream High School.</h1>
             <IconButton>
                 <SortIcon className={classes.icon}/>
                 </IconButton>
             </Toolbar>
         </AppBar>
         <Collapse in ={true}>
       <div className={classes.container}><h1 className={classes.title}>Welcome To<br/> Your Dream High School</h1>
       <IconButton><ExpandMoreIcon className={classes.goDowm}/></IconButton></div>
       </Collapse>
      </div>
  );
}


export default Header;
