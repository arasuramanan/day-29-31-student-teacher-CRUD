import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AddMentor() {
    let navigate = useNavigate()
    const [name,setName] = useState("")
    const [concept,setConcept] = useState("")
    const [students,setStudents] = useState("")
    const [Batch,setBatch] = useState("")

    let addMentor = () =>{
      let newMentor = [
        {
          name:name,
          concept:concept,
          students:students,
          Batch:Batch
        }
      ]

      fetch("https://studentteacher.onrender.com/mentors/add",{
        method:"POST",
        body: JSON.stringify(newMentor),
        headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((data) => data.json())
          .then((list) => console.log(list))
          .then(() => navigate('/mentor'))

    }

  return <>
  <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
  <TextField id="outlined-basic" label="Concept" variant="outlined" onChange={(e) => setConcept(e.target.value)}/>
  <TextField id="outlined-basic" label="Students" variant="outlined" onChange={(e) => setStudents(e.target.value)}/>
  <TextField id="outlined-basic" label="Batch" variant="outlined" onChange={(e) => setBatch(e.target.value)}/>
  <Button sx={{padding:"15px"}} variant="contained" onClick={addMentor}>Submit</Button>
  </Box>
  </>
}

export default AddMentor