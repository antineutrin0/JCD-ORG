import React from 'react'
import HeroSection from './components/HeroSection'
import NoticeCarousel from './components/NoticeCarosel'
import Bd_map from './components/Bd_map'
import LanguageSwitcher from './components/LanguageSwitcher'

export default function Home() {
  return (
    <div>
        <HeroSection></HeroSection>
     <NoticeCarousel></NoticeCarousel>
    
     <Bd_map></Bd_map>
     <LanguageSwitcher></LanguageSwitcher>
    </div>
  )
}
