import React from 'react';
import SideNavbar from './SideNavbar';

export default function BackLayout({children}) {
  return (
    <div>
         <SideNavbar />
         {children}
    </div>
  );
}
