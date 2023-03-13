import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

 function StudentDetails() {

  let navigate=useNavigate()

const [student,setStudent] = useState([])

const getStudent = () => {
  fetch("https://studentteacher.onrender.com/allStudents/")
  .then((data) => data.json())
  .then((lsts) => setStudent(lsts))
}

useEffect(() => {getStudent()}, []);

  const deleteList = (_id) => {
  console.log("deleting", _id)
  fetch(`https://studentteacher.onrender.com/allStudents/delete/${_id}`,{
    method:"DELETE"
  })
  .then(() => getStudent())
   }
 
  return <>
      <Box>
      <Paper sx={{padding:{xs:0,sm:0,md:5}}}>
          <TableContainer>
          <Table sx={{ minWidth: 350, maxWidth:900,margin:"20px auto" }} aria-label="customized table">
          <TableHead>
          <TableRow>
            <StyledTableCell>_id</StyledTableCell>
            <StyledTableCell align="center">StudentName</StyledTableCell>
            <StyledTableCell align="center">Mentor</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
  {
    student.map((e,i) => <StudentTable key={i} row={e} deletebutton = {<DeleteIcon onClick={() => deleteList(e._id)} sx={{color:"red",cursor:"pointer"}}/>}/>)
  }
                
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{ minWidth: 350, maxWidth:900,margin:"20px auto" }}>
<Button variant="text" align="center" onClick={() => navigate('/addStudent')}>Add</Button>
</Box>
</Paper>
</Box>
  
  </>
}

function StudentTable({row,deletebutton}){

  let navigate = useNavigate()

    return <>

<StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.Mentor}</StyledTableCell>
              <StyledTableCell align="center"><EditIcon sx={{cursor:"pointer"}} onClick={() => navigate(`/editStudent/${row._id}`)}/></StyledTableCell>
              <StyledTableCell align="center">{deletebutton}</StyledTableCell>
              </StyledTableRow>

    </>
}



export default StudentDetails