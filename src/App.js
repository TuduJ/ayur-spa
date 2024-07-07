import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeRoot from './Pages/HomeRoot';
import Gallery from './Pages/Gallery';
import FindASpa from './Pages/FindASpa';
import Membership from './Pages/Membership';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import ScrollToTop from './helper/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
         <Route path='/' element={<HomeRoot/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/gallery' element={<Gallery/>} />
         <Route path='/find-a-spa' element={<FindASpa/>} />
         <Route path='/membership' element={<Membership/>} />
         <Route path='/contact' element={<Contact/>} />
       </Routes>
    </>
  );
}

export default App;