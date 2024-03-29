import React from 'react';
import {TextField, Box, Grid, MenuItem, Button } from '@mui/material' ;
import axios from 'axios';

export default function AddTeacher() {

    const teacherGroups = ['English', 'Math', 'Sciense', 'Geography', 'Art', 'PE', 'Biology'];

    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [subject, setSubject] = React.useState('');

    const addTeacher = () => {
      axios.post('http://localhost:4000/teacher',{name, surname, subject});
    }

    return (
    <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            >
        <TextField
            id="outlined-basic"

            label=" Teacher Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined" />
        <TextField id="outlined-basic" label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          helperText="Please select your subject"
        >
            {
                teacherGroups.map(i => (   <MenuItem key={i} value={i}>
                {i}
              </MenuItem>))
            }
        </TextField>

            <Button variant="contained" onClick={addTeacher}>Add teacher</Button>

        </Grid>
      </Box>
    );
  }
