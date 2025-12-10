<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <span class="logo">korasdev</span>
        <div class="current-time">{{ currentTime }}</div>
      </div>
      <ul class="nav-links">
        <li v-for="(link, index) in links" :key="index">
          <a 
            :href="link.path" 
            :class="{ 'active': activeSection === link.path.slice(1) }"
            @click="setActive(link.path.slice(1))"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentTime: '',
      activeSection: 'home',
      links: [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skill' },
        { name: 'Tools', path: '#tool' },
        { name: 'Projects', path: '#project' },
        { name: 'Contact', path: '#contact' }
      ]
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    setActive(section) {
      this.activeSection = section;
    },
    onScroll() {
      const scrollPosition = window.scrollY + 100;
      for (const link of this.links) {
        const section = link.path.slice(1);
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            this.activeSection = section;
            break;
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  font-family: 'Roboto Mono', monospace;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem; /* diperbesar */
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.logo {
  font-weight: 600;
  font-size: 1.4rem; /* diperbesar */
  color: #222;
}

.current-time {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem; /* diperbesar */
  color: #555;
  background: rgba(0, 0, 0, 0.03);
  padding: 0.35rem 0.9rem; /* diperbesar */
  border-radius: 12px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.2rem;
}

.nav-links a {
  text-decoration: none;
  color: #444;
  font-weight: 500;
  font-size: 1rem; /* diperbesar */
  padding: 0.4rem 0;
  position: relative;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: #111;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

.nav-links a.active {
  color: #111;
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 1.2rem 1.5rem; /* ikut menyesuaikan */
  }
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    padding: 1.2rem 1rem;
  }

  .navbar-brand {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .nav-links {
    width: 100%;
    justify-content: space-around;
    gap: 0.5rem;
  }

  .nav-links a {
    font-size: 0.95rem;
  }
}
</style>
