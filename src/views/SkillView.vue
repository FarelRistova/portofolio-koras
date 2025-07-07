<template>
  <section class="skill-section" id="skill">
    <div class="section-title">
      <h1>My Skills</h1>
    </div>

    <!-- Slider Bahasa Pemrograman -->
    <div class="slider-container">
      <div class="slide-track">
        <!-- Asli -->
        <img src="/assets/html.svg" alt="HTML" class="skill-logo" />
        <img src="/assets/css.svg" alt="CSS" class="skill-logo" />
        <img src="/assets/js.svg" alt="JavaScript" class="skill-logo" />
        <img src="/assets/vue.svg" alt="Vue" class="skill-logo" />
        <img src="/assets/react.svg" alt="React" class="skill-logo" />
        <img src="/assets/flutter.svg" alt="Flutter" class="skill-logo" />
        <img src="/assets/py.svg" alt="Python" class="skill-logo" />
        <img src="/assets/laravel.svg" alt="Laravel" class="skill-logo" />

        <!-- Duplikat untuk animasi -->
        <img src="/assets/html.svg" alt="HTML" class="skill-logo" />
        <img src="/assets/css.svg" alt="CSS" class="skill-logo" />
        <img src="/assets/js.svg" alt="JavaScript" class="skill-logo" />
        <img src="/assets/vue.svg" alt="Vue" class="skill-logo" />
        <img src="/assets/react.svg" alt="React" class="skill-logo" />
        <img src="/assets/flutter.svg" alt="Flutter" class="skill-logo" />
        <img src="/assets/py.svg" alt="Python" class="skill-logo" />
        <img src="/assets/laravel.svg" alt="Laravel" class="skill-logo" />
      </div>
    </div>

    <!-- Tools Section -->
    <div class="tools-container">
      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="/assets/github.svg" alt="GitHub" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>GitHub</h3>
          <p>Platform untuk kolaborasi dan menyimpan proyek.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="/assets/vscode.svg" alt="VS Code" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Visual Studio Code</h3>
          <p>Editor kode utama yang saya gunakan dalam pengembangan.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="/assets/trello.svg" alt="Trello" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Trello</h3>
          <p>Aplikasi manajemen proyek berbasis papan, daftar, dan kartu.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="/assets/postman.svg" alt="Postman" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Postman</h3>
          <p>Platform yang digunakan untuk membangun dan menguji API.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="/assets/notion.svg" alt="Notion" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Notion</h3>
          <p>Aplikasi produktivitas untuk berpikir, menulis, dan merencanakan.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="/assets/figma.svg" alt="Figma" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Figma</h3>
          <p>Alat desain UI/UX yang biasa digunakan untuk membuat prototipe.</p>
        </div>
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
  background-color: #f5f5f5;
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

.tools-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.tool-card:hover {
  transform: scale(1.03);
}

.tool-icon-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
}

.tool-icon {
  width: 35px;
  height: 35px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tool-card:hover .tool-icon {
  transform: scale(1.1);
}

.tool-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 600;
}

.tool-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .slide-track {
    animation-duration: 25s;
  }

  .skill-logo {
    width: 60px;
    margin: 0 1rem;
  }

  .tools-container {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

@media (max-width: 480px) {
  .skill-section {
    padding: 3rem 1rem;
  }

  .section-title h1 {
    font-size: 2rem;
  }

  .tool-card {
    padding: 1.5rem;
  }
}
</style>
