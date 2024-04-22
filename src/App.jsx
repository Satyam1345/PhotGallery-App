// import { useState } from 'react' ;
// import reactLogo from './assets/react.svg' ;
// import viteLogo from '/vite.svg' ;
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css' ;
import Navbar from './Navbar';
import LoginForm from './LoginForm'; // Import your LoginForm component
// import SignUpForm from './SignUpForm';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import SignUpForm from './SignUpForm';
import AddPhoto from './AddPhoto';
import NewPage from './Newpage';
import grid from './AddButton';


function App() {
  

  return   <>
  <BrowserRouter>
  <Routes>
  
  <Route path="/" element={<Navbar/>  } />

  <Route path="/LoginForm" element={<LoginForm />} />
  <Route path="/SignUpForm" element={<SignUpForm />} />
  <Route path="/AddPhoto" element={<AddPhoto />} />
  <Route path="/NewPage" element={<NewPage />} />
  {/* <Route path="/AddButton" className="des" element={<AddButton />} /> */}

  

    </Routes>
</BrowserRouter>

</>
}

export default App ;
