import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import NavBar from './components/NavBar';
import Series from './screens/Series';
import Movies from './screens/Movies';
import Redux from "./screens/redux";
import Prueba from "./screens/prueba.jsx";


function App() {
  return (
   <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/movies' element={<Movies/>}/>
         <Route path='/redux' element={<Redux/>}/>
         <Route path='/prueba' element={<Prueba/>}/>
      </Routes>
      </Router>
   </div>
  
  );
}

export default App;
