<template>
  <section>
    <header id="header" class="header d-flex align-items-center sticky-top">
      <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <img src="../assets/img/Sbe.jpg" alt="">
          <!-- <h1 class="sitename">Saul Business Enterprises</h1><span>.</span> -->
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="index.html#hero">Home</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#portfolio">Portfolio</a></li>
            <li><a href="index.html#pricing">Pricing</a></li>
            <li><a href="index.html#team">Team</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list" @click="toggleMobileNav"></i>
        </nav>

        <a class="btn-getstarted d-none d-xl-inline" href="index.html#about">Get A Quote</a>
      </div>
    </header>
  </section>
</template>

<script>
export default {
  methods: {
    toggleMobileNav() {
      const navMenu = document.getElementById('navmenu');
      navMenu.classList.toggle('active');
    }
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navmenu {
  display: flex;
  align-items: center;
}

.navmenu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navmenu ul li {
  margin: 0 10px;
}

.navmenu ul li a {
  text-decoration: none;
  color: #000;
}

.navmenu.active ul {
  display: block;
  position: absolute;
  top: 60px; /* Adjust based on your header height */
  left: 0;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

.navmenu.active ul li {
  margin: 10px 0;
}

@media (max-width: 991.98px) {
  .navmenu {
    position: relative;
  }

  .navmenu ul {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .navmenu ul li {
    margin: 10px 0;
  }

  .navmenu.active ul {
    display: flex;
  }

  .btn-getstarted {
    display: none; /* Hide the Get Started button on mobile */
  }

  .mobile-nav-toggle {
    cursor: pointer;
    font-size: 24px;
  }
}
</style>
