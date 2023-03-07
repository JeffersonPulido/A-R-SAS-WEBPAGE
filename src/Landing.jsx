import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Header } from './components/header/Header'
import { Services } from './components/services/Services'
import { Testimonials } from './components/testimonials/Testimonials'
import { Whatsapp } from './components/btnWhatsapp/Whatsapp'
import { Footer } from './components/footer/Footer'
import { Copyright } from './components/copyright/Copyright'

export const Landing = () => {
  return (
    <>
      <Navbar/>
      <Header/>
    </>
  )
}
