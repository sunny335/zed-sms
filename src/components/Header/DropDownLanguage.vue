<!-- HeaderDropdown.vue -->

<script setup>


</script>

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
          <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><circle style="fill:#f0f0f0" cx="256" cy="256" r="256"/><path style="fill:#d80027" d="M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256zm0-133.565h229.556a257.35 257.35 0 0 0-59.07-66.783H244.87v66.783zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0 0 28.755-66.783H8.819a254.474 254.474 0 0 0 28.755 66.783z"/><path style="fill:#0052b4" d="M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 0 0-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 0 0-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 0 0-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 0 0 0 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765 8.289 25.509zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765z"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
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
  