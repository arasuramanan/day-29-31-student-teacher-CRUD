import React from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Nav() {
    const navigate = useNavigate()
  return <>
  <Box sx={{display:"flex",backgroundColor:"#1976d2",gap:2,justifyContent:"center",padding:2}}>
  <Button variant="contained" onClick={() => navigate('/student')}>Student</Button>
  <Button variant="contained" onClick={() => navigate('/mentor')}>Mentor</Button>
  </Box>
  </>
}

export default Nav