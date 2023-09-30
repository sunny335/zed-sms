<!-- HeaderDropdown.vue -->

<script setup>


</script>

<template>
    <div class="relative inline-block text-left">
        <!-- Dropdown Trigger -->
        <div @click="toggleDropdown" class="cursor-pointer flex items-center">
            <div
            class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-normal font-['Poppins'] leading-[17px]">
        
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
        <ul v-show="isOpen" class="absolute     right-[-100px] lg:right-0 mt-2 py-2 w-48 bg-white z-[9999] dark:bg-[#09132C]  border border-gray-300 rounded-md shadow-lg">
            <!-- Render your list of countries and languages here -->
            <li v-for="(item, index) in options" :key="index" @click="selectOption(item)"
                class="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-600 flex items-center">
          <span class="text-neutral-800  dark:text-[#F5F5F5] text-xs font-light ">
              {{ item }}

          </span> 
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    props: {
        selectedWeek: String, // Bind the selected language via prop
    },
    data() {
        return {
            isOpen: false,
            selectedOption: this.selectedWeek || '01 Week', // Default text
            options: [
                '01 Week',
                '02 Week',
                '01 Month',
               
            ],
        };
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isOpen = false;
            this.$emit('update:selectedWeek', option); // Emit an event to update the selected language in the parent component
        },
    },
};
</script>
  