import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '60px',
        backgroundColor: '#1F2029',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 0',
        // position: 'fixed',
        // left: 0,
        // top: 0,
        zIndex: 1200,
        '@media (max-width: 768px)': {
          display: 'none',
        },
      }}
    >
      <Box>
        <Tooltip title="Home" placement="right">
          <IconButton sx={{ color: '#3366ff' }}>
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="List" placement="right">
          <IconButton sx={{ color: 'white' }}>
            <ListAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Shopping" placement="right">
          <IconButton sx={{ color: 'white' }}>
            <ShoppingBagIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Receipt" placement="right">
          <IconButton sx={{ color: 'white' }}>
            <ReceiptLongIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Logout" placement="right">
          <IconButton sx={{ color: 'white' }}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Sidebar;