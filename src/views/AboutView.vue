<template>
  <section class="about-section" id="about">
    <div class="about-container">
      <!-- Kiri: Judul & Deskripsi -->
      <div class="about-left">
        <h1>About me</h1>
        <p class="about-description">
          Saya siswa SMK Wikrama Bogor, jurusan Perangkat Lunak dan Gim. Tekun,
          konsisten, dan berfokus pada penguasaan teknologi, saya berkomitmen
          untuk terus berkembang. Berpengalaman sebagai ketua tim, saya mampu
          bekerja sama dengan baik dan memiliki minat besar untuk berkarir
          sebagai full stack web developer. Ketika waktu luang, saya juga suka
          mengisinya dengan hiking, camping, dan lainnya yang berhubungan dengan alam.
        </p>
      </div>

      <!-- Kanan: Foto -->
      <div class="about-right">
        <img src="/assets/pp.jpg" alt="Profile Photo" class="profile-photo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.about-section {
  background-color: #fff;
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1100px;
  width: 100%;
  gap: 3rem;
  align-items: center;
  margin: 50px;
}

.about-left {
  padding: 2rem 0rem;
  margin-bottom: 50px;
}

.about-left h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 1rem;
}

.about-description {
  font-size: 1.1rem;
  color: #444;
  line-height: 1.8;
  margin: 0;
  max-width: 500px;
}

.about-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.5rem 0;
}

.profile-photo {
  width: 350px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsif */
@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }

  .about-left h1 {
    font-size: 2rem;
  }

  .about-description {
    text-align: center;
    font-size: 1rem;
  }

  .about-right {
    margin-top: 2rem;
  }

  .profile-photo {
    width: 160px;
  }
}
</style>

