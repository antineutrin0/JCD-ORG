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
import BlogPagination from './components/blog_activity/BlogPagination';
import SingleBlog from './components/blog_activity/SingleBlog';

function App() {
  return (
     <>
   
     
     <MainNavbar></MainNavbar>
    
     <Outlet></Outlet>
     <Bd_map></Bd_map>
     <BlogPagination></BlogPagination>
     <Footer></Footer>
     </>
    
  );
}

export default App;
