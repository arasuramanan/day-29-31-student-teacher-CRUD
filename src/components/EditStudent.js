import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import {useParams, useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function EditStudent() {
const { _id } = useParams()
// const params = useParams();
// console.log(params)
const [list,setList] = useState([])

useEffect(() => {
fetch(`https://studentteacher.onrender.com/allStudents/${_id}`)
.then((datas) => datas.json())
.then((lst) => setList(lst))
}, [_id]);

  return <>
{
  list && list.map((e,i) => <Edit row={e} key={i}/>)
}
  </>
 
}

function Edit({row}){

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

  let editStudents = () => {
    let editstudent =
      {
        name:data.name,
      Mentor:data.Mentor
      }

    fetch(`https://studentteacher.onrender.com/allStudents/update/${_id}`,{
      method:"PUT",
      body: JSON.stringify(editstudent),
      headers: {
        "Content-Type" : "application/json",
    },
    })
        .then((data) => data.json())
        .then(() => navigate("/student"))

  }
  return <>
      <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto",display:"flex",flexDirection:"column",gap:4,padding:{xs:"30px",md:"20px"} }}>
  <TextField id="name"  value={data.name}  onChange={handleChange} variant="outlined" />
  <TextField id="Mentor"  value={data.Mentor}  onChange={handleChange} variant="outlined" />
  <Button sx={{padding:"15px"}} variant="contained" onClick={editStudents}>Update</Button>
  </Box>
  </>
}

export default EditStudent