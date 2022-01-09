import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 80) setVisible(true);
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

export default CreateButton;
