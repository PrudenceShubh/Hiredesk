
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/homepage'
import Nave from './components/nave'
import Mainpage from './pages/mainpage';
import Jobfinding from './pages/jobfinding';
import Scheduling from './pages/scheduling';


function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Nave />}
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/mainpage' element={<Mainpage/>} />
        <Route path='/schedual' element={<schedual/>} />
        <Route path='/interview' element={<interview/>} />
        <Route path='/schdeule' element={<Scheduling/>} />
        <Route path='/find' element={<Jobfinding/>} />
      </Routes>
    </>
  );
}

export default App
