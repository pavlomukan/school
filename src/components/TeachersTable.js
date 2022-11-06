import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function TeachersTable() {
  const [teachers, setTeachers] = React.useState([]);

  const getTeachers = async () => {
    const fetchedTeachers = await axios.get('http://localhost:4000/teacher')
    console.log(fetchedTeachers)

    setTeachers(fetchedTeachers.data)
  }

  React.useEffect(() => {
    getTeachers();
  }, [])

  const navigate = useNavigate();

  const onAddTeacherClick = () => navigate('/add-teacher');

  const deleteTeacher = async (id) => {
    await axios.delete(`http://localhost:4000/teacher/${id}`);
    await getTeachers()
  }
  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((i) => (
              <TableRow
                key={i.id}
              >
                <TableCell>{i.id}</TableCell>
                <TableCell>{i.name}</TableCell>
                <TableCell>{i.surname}</TableCell>
                <TableCell>{i.subject}</TableCell>
                <TableCell>
                 <Button variant="contained" color="error" onClick={() => deleteTeacher(i.id)}> x </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="warning"
        onClick={onAddTeacherClick}
        style={{ margin: '10px'}}
      >
        Add teacher
      </Button>
    </>
  );
}
