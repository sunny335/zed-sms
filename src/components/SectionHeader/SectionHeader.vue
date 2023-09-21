<script setup>


</script>
<template>

    <div class="bg-neutral-100 py-[100px] px-7">
        <h1 class="text-neutral-800 text-center text-[40px] font-medium font-['Poppins'] leading-10 mb-[10px]">{{ title }}</h1>
        <p class="max-w-[436px] mx-auto text-center text-zinc-600 text-base font-light font-['Poppins'] leading-[25.18px]">{{ description }}</p>
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





