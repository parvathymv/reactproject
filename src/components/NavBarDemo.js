import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import Link from '@mui/material/Link';
import {Link} from 'react-router-dom';
export default function ButtonAppBar() 
{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="success" sx={{height: '30px',color:'yellow'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
    
   
<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
<Link to="/login">Login</Link>
</Typography>
          
          <IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
          <Button color="inherit">Home</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
