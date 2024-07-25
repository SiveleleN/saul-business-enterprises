<template>
    <section id="faq" class="faq section">

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div class="content px-xl-5">
        <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
        <p>
          Got a question? We're here to answer! If you don't see your question here, contact us!
        </p>
      </div>
    </div>

    <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">

      <div class="faq-container">
        <div class="faq-item faq-active">
          <h3><span class="num">1.</span> <span>What types of products do you offer?</span></h3>
          <div class="faq-content">
            <p>We offer a diverse range of high-quality products, including groceries, meat and poultry, fruits and vegetables, beverages, stationery, and cleaning materials. Our inventory is designed to meet the daily needs of our customers conveniently and affordably.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div><!-- End Faq item-->

        <div class="faq-item">
          <h3><span class="num">2.</span> <span>Do you provide fresh products?
          </span></h3>
          <div class="faq-content">
            <p>Yes, we prioritize the quality and freshness of our products. Our meat and poultry are of high quality, and our fruits and vegetables are fresh, seasonal, and sourced to provide customers with healthy options.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div><!-- End Faq item-->

        <div class="faq-item">
          <h3><span class="num">3.</span> <span>Can I find specialty products at your store?</span></h3>
          <div class="faq-content">
            <p>Absolutely! We offer a variety of specialty products along with our standard inventory. Our goal is to ensure you can find all you need under one roof.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div><!-- End Faq item-->

        <div class="faq-item">
          <h3><span class="num">4.</span> <span>Do you offer delivery services?
          </span></h3>
          <div class="faq-content">
            <p>Yes, we provide delivery services to ensure that our customers can receive their products conveniently. Please check our delivery options on our website or contact customer service for more details.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div><!-- End Faq item-->

        <div class="faq-item">
          <h3><span class="num">5.</span> <span>How can I contact customer service?</span></h3>
          <div class="faq-content">
            <p>You can reach our customer service team via phone, email, or by visiting one of our store locations. Our team is dedicated to providing excellent service and addressing any queries you may have.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div><!-- End Faq item-->

        <div class="faq-item">
          <h3><span class="num">6.</span> <span>Do you offer discounts for bulk purchases?</span></h3>
          <div class="faq-content">
            <p>Yes, we offer special discounts for bulk purchases. Please contact our sales team to discuss your needs and receive a tailored quote.</p>
          </div>
          <i class="faq-toggle bi bi-chevron-right"></i>
        </div><!-- End Faq item-->
      </div>

    </div>
  </div>

</div>

</section>
</template>
<script>
export default {
  mounted() {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Add click event listener to each FAQ item
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Toggle the active class on the clicked item
        item.classList.toggle('faq-active');

        // Toggle the visibility of the FAQ content
        const faqContent = item.querySelector('.faq-content');
        if (item.classList.contains('faq-active')) {
          faqContent.style.display = 'block';
        } else {
          faqContent.style.display = 'none';
        }

        // Close other FAQ items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('faq-active');
            otherItem.querySelector('.faq-content').style.display = 'none';
          }
        });
      });
    });
  }
};
</script>