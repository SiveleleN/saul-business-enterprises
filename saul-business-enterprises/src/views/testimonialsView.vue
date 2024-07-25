<template>

<section id="testimonials" class="testimonials section">

<div class="container">

  <div class="row align-items-center">

    <div class="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
      <h3>Testimonials</h3>
      <p>At Saul Business Enterprises, we pride ourselves on delivering exceptional products and services that meet and exceed our clients' expectations. Don't just take our word for it—hear what our satisfied customers have to say. Below are some testimonials from our valued clients who have experienced firsthand the quality and dedication we bring to every project.</p>

    </div>

    <div class="col-lg-7" data-aos="fade-up" data-aos-delay="200">

      <div class="swiper">
        
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="d-flex">
                <img src="../assets/img/testimonials/testimonials-1.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>MSOL</h3>
                  <!-- <h4>Ceo &amp; Founder</h4> -->
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>We couldn't be happier with the results. Saul business enterprises delivered on time and exceeded our expectations in every way.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div><!-- End testimonial item -->

          <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="d-flex">
                <img src="../assets/img/testimonials/testimonials-2.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Khanya</h3>
                  <h4>Accountant</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>The team at Saul business Enterprises went above and beyond to ensure our project was a success. Their attention to detail and commitment to excellence is unmatched.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div><!-- End testimonial item -->

          <!-- <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="d-flex">
                <img src="../assets/img/testimonials/testimonials-3.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>End testimonial item -->

          <!-- <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="d-flex">
                <img src="../assets/img/testimonials/testimonials-4.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>End testimonial item -->

          <!-- <div class="swiper-slide">
            <div class="testimonial-item">
              <div class="d-flex">
                <img src="../assets/img/testimonials/testimonials-5.jpg" class="testimonial-img flex-shrink-0" alt="">
                <div>
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div> -->
          <!-- </div>End testimonial item -->

        </div>
        <div class="swiper-pagination"></div>
      </div>

    </div>

  </div>

</div>

</section>
</template>
<script>
export default {
  mounted() {
    // Initialize Swiper
    new Swiper('.swiper', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
  }
};
</script>
