import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Box, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EditButton from './EditButton';

function Results({ users }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={5}
      marginTop={5}
    >
      {
        users.map((user) => (
          <Card sx={{ width: 300 }} key={user.username}>
            <CardMedia
              component="img"
              height="150"
              image="https://27tcx2gd0ls2aa2s03qr8l8n-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
              alt="Profile picture"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                { user.name }
              </Typography>
              <Typography variant="body1">
                Email:
                {' '}
                { user.email }
              </Typography>
              <Typography variant="body2">
                Phone:
                {' '}
                { user.phone }
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
              <Button startIcon={<CallIcon />} size="small" variant="contained" color="success">Call</Button>
              <EditButton user={user} />
            </CardActions>
          </Card>
        ))
      }
    </Box>
  );
}

// unsure if this is correct but eslint keeps throwing warning for not defining proptypes
Results.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Results;
