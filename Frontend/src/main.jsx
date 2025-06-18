import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { LanguageProvider } from './context/LanguageProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import ActivityPage from './components/Activities/ActivitesPage';
import AboutUs from './components/AboutUs/AboutUs';
import VideoList from './components/video_activity/VideoList';
import SingleBlog from './components/blog_activity/SingleBlog';
import BlogList from './components/blog_activity/BlogList';
import SingleNews from './components/news_activity/SingleNews';
import NewsList from './components/news_activity/NewsList';;
import SingleActivity from './components/Activities/SingleActitvity';
import CommeteePage from './components/Commetee.page/CommeteePage';
import DistrictDetails from './components/Maps/DistrictDetails';
import SingleCommittee from './components/Commetee.page/singleCommittee';

// const isLoggedIn = window.localStorage.getItem("loggedIn"); 
// const userType = window.localStorage.getItem("userType");

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
      {/* {!isLoggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
            </>
          )}

           <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            {userType != "Admin" ? (
              <>
                <Route path="/admin-dashboard" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/admin-dashboard" />} />
                <Route path="/admin-dashboard" element={<AdminHome />} />
              </>
            )}
          </Route> */}
      
        <Route path='/' element={<App />}>
          {/* This will render Home for the root route */}
          <Route index element={<Home />} /> 
          <Route path='/blogs' element={<BlogList/>}/>
          <Route path='/blogs/:id' element={<SingleBlog/>}></Route>
          <Route path='/videos' element={<VideoList/>}/>
          <Route path='/news' element={<NewsList/>}/>
          <Route path='/news/:id' element={<SingleNews/>}></Route>
          <Route path='/activities/recent' element={<ActivityPage></ActivityPage>}></Route>
          <Route path='/activities/recent/:id' element={<SingleActivity></SingleActivity>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/committee/:catagory' element={<CommeteePage></CommeteePage>}></Route>
          <Route path='/committee/:catagory/:committeename' element={<SingleCommittee></SingleCommittee>}></Route>
          <Route path='/district/:id' element={<DistrictDetails/>}></Route>
        </Route>
      
        {/* <Route path='/contactus' element={<ContactUs></ContactUs>}></Route> */}
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);