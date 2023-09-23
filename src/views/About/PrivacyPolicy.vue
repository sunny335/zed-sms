<script setup>




</script>
<template>
    <section>
        <div>
            <SectionHeader title="Privacy & Policy" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
                            interdum ullamcorper sed pharetra sene." />


            <div class="px-4 pt-[44px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[932px] md:px-24 lg:px-8 lg:pt-[84px]">
                <div class="mb-[40px] lg:mb-[60px]">
                    <h3 class="text-neutral-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9 mb-[16px]">Icons &
                        Graphics</h3>
                    <p class="text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] leading-normal">Icons and Graphics
                        are manually designed by the
                        <a href=""
                            class="text-blue-600 text-base font-semibold font-['Poppins'] leading-normal">VictorFlow</a>
                        Templates team. You
                        may download these and edit them to fit your website without asking for permission or providing
                        credit.
                    </p>
                    <br>
                    <p class="text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] leading-normal">
                        Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide
                        copyright license to download, copy, modify, and use the icons.
                    </p>
                </div>
                <div class="mb-[40px] lg:mb-[60px]">
                    <h3 class="text-neutral-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9 mb-[16px]">Photography
                    </h3>
                    <p class="text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] leading-normal">All images used in the
                        <a href="" class="text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-normal">
                            Saasup
                        </a>
                        Webflow Template are licensed for free personal and commercial use. If you'd like to use any
                        specific image, you can check the licenses and download the images for free on <a href=""
                            class="text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-normal">Unsplash,
                            Pexels‍</a> and
                        icons from <a href=""
                            class="text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-normal">Fontawesome.</a>
                    </p>

                </div>
                <div class="mb-[40px] lg:mb-[60px]">

                    <div class="flex justify-start items-center gap-2 mb-[16px]">

                        <h3 class="text-neutral-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9">Pexels :</h3>
                        <p class="text-zinc-600 text-[22px] font-normal font-['Nunito'] leading-[34.63px]">Licenscs</p>
                    </div>
                    <div class=" text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-[25.18px]">Image 1, Image 2,
                        Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image
                        13.</div>


                </div>
                <div class="mb-[40px] lg:mb-[60px]">

                    <div class="flex justify-start items-center gap-2 mb-[16px]">

                        <h3 class="text-neutral-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9">Unsplash :</h3>
                        <p class="text-zinc-600 text-[22px] font-normal font-['Nunito'] leading-[34.63px]">Licenscs</p>
                    </div>
                    <div class=" text-blue-600 text-sm  lg:text-base font-semibold font-['Poppins'] leading-[25.18px]">Image 1.</div>


                </div>
                <div class="mb-[40px] lg:mb-[60px]">

                    <div class="flex justify-start items-center gap-2 mb-[16px]">

                        <h3 class="text-neutral-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9">Font awesome :</h3>
                        <a href=""
                            class="text-blue-600 text-base lg:text-[22px] font-normal font-['Poppins'] leading-[34.63px]">Licenscs</a>
                    </div>
                    <div class=" text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-[25.18px]">Image 1.</div>


                </div>
                <div class="mb-[64px] lg:mb-[60px]">
                    <h3 class="text-neutral-800 text-2xl lg:text-[32px] font-medium font-['Poppins'] leading-9 mb-[16px]">Font
                    </h3>
                    <p class="text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] leading-normal">Saasup template uses free
                        licensed
                        <a href="https://fonts.google.com/"
                            class="text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-normal">
                            Google Fonts.
                        </a>
                        Please check <a href="https://fonts.google.com/specimen/Nunito"
                            class="text-blue-600 text-sm lg:text-base font-semibold font-['Poppins'] leading-normal"> Nunito.</a>
                    </p>

                </div>
            </div>
        </div>


    </section>
</template>

<script >
import { onMounted } from 'vue';

import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';

export default {
    
    components: {
        SectionHeader,
    },
    data() {

        return {

        }

    },
    setup() {
    onMounted(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
    });
  },
    

};


</script>