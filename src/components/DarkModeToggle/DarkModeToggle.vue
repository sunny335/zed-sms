<template>
  <button @click="toggleDarkMode" class="p-2 text-white bg-gray-800 rounded-md hover:bg-gray-600">
    {{ darkMode ? "Light Mode" : "Dark Mode" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark', this.darkMode);
    },
  },
};
</script>
