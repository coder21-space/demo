import React from 'react'
import { Outlet } from 'react-router-dom'
import { LeftMenu } from './LeftMenu'

export const Backend = () => {
  return (
    <>
    <h1 className="text-center">Backend page</h1>
    <LeftMenu />
    <Outlet/>
  </>
  )
}
