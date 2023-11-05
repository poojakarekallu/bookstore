import { Box, Button, Typography } from '@mui/material';
import {  yellow } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     <Box display="flex" flexDirection="column" alignItems="center"> 
      <Button  LinkComponent={Link} to="/books" sx={{marginTop:15, backgroundColor:'blue'}} variant='contained'>
      <Typography variant='h3'>
        VIEW ALL PRODUCTS
      </Typography>
      </Button>
     </Box>
     <Box display="flex" flexDirection="row" justifyContent="center" bgcolor={yellow} p={6} > 
      
      <Button  LinkComponent={Link} to="/login" sx={{marginTop:10, marginRight:2, backgroundColor:'grey'}} variant='contained'>
      <Typography variant='h3'>
        Login
      </Typography>
      </Button>
     
      <Button  LinkComponent={Link} to="/signup" sx={{marginTop:10, backgroundColor:'grey'}} variant='contained'>
      <Typography variant='h3'>
        Signup
      </Typography>
      </Button>
     </Box>
     
    </div>
  )
}

export default Home;
