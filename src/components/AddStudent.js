import React from 'react';
import {TextField, Box, Grid, MenuItem, Button } from '@mui/material';

export default function AddStudent({addStudent}) {

    const studentGroups = ['11', '12', '13'];

    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [group, setGroup] = React.useState('');

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
            label="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            variant="outlined" />
        <TextField id="outlined-basic" label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={group}
          onChange={e => setGroup(e.target.value)}
          helperText="Please select your group"
        >
            {
                studentGroups.map(i => (   <MenuItem key={i} value={i}>
                {i}
              </MenuItem>))
            }         
        </TextField>

            <p>out student {name} {surname} {group} </p>

            <Button variant="contained" onClick={() => addStudent(name, surname, group)}>Add student</Button>

        </Grid>
      </Box>
    );
  }