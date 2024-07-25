<template>
  <section id="portfolio" class="portfolio section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>Some of the Products we provide for you and more</p>
    </div><!-- End Section Title -->

    <div class="container justfy-content-center">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

          <!-- Portfolio Items -->
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-img">
              <img src="../assets/img/masonry-portfolio/masonry-portfolio-1.jpg" class="img-fluid" alt="App 1">
            </div>
            <div class="portfolio-info">
              <h4>Beverages</h4>
              <p>Order tailered beverages just for you</p>
              <!-- <a href="../assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div class="portfolio-img">
              <img src="../assets/img/masonry-portfolio/masonry-portfolio-2.jpg" class="img-fluid" alt="Product 1">
            </div>
            <div class="portfolio-info">
              <h4>Groceries</h4>
              <p>Let us do the hard work for you</p>
              <!-- <a href="../assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div class="portfolio-img">
              <img src="../assets/img/masonry-portfolio/masonry-portfolio-3.jpg" class="img-fluid" alt="Branding 1">
            </div>
            <div class="portfolio-info">
              <h4>Vegetables</h4>
              <p>Rely on us to find long lasting and fresh Vegetables</p>
              <!-- <a href="../assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-img">
              <img src="../assets/img/masonry-portfolio/masonry-portfolio-4.jpg" class="img-fluid" alt="App 2">
            </div>
            <div class="portfolio-info">
              <h4>Cleaning Material</h4>
              <p>Let us help keep your home queeky clean by finding the best products for your budget</p>
              <!-- <a href="../assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div class="portfolio-img">
              <img src="../assets/img/masonry-portfolio/masonry-portfolio-5.jpg" class="img-fluid" alt="Product 2">
            </div>
            <div class="portfolio-info">
              <h4>Stationery</h4>
              <p>Tired of getting confused about your childs stationery list,let us best help you</p>
              <!-- <a href="../assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div class="portfolio-img">
              <img src="../assets/img/masonry-portfolio/masonry-portfolio-6.jpeg" class="img-fluid" alt="App 3">
            </div>
            <div class="portfolio-info">
              <h4>Poultry&Meat</h4>
              <p>Fresh Meat from the best butchers </p>
              <!-- <a href="../assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="App 3" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> -->
            </div>
          </div><!-- End Portfolio Item -->

        </div><!-- End isotope-container -->
      </div><!-- End isotope-layout -->
    </div><!-- End container -->
  </section>
</template>

<script>
export default {
  // Vue component logic if needed
};
</script>

<style scoped>
.portfolio-img {
  max-width: 600px;
  max-height: 300px;
  overflow: hidden;
}

.portfolio-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
