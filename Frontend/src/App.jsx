import Bd_map from './components/Bd_map';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import BlogPagination from './components/blog_activity/BlogPagination';

import SingleBlog from './components/blog_activity/SingleBlog';
import VideoList from './components/video_activity/VideoList';

function App() {
  return (
     <> 
     <MainNavbar></MainNavbar>
     <Outlet></Outlet>
     <Bd_map></Bd_map>
     <SingleBlog></SingleBlog>
     <BlogPagination></BlogPagination>
     <VideoList></VideoList>
     <Footer></Footer>
     </>
    
  );
}

export default App;