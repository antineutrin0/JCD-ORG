import React from 'react'
import HeroSection from './components/HeroSection'
import NoticeCarousel from './components/NoticeCarosel'
import Bd_map from './components/Bd_map'
import LanguageSwitcher from './components/LanguageSwitcher'
import AboutUsHome from './components/AboutUs/AboutUsHome'

export default function Home() {
  return (
    <div>
        <HeroSection></HeroSection>
     <NoticeCarousel></NoticeCarousel>
     <AboutUsHome></AboutUsHome>
    </div>
  )
}
