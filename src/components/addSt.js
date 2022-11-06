import React from 'react';
import {TextField, Box, Grid, MenuItem, Button } from '@mui/material';
import StudentsTable from './components/StudentsTable'
import { Routes, Route, Link } from "react-router-dom";
import AddStudent from "./components/AddStudent";



function addSt() {
  
   
    
       const [students, setStudents] = React.useState([{ name: 'John', surname: 'Doe', group: '11'}]);
    
       const addStudent = (n, surname, group) => {
        setStudents([...students, {name: n, surname, group}])
      }
    
      return (
        <>
         <Link to="/">All student</Link>
         <Link to="/add-student">Add student</Link>
         <Routes>
            <Route path="/" element={<StudentsTable students={students} />} />
            <Route path="/add-student" element={<AddStudent addStudent={addStudent}/>} />
           </Routes>
         </>
    
       
        
      );
    }
    
    
    export default addSt;
    