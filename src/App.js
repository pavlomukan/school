import React from 'react';
import StudentsTable from './components/StudentsTable'
import { Routes, Route, Link } from "react-router-dom";
import AddStudent from "./components/AddStudent";




function App() {
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
   
    // <div>
    //   {
    //     people.map(i => <Welcome name={i.name} surname = {i.surname}/>)
    //   }
    //   <Buttons />
    //   <Table />
    // </div>
  );
}


export default App;
