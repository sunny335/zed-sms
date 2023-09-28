<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue';

const Theme = localStorage.getItem('Theme');

if (Theme == "dark") {
  document.body.classList.toggle('dark', true);
  localStorage.setItem("Theme", 'dark')
}
else  {
  document.body.classList.toggle('dark', false);
  localStorage.setItem("Theme", 'light')
}

</script>

<template>
  <div>
    <Header />
  </div>
  <RouterView />
  <div>
    <Footer />
  </div>
</template>

