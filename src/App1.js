import React from 'react';
import TeachersTable from './components/TeachersTable'
import { Routes, Route, Link } from "react-router-dom";
import AddTeacher from "./components/AddTeacher";




function App1() {
  const [teachers, setTeachers] = React.useState([{ name: 'Maddyson', surname: 'Scott', subject: 'Programming'}]);

  const addTeacher = (n, surname, subject) => {
    setTeachers([...teachers, {name: n, surname, subject}])
  }

  return (
    <>
    <Link to="/">All teachers</Link>
    <Link to="/add-teacher">Add teacher</Link>
     <Routes>
        <Route path="/" element={<TeachersTable teachers={teachers} />} />
        <Route path="/add-teacher" element={<AddTeacher addTeacher={addTeacher}/>} />
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


export default App1;
