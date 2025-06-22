import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { LanguageProvider } from "./context/LanguageProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ActivityPage from "./components/Activities/ActivitesPage";
import AboutUs from "./components/AboutUs/AboutUs";
import VideoList from "./components/video_activity/VideoList";
// import SingleBlog from "./components/blog_activity/SingleBlog";
import BlogList from "./components/blog_activity/BlogList";
import SingleNews from "./components/news_activity/SingleNews";
import NewsList from "./components/news_activity/NewsList";
import SingleActivity from "./components/Activities/SingleActitvity";
import CommeteePage from "./components/Commetee.page/CommeteePage";
import DistrictDetails from "./components/Maps/DistrictDetails";
import SingleCommittee from "./components/Commetee.page/singleCommittee";
import ZiaurRahman from "./components/Leaders/ZiaurRahman";
import KhaledaZia from "./components/Leaders/KhaledaZia";
import TariqueRahman from "./components/Leaders/TariqueRahman";
import MissionsPage from "./components/Missions/MissionsPage";
import MissionDetails from "./components/Missions/MissionDetails";
// const isLoggedIn = window.localStorage.getItem("loggedIn");
// const userType = window.localStorage.getItem("userType");
import July_24 from "./components/July_24/July_24";
import Contact from "./components/contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { app } from "./lib/firebase";
import PageNotFound from "./404";
import AllNotices from "./components/notice/AllNotices";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
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

          <Route path="/" element={<App />}>
            {/* This will render Home for the root route */}
            <Route index element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<SingleNews />}></Route>
            <Route path="/videos" element={<VideoList />} />
            <Route path="/press-release" element={<NewsList />} />
            <Route path="/press-release/:id" element={<SingleNews />}></Route>
            <Route
              path="/activities/recent"
              element={<ActivityPage></ActivityPage>}
            ></Route>
            <Route
              path="/activities/recent/:id"
              element={<SingleActivity></SingleActivity>}
            ></Route>
            <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
            <Route
              path="/committee/"
              element={<CommeteePage></CommeteePage>}
            ></Route>
            <Route
              path="/committee/:id"
              element={<SingleCommittee></SingleCommittee>}
            ></Route>
   
            <Route
              path="/leaders/shaheed-president-ziaur-rahman"
              element={<ZiaurRahman></ZiaurRahman>}
            ></Route>
            <Route
              path="/leaders/Chairperson-Begum-Khaleda-Zia"
              element={<KhaledaZia></KhaledaZia>}
            ></Route>
            <Route
              path="/leaders/Acting-Chairman-Tarique-Rahman"
              element={<TariqueRahman></TariqueRahman>}
            ></Route>
            <Route
              path="/mission"
              element={<MissionsPage></MissionsPage>}
            ></Route>
            <Route path="/missions/:id" element={<MissionDetails />} />
            <Route path="/july-martyrs" element={<July_24></July_24>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/all-notices" element={<AllNotices />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* <Route path='/contactus' element={<ContactUs></ContactUs>}></Route> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </LanguageProvider>
);
