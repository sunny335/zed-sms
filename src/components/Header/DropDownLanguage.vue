<!-- HeaderDropdown.vue -->

<template>
    <div class="relative inline-block text-left">
        <!-- Dropdown Trigger -->
        <div @click="toggleDropdown" class="cursor-pointer flex items-center">
            <div
                class=" py-2 px-4 pr-0 rounded-md flex items-center text-zinc-600 text-sm font-normal font-['Poppins'] leading-[17px]">
                <span class="mr-2" v-html="getFlag(selectedOption)"></span>
               <span> {{ selectedOption }}</span>
            </div>
            <div class="ml-2">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6667 6.77771L8.00004 11.2222L3.33337 6.77771" stroke="#495057" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <!-- Dropdown Menu -->
        <ul v-show="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            <!-- Render your list of countries and languages here -->
            <li v-for="(item, index) in options" :key="index" @click="selectOption(item)"
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center">
                <span class="mr-2" v-html="getFlag(item)"></span>
                {{ item }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        selectedLanguage: String, // Bind the selected language via prop
    },
    data() {
        return {
            isOpen: false,
            selectedOption: this.selectedLanguage || 'Select Language', // Default text
            options: [
                'English',
                'French',
                'German',
                'Spanish',
            ],
            countryFlags: {
        'English': `
          <!-- SVG code for English flag -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <!-- Replace this with the actual SVG path for the flag -->
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 18h2v-2h-2v2zm1-4h2v-6h-2v6z"/>
          </svg>
        `,
        'French': `
          <!-- SVG code for French flag -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <!-- Replace this with the actual SVG path for the flag -->
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 18h2v-2h-2v2zm1-4h2v-6h-2v6z"/>
          </svg>
        `,
        'German': `
          <!-- SVG code for German flag -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <!-- Replace this with the actual SVG path for the flag -->
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 18h2v-2h-2v2zm1-4h2v-6h-2v6z"/>
          </svg>
        `,
        'Spanish': `
          <!-- SVG code for Spanish flag -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <!-- Replace this with the actual SVG path for the flag -->
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 18h2v-2h-2v2zm1-4h2v-6h-2v6z"/>
          </svg>
        `,
        // Add more country flags here as needed
      },
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isOpen = false;
            this.$emit('update:selectedLanguage', option); // Emit an event to update the selected language in the parent component
        },
        getFlag(option) {
            return this.countryFlags[option] || ''; // Get the flag based on the selected option
        },
    },
};
</script>
  