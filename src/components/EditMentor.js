import React,{useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function EditMentor() {
    
    const { _id } = useParams() 
    const [list,setList] = useState([])

    useEffect(() => {
       fetch(`https://studentteacher.onrender.com/mentors/${_id}`)
        .then((data) => data.json())
        .then((lsts) => setList(lsts))
    }, [_id]);


  return  <>
  {
    list && list.map((e,i) => <Editform row={e} key={i}/>)
  }
  </>
}

function Editform({row}){

  const [data, setData] = useState({})
  const { _id } = useParams()
  let navigate = useNavigate()

  function handleChange(e){
  let dataCopy = {
  ...data
  }
  dataCopy[e.target.id] = e.target.value
  setData(dataCopy)
  }

  useEffect(()=>{
  setData(row)
  },[row])

  let editMentors = () => {
    let editMentor =
      {
        name:data.name,
      concept:data.concept,
      students:data.students,
      Batch:data.Batch
      }

    fetch(`https://studentteacher.onrender.com/mentors/update/${_id}`,{
      method:"PUT",
      body: JSON.stringify(editMentor),
      headers: {
        "Content-Type" : "application/json",
    },
    })
        .then((data) => data.json())
        .then(() => navigate("/mentor"))

  }

  return<>
    <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="name" value={data.name}  onChange={handleChange} variant="outlined" />
  <TextField id="concept"  value={data.concept}  onChange={handleChange} variant="outlined" />
  <TextField id="students"  value={data.students}  onChange={handleChange} variant="outlined" />
  <TextField id="Batch" value={data.Batch}  onChange={handleChange} variant="outlined" />
  <Button sx={{padding:"15px"}} variant="contained" onClick={editMentors}>Update</Button>
  </Box>
  </>
}

export default EditMentor