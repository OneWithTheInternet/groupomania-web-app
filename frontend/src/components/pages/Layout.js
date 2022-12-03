import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header';

function AppBody() {
  return (
    <div className='appBody'>
        <Header />
        <Outlet />
    </div>
  )
}

export default AppBody