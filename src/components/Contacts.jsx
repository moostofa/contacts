import React, { useState, useEffect } from 'react';
import {
  Button, Box, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EditIcon from '@mui/icons-material/Edit';

function Contacts() {
  const [contacts, setContacts] = useState([{}]);

  const getContacts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setContacts(users);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={5}
    >
      {
        contacts.map((contact) => (
          <Card sx={{ width: 300 }} key={contact.username}>
            <CardMedia
              component="img"
              height="150"
              image="https://www.bigtopvoice.com/wp-content/uploads/2019/02/karlo-boni-1146386-unsplash.jpg"
              alt="Profile picture"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                { contact.name }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email:
                {' '}
                { contact.email }
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <Button startIcon={<CallIcon />} size="small" variant="contained" color="success">Call</Button>
              <Button startIcon={<EditIcon />} size="small" variant="contained" color="info">Edit details</Button>
            </CardActions>
          </Card>
        ))
      }
    </Box>
  );
}

export default Contacts;
