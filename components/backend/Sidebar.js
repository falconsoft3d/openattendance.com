import Link from 'next/link';
import React from 'react'

export default function Sidebar() {
  return (
    <ul class="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">
                  {/* <!-- Sidebar - Brand --> */}
                  <Link href={"/"}>
                  <a class="sidebar-brand d-flex align-items-center justify-content-center">
                      <div class="sidebar-brand-icon rotate-n-15">
                          <i class="fas fa-clock"></i>
                      </div>
                      <div class="sidebar-brand-text mx-3">OAtt <sup>1.0</sup></div>
                  </a>
                  </Link>

                  {/* <!-- Divider --> */}
                  <hr class="sidebar-divider my-0"/>

                  {/* <!-- Nav Item - Dashboard --> */}

                  
                  <li class="nav-item">
                    <Link href={"/dashboard"}>
                      <a class="nav-link">
                          <i class="fas fa-fw fa-tachometer-alt"></i>
                          <span>Attendance</span></a>
                    </Link>
                  </li>
                  

                  {/* <!-- Divider --> */}
                  <hr class="sidebar-divider"/>
                 
                  {/* <!-- Nav Item - Charts --> */}
                  


                
                  <li class="nav-item">
                    <Link href={"/employees"}>
                      <a class="nav-link">
                          <i class="fas fa-fw fa-user"></i>
                          <span>Employees</span></a>
                     </Link>       
                  </li>
                
                  
                
                  <li class="nav-item">
                    <Link href={"/companies"}>
                      <a class="nav-link">
                          <i class="fas fa-fw fa-table"></i>
                          <span>Companies</span></a>
                    </Link> 
                  </li>
                   
                
                
                  <li class="nav-item">
                    <Link href={"/profile"}>
                      <a class="nav-link">
                          <i class="fas fa-fw fa-user"></i>
                          <span>Profile</span></a>
                    </Link>         
                  </li>
                

                
                  <li class="nav-item">
                    <Link href={"/config"}>
                      <a class="nav-link">
                          <i class="fas fa-fw fa-chart-area"></i>
                          <span>Config</span></a>
                    </Link>         
                  </li>
                

                  {/* <!-- Divider --> */}
                  <hr class="sidebar-divider d-none d-md-block"/>

                  {/* <!-- Sidebar Toggler (Sidebar) --> */}
                  <div class="text-center d-none d-md-inline">
                      <button class="rounded-circle border-0" id="sidebarToggle"></button>
                  </div>

              </ul>
  );
}
