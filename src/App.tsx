import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import {LoginPage} from './LogIn';
import {Layout} from './Layout';
import Profile from './Profile';
import Settings from './Settings';
import { SidebarDemo } from './SideBar';
import { UploadProject } from './UploadProject';
import SearchProject from './SearchProject';
import TitleComponent from './TitleComponent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bala" element={<TitleComponent/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route  path="/dashboard" element={<SidebarDemo/>}/>
        <Route  path="/homepage" element={<SidebarDemo/>}/>
        <Route path="/upload" element={<UploadProject />} />
        <Route path="/searchProject" element={<SearchProject/>} />
        <Route   element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;