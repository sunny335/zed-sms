
<script setup>
import { RouterLink } from 'vue-router'
import CommunityIcon from '../icons/IconCollections.vue'

</script>

<template>
    <header class="bg-white">
        <div class="mx-auto max-w-[1192px] px-4 sm:px-6 lg:px-8 w-full">
            <div class="flex h-[126px] items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-11">
                    <a class="block text-teal-600" href="/">
                        <span class="sr-only">Home</span>
                        <CommunityIcon iconName="siteLogo" />

                    </a>
                </div>

                <div class="md:flex md:items-center md:gap-[42px]">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-11 text-sm">
                            <li>
                                <RouterLink class="text-neutral-800 text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                                    to="/service">
                                    Our Service
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink class="text-neutral-800 text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                                    to="/about">
                                    About us
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink class="text-neutral-800 text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                                    to="/contact-us">
                                    Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-5">
                            <div class="hidden sm:flex">
                                <RouterLink class="w-[101px] h-[37px] px-4 py-2.5 rounded-[10px] border border-blue-600 justify-center items-center inline-flex"
                                    to="/logIn">
                                    <span
                                        class="text-center text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">
                                        Sign In
                                    </span>
                                </RouterLink>
                            </div>
                            <RouterLink  class="w-24 h-[37px] px-4 py-2.5 bg-blue-600 rounded-[10px] justify-center items-end inline-flex"
                            to="/signUp">
                                <span class="text-center text-white text-sm font-medium font-['Poppins'] leading-[17px]">
                                    Sign Up
                                </span>
                            </RouterLink>

                      
                            <div class="hidden md:block">
                                <HeaderDropdown :selectedLanguage="selectedLanguage" @update:selectedLanguage="updateSelectedLanguage" />
                            </div>
                        </div>

                        <div class="block md:hidden">
                            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import HeaderDropdown from './DropDownLanguage.vue';

export default {
  components: {
    HeaderDropdown,
  },
  data() {
    return {
      selectedLanguage: 'English', // Initialize with an empty string or a default language
    };
  },
  methods: {
    updateSelectedLanguage(language) {
      this.selectedLanguage = language; // Update the selected language when the event is emitted from HeaderDropdown
      // You can perform any additional actions based on the selected language here
    },
  },
};
</script>
<style>
.router-link-exact-active {
  color: #0074d9;
  text-decoration: underline;
  font-weight: 500;
}
</style>