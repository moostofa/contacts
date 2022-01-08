import React from 'react';
import {
  AppBar, CssBaseline, Toolbar, Typography, TextField,
} from '@mui/material';

function Navbar() {
  return (
    <AppBar sx={{ maxHeight: 75 }} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5">
          Contacts
        </Typography>
        <TextField placeholder="Search contacts..." />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
