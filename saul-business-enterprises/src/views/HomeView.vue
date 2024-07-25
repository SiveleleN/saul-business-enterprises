<template>
  <header id="header" :class="['header d-flex align-items-center sticky-top', { 'mobile-nav-active': isMobileNavOpen }]">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
      <a href="#" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="../assets/img/Sbe.jpg" alt="Sauls logo" width="60px" height="60px">
        <!-- <h1 class="sitename">Saul Business Enterprises</h1><span>.</span> -->
      </a>
      
      <nav id="navmenu" class="navmenu">
        <ul :class="{ 'd-block': isMobileNavOpen, 'd-none': !isMobileNavOpen && !isLargeScreen, 'd-lg-flex': isLargeScreen }">
          <li><a href="index.html#hero" @click="closeNavbar">Home</a></li>
          <li><a href="index.html#about" @click="closeNavbar">About</a></li>
          <li><a href="index.html#services" @click="closeNavbar">Services</a></li>
          <li><a href="index.html#portfolio" @click="closeNavbar">Portfolio</a></li>
          <li><a href="index.html#pricing" @click="closeNavbar">Pricing</a></li>
          <li><a href="index.html#team" @click="closeNavbar">Team</a></li>
          <li><a href="index.html#contact" @click="closeNavbar">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-lg-none bi bi-list" @click="toggleNavbar"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#contact">Get A quote</a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="hero section">
    <img src="../assets/img/hero-bg.jpg" alt="pexels-bemistermister-3434533" border="0" data-aos="fade-in" class="image">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-12 justify-content-center align-items-center">
          <h2 data-aos="fade-up" data-aos-delay="100" id="heading">Saul Business Enterprises</h2>
          <p data-aos="fade-up" data-aos-delay="200" id="subheading">Ensuring we deliver the best to our customers</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Clients Section -->
  <section id="clients" class="clients section">
    <div class="container" data-aos="fade-up">
      <div class="row gy-4 justify-content-center">
        <div class="col-xl-2 col-md-3 col-6 client-logo">
          <img src="../assets/img/clients/client-1.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-xl-2 col-md-3 col-6 client-logo">
          <img src="../assets/img/clients/client-2.jpg" class="img-fluid" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.navmenu a {
  text-decoration: none;
}
header a {
  text-decoration: none;
}

.mobile-nav-toggle {
  color: var(--nav-color);
  font-size: 28px;
  line-height: 0;
  margin-right: 10px;
  cursor: pointer;
  transition: color 0.3s;
}

.navmenu {
  padding: 0;
  z-index: 9997;
}

.navmenu ul {
  display: none;
  position: absolute;
  inset: 60px 20px 20px 20px;
  padding: 10px 0;
  margin: 0;
  border-radius: 6px;
  background-color: var(--nav-dropdown-background-color);
  overflow-y: auto;
  transition: 0.3s;
  z-index: 9998;
  box-shadow: 0px 0px 30px color-mix(in srgb, var(--default-color), transparent 90%);
}

.navmenu.mobile-nav-active ul {
  display: block;
}

@media (min-width: 992px) {
  .navmenu ul {
    display: flex !important;
    position: static !important;
    background-color: transparent !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    list-style-type: none; /* Removes the list dots */
  }

  .navmenu ul li {
    margin-left: 20px;
  }

  .navmenu ul li a {
    color: var(--nav-color);
  }

  .navmenu ul li a:hover {
    color: var(--nav-hover-color);
  }
}

</style>

<script>
export default {
  data() {
    return {
      isMobileNavOpen: false,
      isLargeScreen: window.innerWidth >= 992
    };
  },
  methods: {
    toggleNavbar() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    closeNavbar() {
      this.isMobileNavOpen = false;
    },
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 992;
      if (this.isLargeScreen) {
        this.isMobileNavOpen = false;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
