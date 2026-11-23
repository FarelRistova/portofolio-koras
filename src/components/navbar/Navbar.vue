<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <span class="logo">korasdev</span>
        <div class="current-time">{{ currentTime }}</div>
      </div>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="mobileMenuOpen"
        aria-controls="main-navigation"
        aria-label="Toggle navigation menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul id="main-navigation" class="nav-links" :class="{ 'is-open': mobileMenuOpen }">
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
      mobileMenuOpen: false,
      timeInterval: null,
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
    this.timeInterval = setInterval(this.updateTime, 1000);
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },
  beforeUnmount() {
    clearInterval(this.timeInterval);
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    setActive(section) {
      this.activeSection = section;
      this.mobileMenuOpen = false;
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

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  padding: 0.65rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
}

.menu-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: #222;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.menu-toggle[aria-expanded='true'] span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle[aria-expanded='true'] span:nth-child(2) {
  opacity: 0;
}

.menu-toggle[aria-expanded='true'] span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 1.2rem 1.5rem; /* ikut menyesuaikan */
  }
}

@media (max-width: 768px) {
  .navbar-container {
    position: relative;
    padding: 1.2rem 1rem;
  }

  .navbar-brand {
    gap: 0.75rem;
  }

  .logo {
    font-size: 1.2rem;
  }

  .current-time {
    font-size: 0.85rem;
    padding: 0.3rem 0.65rem;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 0.5rem 1rem 0.75rem;
    background: rgba(255, 255, 255, 0.98);
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.08);
  }

  .nav-links.is-open {
    display: flex;
  }

  .nav-links a {
    display: block;
    padding: 0.8rem 0.25rem;
    font-size: 0.95rem;
  }
}
</style>
