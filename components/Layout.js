import React from 'react';
import SideNavbar from './SideNavbar';

export default function Layout({children}) {
  return (
    <div>
         <SideNavbar />
         {children}
    </div>
  );
}
