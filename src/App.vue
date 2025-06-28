<template>
  <div id="app">
    <Navbar />
    
    <!-- Gunakan komponen view sebagai section -->
    <HomeView id="home" />
    <AboutView id="about" />
    <SkillView id="skill" />
    <ProjectView id="project" />
    <ContactView id="contact" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import SkillView from './views/SkillView.vue'
import ProjectView from './views/ProjectView.vue'
import ContactView from './views/ContactView.vue'

export default {
  components: {
    Navbar,
    HomeView,
    AboutView,
    SkillView,
    ProjectView,
    ContactView
  }
}
</script>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>