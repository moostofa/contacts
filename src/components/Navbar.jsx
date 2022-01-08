import React from 'react';
import {
  AppBar, Box, CssBaseline, Toolbar, Typography, TextField,
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
        <Box marginLeft="auto">
          <h4>Profile</h4>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
