<script setup>


</script>
<template>
  <div class="bg-neutral-50 lg:bg-neutral-100 dark:bg-[#09132C] lg:pb-[100px] pt-[28px] pb-[40px] lg:pt-[100px] px-[22px] lg:px-7">
    <h1 class="text-neutral-800 text-center text-2xl lg:text-[40px] dark:text-white font-medium font-[Poppins] leading-10 mb-[6px] lg:mb-[10px]">{{ title }}
    </h1>
    <p class="max-w-[436px] mx-auto text-center text-zinc-600  dark:text-[#ACB5BD] text-[13px] lg:text-base font-light font-[Poppins] leading-[25.18px]">{{
      description }}</p>
  </div>
</template>


<script>
export default {
  props: {
    title: String, // Declare a prop named "title" of type String
    description: String,   // Declare a prop named "description" of type String
  },
};
</script>





