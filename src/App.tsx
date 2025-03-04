import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import {LoginPage} from './LogIn';
import {Layout} from './Layout';
import DashBoard from './DashBoard';
import Profile from './Profile';
import Settings from './Settings';
import { SidebarDemo } from './SideBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route  path="/homepage" element={<SidebarDemo/>}/>
        <Route   element={<Layout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;