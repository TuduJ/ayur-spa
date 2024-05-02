import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <AboutUs/>
      <ServicePage/>
      <Footer/>
    </>
  );
}

export default App;
