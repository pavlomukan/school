import React from 'react';
import ImageCard from './Imagecard';
import { makeStyles } from '@material-ui/core/styles';
import AddStudent from './AddStudent';
import StudentsTable from './StudentsTable';
const useStyles = makeStyles((theme)=>({
    root:{
        
        height:"100vh",
        textAlign:"center",
    },
  
}));  
  function SchoolInfo() {
  
const classes = useStyles();

   const [students, setStudents] = React.useState([{ name: 'John', surname: 'Doe', group: '11'}]);

  const addStudent = (n, surname, group) => {
    setStudents([...students, {name: n, surname, group}])
   }

  return (


   
     <div className={classes.root}>
         <ImageCard/> 
      </div>
  );
}


export default SchoolInfo;
