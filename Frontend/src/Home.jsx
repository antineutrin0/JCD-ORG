import React from 'react';
import HeroSection from './components/HeroSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import AboutUsHome from './components/AboutUs/AboutUsHome';
import NewsSlider from './components/news_activity/NewsSlider';
import BlogSlider from './components/blog_activity/BlogSlider';
import VideoList from './components/video_activity/VideoList';
import ActitvityHome from './components/Activities/ActitvityHome';
import NoticeSection from './components/notice/NoticeSection';
import OurLeaders from './components/OurLeader';
import Bd_map from './components/Maps/Bd_map';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurLeaders></OurLeaders>
      <NoticeSection></NoticeSection>
      <ActitvityHome></ActitvityHome>
      <AboutUsHome />
      <NewsSlider />
      <Bd_map />
      <BlogSlider />
      <VideoList />
    </>
  );
}
