import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, FormControl, Grid, Modal, TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 0.9,
  width: 0.5,
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  p: 4,
  textAlign: 'left',
};

function EditButton({ user }) {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const displayField = ([key, value]) => (
    <Grid item xs={6}>
      <Grid item xs={2}>
        { key[0].toUpperCase() + key.slice(1) }
      </Grid>
      <Grid item xs={8}>
        <FormControl fullWidth>
          <TextField size="small" label={key} defaultValue={value} />
        </FormControl>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Button
        startIcon={<EditIcon />}
        size="small"
        variant="contained"
        color="info"
        onClick={openModal}
      >
        Edit details
      </Button>
      <Modal
        open={open}
        onClose={closeModal}
      >
        <Box sx={modalStyle}>
          <Grid container spacing={1}>
            <h1>
              Edit details for
              {' '}
              { user.name }
            </h1>
            {
            Object.entries(user)
              .map(([key, value]) => (
                typeof value === 'object'
                  ? Object.entries(value).map(([nestedKeys, nestedValues]) => (
                    displayField([nestedKeys, nestedValues])
                  ))
                  : displayField([key, value])
              ))
          }
            <Grid item marginLeft="auto">
              <Button size="large" color="success" variant="contained" sx={{ marginRight: 2 }} onClick={closeModal}>Save</Button>
              <Button size="large" color="info" variant="contained" onClick={closeModal}>Cancel</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

EditButton.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditButton;
