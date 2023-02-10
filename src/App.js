import logo from './logo.svg';
import Header from './components/shared/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Domains from './components/pages/Domains';
function App() {
  return (
    <div>
         
        <BrowserRouter>
         <Routes>
            <Route path="/"      element={<Home/>}  /> 
            <Route path="/about"      element={<About/>}  /> 
            <Route path="/services"      element={<Services/>}  />
            <Route path="/domains"      element={<Domains/>}  /> 
         </Routes>
        </BrowserRouter>
         
    </div>
  );
}

export default App;
