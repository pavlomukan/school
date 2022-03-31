import React from 'react';
//import StudentsTable from './components/StudentsTable'
//import { Routes, Route, Link } from "react-router-dom";
//import AddStudent from "./components/AddStudent";
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import SchoolInfo from './components/SchoolInfo';
import AddStudent from './components/AddStudent';
import App1 from './App1';

//import table from "./components/table"
const useStyles = makeStyles((theme)=>({
  root: {
   minHeight: '100vh',
   backgroundImage: `url("https://wallpapercave.com/wp/wp2017235.jpg")`  ,
  backgroudRepeat: "no-repeat",
  backgroundSize : "cover",
  }}));
  
function App() {
  
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
       <CssBaseline/>
       <Header/>

      <SchoolInfo/> 
      <App1/>
    
     
      </div>
  );
}


export default App;
