import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { LanguageProvider } from './context/LanguageProvider';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Home';
import ActivityPage from './components/Activities/ActivitesPage';
import AboutUs from './components/AboutUs/AboutUs';
import Notice from './components/notice/Notice';
import VideoList from './components/video_activity/VideoList';
import SingleBlog from './components/blog_activity/SingleBlog';
import BlogList from './components/blog_activity/BlogList';
import SingleNews from './components/news_activity/SingleNews';
import NewsList from './components/news_activity/NewsList';
import NoticeHero from './components/notice/NoticeHero';
import SingleActivity from './components/Activities/SingleActitvity';

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
          <Route path='/notices' element={<NoticeHero></NoticeHero>}></Route>
          <Route path='/activities/recent' element={<ActivityPage></ActivityPage>}></Route>
          <Route path='/activities/recent/:id' element={<SingleActivity></SingleActivity>}></Route>
          
         

        </Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        {/* <Route path='/contactus' element={<ContactUs></ContactUs>}></Route> */}
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);