

<template>
  <section class="ml-0 px-0 lg:px-4 lg:ml-[24px] mb-[100px] mt-0 lg:mt-10 max-w-[940px] w-full">
    <div class=" border-b border-gray-400 pb-[30px]">
      <h3 class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] leading-[17px]">Appearance</h3>
    </div>
    <!-- Theme -->
    <div class="mt-10 flex justify-between items-center">
      <div>
        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-[17px] mb-2">Theme</h6>
        <p class="text-zinc-600  dark:text-[#ACB5BD] max-w-[200px] lg:max-w-[300px] text-xs font-light font-[Poppins] leading-[18.89px]">
          Lorem ipsum dolor sit amet
          consectetur </p>
      </div>
      <div class="relative inline-block text-left">
        <!-- Dropdown Trigger -->
        <div @click="toggleThemeDropdown" class="cursor-pointer flex items-center">
          <div class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-normal font-[Poppins] leading-[17px]">

            <span> {{ selectedOptionTheme }}</span>
          </div>
          <div class="ml-2">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 6.77771L8.00004 11.2222L3.33337 6.77771" stroke="#495057" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <!-- Dropdown Menu -->
        <ul v-show="themeIsOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white  dark:bg-slate-900 border border-gray-300 rounded-md shadow-lg z-50">
          <!-- Render your list of countries and languages here -->
          <li v-for="(item, index) in themeOption" :key="index" @click="selectOptionTheme(item)"
            class="px-4 py-2 cursor-pointer  dark:hover:bg-slate-600 dark:hover:bg-slate-600 flex items-center">
            <span class="text-neutral-800  dark:text-[#F5F5F5] text-xs font-light ">
              {{ item }}

            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Language -->
    <div class="mt-10 flex justify-between items-center">
      <div>
        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-[17px] mb-2">Language</h6>
        <p class="text-zinc-600  dark:text-[#ACB5BD] text-xs  max-w-[200px] lg:max-w-[300px] font-light font-[Poppins] leading-[18.89px]">
          Lorem ipsum dolor sit amet
          consectetur </p>
      </div>
      <div class="relative inline-block text-left">
        <!-- Dropdown Trigger -->
        <div @click="toggleLanguageDropdown" class="cursor-pointer flex items-center">
          <div class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-normal font-[Poppins] leading-[17px]">

            <span> {{ selectedOptionLanguage }}</span>
          </div>
          <div class="ml-2">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 6.77771L8.00004 11.2222L3.33337 6.77771" stroke="#495057" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <!-- Dropdown Menu -->
        <ul v-show="languageIsOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white  dark:bg-slate-900 border border-gray-300 rounded-md shadow-lg z-50">
          <!-- Render your list of countries and languages here -->
          <li v-for="(item, index) in languageOption" :key="index" @click="selectOptionLanguage(item)"
            class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center">
            <span class="text-neutral-800  dark:text-[#F5F5F5] text-xs font-light ">
              {{ item }}

            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Notification -->
    <div class="mt-10 flex justify-between items-center">
      <div>
        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-[17px] mb-2">Notification</h6>
        <p class="text-zinc-600  dark:text-[#ACB5BD] text-xs max-w-[200px] lg:max-w-[300px] font-light font-[Poppins] leading-[18.89px]">
          Lorem ipsum dolor sit amet
          consectetur </p>
      </div>
      <div class="relative inline-block text-left">
        <!-- Dropdown Trigger -->
        <div @click="toggleNotificationDropdown" class="cursor-pointer flex items-center">
          <div class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-normal font-[Poppins] leading-[17px]">

            <span> {{ selectedOptionNotification }}</span>
          </div>
          <div class="ml-2">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 6.77771L8.00004 11.2222L3.33337 6.77771" stroke="#495057" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <!-- Dropdown Menu -->
        <ul v-show="notificationIsOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white  dark:bg-slate-900 border border-gray-300 rounded-md shadow-lg z-50">
          <!-- Render your list of countries and languages here -->
          <li v-for="(item, index) in notificationOption" :key="index" @click="selectOptionNotification(item)"
            class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center z-10">
            <span class="text-neutral-800  dark:text-[#F5F5F5] text-xs font-light ">
              {{ item }}

            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Ringtone -->
    <div class="mt-10 flex justify-between items-center">
      <div>
        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-[17px] mb-2">Ringtone</h6>
        <p class="text-zinc-600  dark:text-[#ACB5BD] text-xs max-w-[200px] lg:max-w-[300px] font-light font-[Poppins] leading-[18.89px]">
          Lorem ipsum dolor sit amet
          consectetur </p>
      </div>
      <div class="relative inline-block text-left">
        <!-- Dropdown Trigger -->
        <div @click="toggleRingtoneDropdown" class="cursor-pointer flex items-center">
          <div class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-normal font-[Poppins] leading-[17px]">

            <span> {{ selectedOptionRingtone }}</span>
          </div>
          <div class="ml-2">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 6.77771L8.00004 11.2222L3.33337 6.77771" stroke="#495057" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <!-- Dropdown Menu -->
        <ul v-show="ringtoneIsOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-slate-900 border border-gray-300 rounded-md shadow-lg z-50">
          <!-- Render your list of countries and languages here -->
          <li v-for="(item, index) in ringtoneOption" :key="index" @click="selectOptionRingtone(item)"
            class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center ">
            <span class="text-neutral-800  dark:text-[#F5F5F5] text-xs font-light ">
              {{ item }}

            </span>
          </li>
        </ul>
      </div>
    </div>




  </section>
</template>
<script >
const Theme = localStorage.getItem('Theme');
export default {
  components: {

  },
  data() {
 
    return {

      themeIsOpen: false,
      languageIsOpen: false,
      notificationIsOpen: false,
      ringtoneIsOpen: false,

      selectedOptionTheme: this.selectedTheme || Theme == "dark" ? "Dark" : "Light", // Default text,
      selectedOptionLanguage: this.selectedLanguage || 'English', // Default text,
      selectedOptionNotification: this.selectedNotification || 'ON', // Default text,
      selectedOptionRingtone: this.selectedRingtone || 'Ubilone Qusen', // Default text,
      themeOption: [
        "Light",
        "Dark"
      ],
      languageOption: [
        "English",
        "Bangla"
      ],
      notificationOption: [
        "ON",
        "OFF"
      ],
      ringtoneOption: [
        "Ubilone Qusen",
        "Ubilone Qusen 1",
        "Ubilone Qusen 2"
      ],



    }

  },
  created() {
    // Close the profile popup on outside click
    window.addEventListener("click", this.handlePopupOpen);
  },
  beforeUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("click", this.handlePopupOpen);
  },
  methods: {
    handlePopupOpen(event) {
      if (!this.$el.contains(event.target)) {
        this.notificationIsOpen = false;
        this.themeIsOpen = false;
        this.languageIsOpen = false;
      }
    },
    toggleThemeDropdown() {
      this.themeIsOpen = !this.themeIsOpen;

    },
    toggleLanguageDropdown() {
      this.languageIsOpen = !this.languageIsOpen;
      this.notificationIsOpen = false;
    },
    toggleNotificationDropdown() {
      this.notificationIsOpen = !this.notificationIsOpen;
      this.languageIsOpen = false;
      this.themeIsOpen = false;
      if (!this.$el.contains(event.target)) {
        this.OpenNotificationModal = false;
        this.OpenModal = false;
      }

    },
    toggleRingtoneDropdown() {
      this.ringtoneIsOpen = !this.ringtoneIsOpen;
    },


    selectOptionTheme(option) {
      this.selectedOptionTheme = option;
      localStorage.clear()
      if (option === "Dark") {
        document.body.classList.toggle('dark', true);
        localStorage.setItem("Theme", 'dark')
      }
      else {
        document.body.classList.toggle('dark', false);
    
        localStorage.setItem("Theme", 'light');
      }
      this.themeIsOpen = false;


      this.$emit('update:selectedTheme', option);
    },
    selectOptionLanguage(option) {
      this.selectedOptionLanguage = option;
      this.languageIsOpen = false;

      this.$emit('update:selectedLanguage', option);
    },
    selectOptionNotification(option) {
      this.selectedOptionNotification = option;
      this.notificationIsOpen = false;

      this.$emit('update:selectedNotification', option);
    },
    selectOptionRingtone(option) {
      this.selectedOptionRingtone = option;
      this.ringtoneIsOpen = false;
      this.$emit('update:selectedRingtone', option);
    },
  },
};


</script>
