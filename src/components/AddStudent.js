import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AddStudent() {
    let navigate = useNavigate()  

const [studentName,setStudentName] = useState("")
const [Mentor,setMentor] = useState("")
const [id,setId] = useState("")


    let addStudent = () => {
      const newStudents = [{
        id:id,
        studentName:studentName,
        Mentor:Mentor
      }]

      fetch("https://studentteacher.onrender.com/allStudents/add",{
        method:"POST",
        body: JSON.stringify(newStudents),
        headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((data) => data.json())
          .then(() => navigate('/student'))
          .then((list) => console.log(list))
    }
  return <>
  <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="outlined-basic" label="id" variant="outlined" onChange = {(e) => setId(e.target.value)}/>
  <TextField id="outlined-basic" label="StudentName" variant="outlined" onChange = {(e) => setStudentName(e.target.value)}/>
  <TextField id="outlined-basic" label="Mentor" variant="outlined" onChange = {(e) => setMentor(e.target.value)}/>
  <Button sx={{padding:"15px"}} variant="contained" onClick={addStudent}>Submit</Button>
  <p>{studentName} - {Mentor} </p>
  </Box>
  </>
}

export default AddStudent