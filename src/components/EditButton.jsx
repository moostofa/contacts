import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Modal,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 0.5,
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: 24,
  p: 4,
};

function EditButton({ user }) {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

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
          <ul>
            {
            Object.entries(user).map(([key, value]) => (
              <li key={key}>
                { JSON.stringify(key) }
                :
                {' '}
                { JSON.stringify(value) }
              </li>
            ))
          }
          </ul>
        </Box>
      </Modal>
    </>
  );
}

EditButton.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default EditButton;
