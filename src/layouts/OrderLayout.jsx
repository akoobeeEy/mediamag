import React from 'react'
import { Outlet } from 'react-router-dom'

export const OrderLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default OrderLayout
