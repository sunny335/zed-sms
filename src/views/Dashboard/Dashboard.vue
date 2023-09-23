<!-- Dashboard.vue -->

<template>
    <div class="max-w-[1128px] mx-auto w-full flex gap-[20px] mt-[50px]">
      <DashboardSidebar />
      <div class="dashboard-content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import DashboardSidebar from './Sidebar.vue'; // Adjust the import path
  
  export default {
    components: {
      DashboardSidebar,
    },
  };
  </script>
  
  <style>
  /* Add CSS styles for the dashboard content area as needed */
  </style>
  