<template>
  <section class="contact-section">
    <div class="contact-row">
      <!-- Bagian Info Kontak -->
      <div class="contact-group">
        <h2>Contact Me</h2>
        <p><strong>Phone:</strong> +62 8829 3719289</p>
        <p><strong>Email:</strong> farel.ristova@gmail.com</p>
        <p><strong>Address:</strong> Citayam Bojonggede, Kab.Bogor, Jawa Barat</p>
      </div>

      <!-- Bagian Sosial Media -->
      <div class="contact-group">
        <h2>Social Media</h2>
        <div class="social-icons">
          <a href="https://www.instagram.com/ristvrss_" target="_blank" aria-label="Instagram">
            <img src="../assets/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/farelristova77" target="_blank" aria-label="LinkedIn">
            <img src="../assets/icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/FarelRistova" target="_blank" aria-label="GitHub">
            <img src="../assets/icons/github.svg" alt="GitHub" />
          </a>
        </div>
      </div>

      <!-- Bagian Copyright -->
      <div class="contact-group">
        <h2>© 2025</h2>
        <p>Muhammad Farel Ristova Koras</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style scoped>
.contact-section {
  background-color: #f5f5f5;
  padding: 5rem 2rem;
  color: #333;
}

.contact-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.contact-group {
  flex: 1;
  min-width: 250px;
}

.contact-group h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #444;
}

.contact-group p {
  margin: 8px 0;
  font-size: 16px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-icons img {
  width: 36px;
  height: 36px;
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .contact-row {
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
