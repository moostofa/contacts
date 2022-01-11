import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, FormControl, Grid, Modal, TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import modalStyle from './styles/ModalStyle';

// renders a button which reveals a form to update contact details
function EditButton({ user }) {
  // controls the opening & closing of popup modal
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  // display all the contact's details
  const displayField = ([key, value]) => (
    <Grid key={key} item xs={6}>
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
                  ? Object.entries(value)
                    .map(([nestedKeys, nestedValues]) => (
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
    name: PropTypes.string,
  }).isRequired,
};

export default EditButton;
