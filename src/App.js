import './App.css';
import Nav from './components/Nav';
import StudentDetails from './components/StudentDetails';
import { Routes, Route} from 'react-router-dom'
import MentorDetails from './components/MentorDetails';
import AddMentor from './components/AddMentor';
import EditMentor from './components/EditMentor';
import EditStudent from './components/EditStudent'
import AddStudent from './components/AddStudent';


function App() {
  return <>

  <Nav/>
  <Routes>
<Route path='/student' element={<StudentDetails/>} />
<Route path='/mentor' element={<MentorDetails/>} />
<Route path='/addMentor' element={<AddMentor/>} />
<Route path='/editMentor/:_id' element={<EditMentor/>} />
<Route path='/addStudent' element={<AddStudent/>} />
<Route path='/editstudent/:_id' element={<EditStudent/>}/>
  </Routes> 



  </>
}

export default App;
