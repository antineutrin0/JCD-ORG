import BangladeshMap from '@react-map/bangladesh';
import LanguageSwitcher from './components/LanguageSwitcher';
import Welcome from './components/Welcome';
import Bd_map from './components/Bd_map';
import TopNavbar from './components/TopNavbar';
import MainNavbar from './components/MainNavbar';
import HeroSection from './components/HeroSection';
import NoticeCarousel from './components/NoticeCarosel';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
     <>
   
     
     <MainNavbar></MainNavbar>
    
     <Outlet></Outlet>
     <Welcome></Welcome>
     <Footer></Footer>
     
     </>
    
  );
}

export default App;
