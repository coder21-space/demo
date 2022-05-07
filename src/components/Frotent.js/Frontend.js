import React from 'react'
import {Body} from './Body'
import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const Frontend = () => {
  return (
    <>
    <h1 className="text-center">Frontend page</h1>
    <Header/>
    <Body/>
    
    <Footer/>
    <Outlet/>
  </>
  )
}
