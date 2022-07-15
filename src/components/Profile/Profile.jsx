import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button, Box } from '@mui/material'
import { ExitToApp, Logout } from '@mui/icons-material';
// Get access to profile name or id from redux state
// Display data in the profile component
function Profile() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const favoriteMovies = []
  const logout = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant='h4' gutterBottom >My Profile</Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <Logout />
        </Button>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant='h5' >Your can save some movies here!</Typography>
        : <Box>FAVORITE MOVIES</Box>}
    </Box>
  );
}

export default Profile;
