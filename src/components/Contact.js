import React from 'react'
import { Outlet } from 'react-router-dom'
//import { Frontend } from './Frotent.js/Frontend'
import { Body } from './Frotent.js/Body'
import { Footer } from './Frotent.js/Footer' 
import { Header } from './Frotent.js/Header' 


export const Contact = () => {
  return (
    <>
    <h1 className="text-center">Contact us page</h1>
    <Header/>
    <Body/>
    <Footer/>
    <Outlet/>
  </>
  )
}
