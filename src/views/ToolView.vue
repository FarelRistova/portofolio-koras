<template>
  <section class="tool-section" id="tool">
    <div class="section-title">
      <h1>Tools</h1>
    </div>

    <!-- Tools Section -->
    <div class="tools-container">
      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/github.svg" alt="GitHub" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>GitHub</h3>
          <p>Platform untuk kolaborasi dan menyimpan proyek.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/vscode.svg" alt="VS Code" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Visual Studio Code</h3>
          <p>Editor kode utama yang saya gunakan dalam pengembangan.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/trello.svg" alt="Trello" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Trello</h3>
          <p>Aplikasi manajemen proyek berbasis papan, daftar, dan kartu.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/postman.svg" alt="Postman" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Postman</h3>
          <p>Platform yang digunakan untuk membangun dan menguji API.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/notion.svg" alt="Notion" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Notion</h3>
          <p>Aplikasi produktivitas untuk berpikir, menulis, dan merencanakan.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/figma.svg" alt="Figma" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Figma</h3>
          <p>Alat desain UI/UX yang biasa digunakan untuk membuat prototipe.</p>
        </div>
      </div>

      <div class="tool-card">
        <div class="tool-icon-wrapper">
          <img src="../assets/icons/vercel.svg" alt="Vercel" class="tool-icon" />
        </div>
        <div class="tool-info">
          <h3>Vercel</h3>
          <p>Website yang di gunakan untuk menghosting projek, dengan dukungan deploy otomatis dari GitHub.</p>
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
.tool-section {
  background-color: #ffffff;
  padding: 5rem 1rem;
  text-align: center;
}

.section-title h1 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3.5rem;
  color: #222;
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
  .tool-section {
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
