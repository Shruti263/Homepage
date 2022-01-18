import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar/Navbar';
import Placement from './components/PlacementHistory/Placement'
import NavbarTop from './components/InterviewPreparation/InterviewPrep'
import Drawer from './components/AdminLogin/navbar'
import Create from './components/AdminLogin/create';
import Edit from './components/AdminLogin/edit';
import RecordList from './components/AdminLogin/recordList';
import Calender from './components/AdminLogin/Calender';
import Maincontent from './components/LandingPage/Maincontent';
import Response from './components/AdminLogin/Response';
import ContactForm from './components/AdminLogin/Email';
import Login from './components/AdminLogin/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Navbar />}></Route>
          <Route exact path='/adminlogin' element={<Login/>}></Route>
          <Route exact path='/statastics' element={<Placement/>}> </Route>
          <Route exact path='/interviewprep' element={<NavbarTop/>}></Route>
          <Route exact path='/calender' element={<Calender/>}></Route>
          <Route exact path='/admin' element={<Drawer/>}></Route>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route exact path="/recordList" element={<RecordList />}/>
          <Route exact path="/home" element={<Maincontent/>}></Route>
          <Route exact path='/formRes' element={<Response/>}></Route>
          <Route exact path='/sendreply/:id' element={<ContactForm/>}></Route>
        </Routes>       
      </div>
    </Router>
  );
}
export default App;
