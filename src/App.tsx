import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import { LoginPage } from './LogIn';
import { SidebarDemo } from './SideBar';
// added change 
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/login"  element={<LoginPage/>}/>
      <Route path="/homepage"  element={<SidebarDemo/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
