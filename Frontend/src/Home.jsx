import React from 'react'
import HeroSection from './components/HeroSection'
import NoticeCarousel from './components/NoticeCarosel'
import Bd_map from './components/Bd_map'
import LanguageSwitcher from './components/LanguageSwitcher'
import NewsSlider from './components/news_activity/NewsSlider'
import BlogPagination from './components/blog_activity/BlogPagination'
import VideoList from './components/video_activity/VideoList'

export default function Home() {
  return (
    <>
        <HeroSection></HeroSection>
        <NewsSlider></NewsSlider>
        <Bd_map></Bd_map>
        <BlogPagination></BlogPagination>
        <VideoList></VideoList>
    </>
  )
}
