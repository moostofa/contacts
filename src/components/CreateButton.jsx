import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateButton({ fields }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      toggleVisibility();
    });
    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div>
      {
        visible
        && (
          <Tooltip title="Add contact">
            <IconButton sx={{ bottom: 30, right: 50, position: 'fixed' }}>
              <AddCircleIcon sx={{ fontSize: 80, color: 'deepskyblue' }} />
            </IconButton>
          </Tooltip>
        )
      }
    </div>
  );
}

CreateButton.protoTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CreateButton;
