import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function display()
{
    console.log("button clicked");
}
export default function ButtonAppBar() {
    const styles = {
        customizeToolbar: {
          minHeight: 20
        }
      };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '30px' }}>
        <Toolbar variant="dense"  >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Register
          </Typography>
          <Button color="inherit" onClick={display}>Login</Button>
         
        </Toolbar>
      </AppBar>

      <Button variant="text">Text</Button>
    </Box>
    
  
    
  );
}
