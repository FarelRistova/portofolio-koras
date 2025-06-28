<template>
  <div class="home-wrapper">
    <div class="home-content">
      <div class="headline">
        <p class="name-line">Hi, I'm Farel Ristova.</p>
        <p class="title-line">
          I'm <span ref="typedTitle" class="typed-text"></span>
        </p>
      </div>
      <div class="description-box">
        <span ref="typedText" class="description-line"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

export default {
  name: 'HomeView',
  setup() {
    const typedText = ref(null)
    const typedTitle = ref(null)

    onMounted(() => {
      // Untuk deskripsi bawah
      new Typed(typedText.value, {
        strings: [
          'I am passionate about full stack development and committed to continuously improving my skills.',
        ],
        typeSpeed: 40,
        showCursor: true,
        cursorChar: '|',
      })

      // Untuk title-line berganti-ganti
      new Typed(typedTitle.value, {
        strings: ['a web developer.', 'a full stack developer.'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      })
    })

    return {
      typedText,
      typedTitle,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.home-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.home-content {
  position: relative;
  width: 100%;
  max-width: 1000px;
}

.headline {
  font-family: 'Inter', sans-serif;
}

.name-line {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.title-line {
  font-size: 2.2rem;
  margin: 0.5rem 0 0 0;
  color: #222;
}

.typed-text {
  font-weight: 600;
  color: #3328fa; /* warna aksen */
}

.description-box {
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 400px;
}

.description-line {
  font-size: 1.1rem;
  color: #444;
  text-align: right;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .name-line {
    font-size: 1.8rem;
  }

  .title-line {
    font-size: 1.3rem;
  }

  .description-box {
    position: static;
    margin-top: 2rem;
  }

  .description-line {
    text-align: left;
    font-size: 1rem;
  }
}
</style>
