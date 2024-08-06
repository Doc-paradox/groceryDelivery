import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, Grid, TextField, Button, CircularProgress } from '@mui/material';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('/USERS/userDetails', { withCredentials: true });
        if (response.data.length > 0) {
          setUser(response.data[0]);
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user details');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '2em' }}>
      <Paper sx={{ padding: '2em', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" sx={{ marginBottom: '1em' }}>
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Username"
              value={user.username}
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              value={user.useremail}
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              value={user.userphonenumber}
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={{ marginTop: '2em' }}>
          Edit Profile
        </Button>
      </Paper>
    </Box>
  );
};

export default ProfilePage;

