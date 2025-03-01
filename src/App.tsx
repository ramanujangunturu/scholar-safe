import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router';
import LandingPage from './LandingPage';
// added change
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
