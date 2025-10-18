
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/homepage'
import Nave from './components/nave'
import Mainpage from './pages/mainpage';


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
      </Routes>
    </>
  );
}

export default App
