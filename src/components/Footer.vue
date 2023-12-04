<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <p class="footer-title">KISVÁRDAI<br/>
        KÉZILABDA<br/>
        KLUB</p>
        </div>
        <div class="footer-section">
          <div class="contact-info">
            <div class="contact-item">KONTAKT</div>
            <div class="contact-item contact-hover" >TELEFON<a href="tel:+36 70 615 06 00">+36 70 615 06 00</a></div>
            <div class="contact-item contact-hover" >CÍM <a href="https://maps.app.goo.gl/bs3fgo56D2PyJ2pD8" target="_blank">4600 KISVÁRDA, FLÓRIÁN TÉR 6.</a></div>
            <div class="contact-item contact-hover" >EMAIL: <a
                href="mailto:vardakezilabda@gmail.com">vardakezilabda@gmail.com</a></div>
          </div>
        </div>
        <div class="footer-section-mid">
          <div class="footer-section-div">
            <div class="social-icons">
              <a href="https://www.facebook.com/kkchivatalos" target="_blank" ><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/kkchivatalos/" target="_blank" ><i class="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/@KisvardaMasterGoodSE" target="_blank" ><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
    
  <style scoped>
  @media (max-width: 767px) {
    .footer-title {
      max-width: 100vw !important;
    }
  
    .contact-info {
      flex-direction: column !important;
    }
  
    .footer-section-mid {
      align-items: flex-start !important;
      flex-direction: column !important;
    }
  
    .news-btn {
      padding: 1rem 1rem !important;
      width: 10rem !important;
      margin-bottom: 2.2rem;
    }
  
    .footer-text {
      border-top: 1px solid rgb(112, 112, 112, .3);
      padding-top: 2rem;
      width: 100vw;
    }
  }
  
  .footer {
    background-color: white;
    color: black;
    padding: 20px;
    overflow: hidden;
    max-width: 100vw;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .footer-section {
    flex: 1;
    margin: 10px;
  }
  
  .footer-section-mid {
    flex: 1;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0rem;
  }
  
  .footer-section-div {
    flex: 1;
    margin-bottom: 10px;
  }
  
  .footer-title {
    max-width: 40vw;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 700;
    border-bottom: 0.7rem solid black;
    padding-bottom: 2rem;
  }
  
  .contact-info {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .contact-item {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .contact-item a {
    margin-top: 10px;
    text-decoration: none;
    color: black;
  }
  
  .social-icons {
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    margin-bottom: 10px;
  }
  
  .social-icons a {
    color: black;
    font-size: 2rem;
  }
  
  .social-icons a:hover {
    color: var(--c-red);
  }
  
  .contact-hover a:hover {
    color: var(--c-red);
  }
  </style>
    
  <script setup>

  </script>