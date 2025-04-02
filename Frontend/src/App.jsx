import Bd_map from './components/Bd_map';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import BlogPagination from './components/blog_activity/BlogPagination';


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