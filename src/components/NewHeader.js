import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {
  Link
} from "react-router-dom";
import { UserInfo } from './UserInfo';

const ResponsiveAppBar = () => {

  return (
    <AppBar style={{ background: '#DAA520', position: 'sticky' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>PrivateSchool</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link to="/teachers" style={{ color: 'inherit', textDecoration: 'none' }} >Teachers</Link>
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Students
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Subjects
            </Button>
          </Box>

          {/* <UserInfo/> */}

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
