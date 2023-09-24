<template>
    <div>
      <!-- Profile Icon -->
      <button @click="isProfilePopupOpen = !isProfilePopupOpen">
        <img src="profile-icon.png" alt="Profile" />
      </button>
  
      <!-- Profile Popup -->
      <div v-if="isProfilePopupOpen" class="profile-popup">
        <a href="/profile-settings">Profile Settings</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isProfilePopupOpen: false,
      };
    },
    created() {
      // Close the profile popup on outside click
      window.addEventListener("click", this.closeProfilePopup);
    },
    beforeUnmount() {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("click", this.closeProfilePopup);
    },
    methods: {
      closeProfilePopup(event) {
        if (!this.$el.contains(event.target)) {
          this.isProfilePopupOpen = false;
        }
      },
    },
  };
  </script>
  
  <style>
  /* Style for the profile popup */
  .profile-popup {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    z-index: 100;
  }
  
  /* Style for the profile icon button */
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  /* Style for the profile icon image */
  button img {
    width: 40px;
    height: 40px;
  }
  </style>
  