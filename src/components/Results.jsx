import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Box, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EditIcon from '@mui/icons-material/Edit';

function Results({ users }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={5}
    >
      {
        users.map((user) => (
          <Card sx={{ width: 300 }} key={user.username}>
            <CardMedia
              component="img"
              height="150"
              image="https://www.bigtopvoice.com/wp-content/uploads/2019/02/karlo-boni-1146386-unsplash.jpg"
              alt="Profile picture"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                { user.name }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email:
                {' '}
                { user.email }
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

// unsure if this is correct but eslint keeps throwing warning for not defining proptypes
Results.propTypes = {
  users: PropTypes.shape([{}]).isRequired,
};

export default Results;
