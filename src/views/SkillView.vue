<template>
  <section class="skill-section" id="skill">
    <div class="section-title">
      <h1>Skills</h1>
    </div>

    <!-- Slider Bahasa Pemrograman -->
    <div class="slider-container">
      <div class="slide-track">
        <!-- Asli -->
        <img src="../assets/icons/html.svg" alt="HTML" class="skill-logo" />
        <img src="../assets/icons/css.svg" alt="CSS" class="skill-logo" />
        <img src="../assets/icons/js.svg" alt="JavaScript" class="skill-logo" />
        <img src="../assets/icons/vue.svg" alt="Vue" class="skill-logo" />
        <img src="../assets/icons/react.svg" alt="React" class="skill-logo" />
        <img src="../assets/icons/flutter.svg" alt="Flutter" class="skill-logo" />
        <img src="../assets/icons/dart.svg" alt="dart" class="skill-logo" />
        <img src="../assets/icons/py.svg" alt="Python" class="skill-logo" />
        <img src="../assets/icons/laravel.svg" alt="Laravel" class="skill-logo" />

        <!-- Duplikat untuk animasi -->
        <img src="../assets/icons/html.svg" alt="HTML" class="skill-logo" />
        <img src="../assets/icons/css.svg" alt="CSS" class="skill-logo" />
        <img src="../assets/icons/js.svg" alt="JavaScript" class="skill-logo" />
        <img src="../assets/icons/vue.svg" alt="Vue" class="skill-logo" />
        <img src="../assets/icons/react.svg" alt="React" class="skill-logo" />
        <img src="../assets/icons/flutter.svg" alt="Flutter" class="skill-logo" />
        <img src="../assets/icons/dart.svg" alt="dart" class="skill-logo" />
        <img src="../assets/icons/py.svg" alt="Python" class="skill-logo" />
        <img src="../assets/icons/laravel.svg" alt="Laravel" class="skill-logo" />
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'SkillView'
}
</script>

<style scoped>
.skill-section {
  background: linear-gradient(to bottom, #f8fafc, #eef2f7);
  padding: 5rem 1rem;
  text-align: center;
}

.section-title h1 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3.5rem;
  color: #222;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  margin-bottom: 4rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.slide-track {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  animation: scroll 20s linear infinite;
  width: max-content;
}

.skill-logo {
  width: 70px;
  margin: 0 1.5rem;
  opacity: 0.9;
  filter: grayscale(30%);
  transition: all 0.3s ease;
}

.skill-logo:hover {
  transform: scale(1.1);
  filter: grayscale(0);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

</style>
