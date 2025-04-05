import Bd_map from './components/Bd_map';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import BlogPagination from './components/blog_activity/BlogPagination';
import AboutHero from './components/AboutUs/AboutHero';
import NewsSlider from './components/news_activity/NewsSlider';
import './app.css';
function App() {
  return (
    <> 
      <MainNavbar />
      <Outlet />
      
      <Footer />
    </>
  );
}

export default App;
