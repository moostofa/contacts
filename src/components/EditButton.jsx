import React from 'react';
import {
  Box, Button, Modal, Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 0.5,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function EditButton() {
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
          <Typography variant="h1">
            Hello popup modal
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default EditButton;
