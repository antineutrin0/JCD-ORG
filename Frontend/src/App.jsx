import Bd_map from './components/Bd_map';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import BlogPagination from './components/blog_activity/BlogPagination';
import NewsSlider from './components/news_activity/NewsSlider';


function App() {
  return (
     <> 
     <MainNavbar></MainNavbar>
     <Outlet></Outlet>
     <Footer></Footer>
     </>
  );
}

export default App;