<template>
    <div class="index-page">
      <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
          <router-link to="/" class="logo d-flex align-items-center me-auto me-xl-0">
            <h1 class="sitename">Append</h1><span>.</span>
          </router-link>
  
          <nav id="navmenu" class="navmenu">
            <ul>
              <li><router-link to="/" class="active">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/portfolio">Portfolio</router-link></li>
              <li><router-link to="/pricing">Pricing</router-link></li>
              <li><router-link to="/team">Team</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
              <li class="dropdown">
                <a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><router-link to="/dropdown1">Dropdown 1</router-link></li>
                  <li class="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><router-link to="/deepdropdown1">Deep Dropdown 1</router-link></li>
                      <li><router-link to="/deepdropdown2">Deep Dropdown 2</router-link></li>
                      <li><router-link to="/deepdropdown3">Deep Dropdown 3</router-link></li>
                      <li><router-link to="/deepdropdown4">Deep Dropdown 4</router-link></li>
                      <li><router-link to="/deepdropdown5">Deep Dropdown 5</router-link></li>
                    </ul>
                  </li>
                  <li><router-link to="/dropdown2">Dropdown 2</router-link></li>
                  <li><router-link to="/dropdown3">Dropdown 3</router-link></li>
                  <li><router-link to="/dropdown4">Dropdown 4</router-link></li>
                </ul>
              </li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
  
          <router-link to="/about" class="btn-getstarted">Get Started</router-link>
        </div>
      </header>
  
      <main class="main">
        <!-- Hero Section -->
        <section id="hero" class="hero section">
          <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in">
          <div class="container">
            <div class="row">
              <div class="col-lg-10">
                <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
                <p data-aos="fade-up" data-aos-delay="200">We are a team of talented designers making websites with Bootstrap</p>
              </div>
              <div class="col-lg-5">
                <form action="#" class="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
                  <input type="text" class="form-control" placeholder="Enter email address">
                  <input type="submit" class="btn btn-primary" value="Sign up">
                </form>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Clients Section -->
        <section id="clients" class="clients section">
          <div class="container" data-aos="fade-up">
            <div class="row gy-4">
              <div class="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
              </div>
              <div class="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
              </div>
              <div class="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
              </div>
              <div class="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
              </div>
              <div class="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
              </div>
              <div class="col-xl-2 col-md-3 col-6 client-logo">
                <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  