import React from 'react'
import '../dashBoardCss/material-dashboard.css'
import '../dashBoardCss/material-dashboard.css.map'
import '../dashBoardCss/material-dashboard.min.css'


export default function DashBoard() {
  return (
    <div>
      <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <span class="ms-1 font-weight-bold text-white">STUDENT DASHBOARD</span>
          </a>
        </div>
        <hr class="horizontal light mt-0 mb-2"/>
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white active bg-gradient-primary" href="../pages/dashboard.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Profile</span>
              </a>
            </li>

            
          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#billing-submenu" aria-expanded="false" aria-controls="billing-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">school</i>
                </div>
                <span class="nav-link-text ms-1">Exam</span>
              </a>
              <ul class="collapse" id="billing-submenu">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Result</a>
                </li>
              </ul>
          </div>
          <div class="nav-item">
              <a class="nav-link text-white collapsed" href="../pages/billing.html" data-bs-toggle="collapse" data-bs-target="#user-submenu" aria-expanded="false" aria-controls="user-submenu">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">book</i>
                </div>
                <span class="nav-link-text ms-1">Attendance</span>
              </a>
              
          </div>
           
          
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/notifications.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">notifications</i>
                </div>
                <span class="nav-link-text ms-1">Notifications</span>
              </a>
            </li>
            <li class="nav-item mt-3">
              <h6 class=" ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>
            
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/sign-in.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">login</i>
                </div>
                <span class="nav-link-text ms-1">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="sidenav-footer position-absolute w-100 bottom-0 ">
         
        </div>
      </aside>
      {/*body section  */}
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">

    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Login</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Student</li>
          </ol>
          <h6 class="font-weight-bolder mb-0">Student Dash Board</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
           
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li class="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-body p-0">
                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
          </ul>
            
        </div>
      </div>
    </nav>
  </main>
      {/* end of body section  */}

      
    </div>
  )
}
