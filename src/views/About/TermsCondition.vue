<script setup>




</script>
<template>
    <section>
        <div>
            <SectionHeader title="Terms & Condition" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
                            interdum ullamcorper sed pharetra sene." />


            <div class="px-4 pt-[44px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1096px] md:px-24 lg:px-8 lg:pt-[84px]">
              <div class="mb-[44px] lg:mb-[101px]">
                <h3 class="text-zinc-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-10 mb-[20px]">About the role</h3>
                <p class="w-[1027px] text-neutral-500 text-sm lg:text-base font-light font-['Poppins'] leading-[25.18px] pb-[24px]">you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                <ul class="ml-4">
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        You are going to use a passage of Lorem Ipsum, you need to be Sure there isn't 
                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Internet tend to repeat predefined Chunks as necessary, making this the first true
                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Making this the first true generator making this the first true
                    </li>
                </ul>
              </div>
              <div class="mb-[55px] lg:mb-[101px]">
                <h3 class="text-zinc-800 text-xl lg:text-[32px] font-medium font-['Poppins'] leading-10 mb-[20px]">If the feeling is mutual, we offer:
</h3>
                <p class="w-[1027px] text-neutral-500 text-sm lg:text-base font-light font-['Poppins'] leading-[25.18px] pb-[24px]">you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                <ul class="ml-4">
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Gross salary starting at 1,500 EUR/month
                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Remote workplace (work from anywhere – you can chill in the Bahamas in your pyjamas!)

                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        A growth-oriented tribe. We value health, awareness, consciousness and enjoy being Human
                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Position in one of the fastest-growing startups in Lithuania

                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Constant learning (500 EUR yearly budget for training to keep you sharp-minded)

                    </li>
                    <li class=" text-neutral-500 text-sm lg:text-base font-normal font-['Nunito'] leading-[26px] lg:leading-[43.90px] list-disc">
                        Remote workplace (work from anywhere – you can chill in the Bahamas in your pyjamas!)


                    </li>
                </ul>
              </div>
            </div>
        </div>


    </section>
</template>

<script >
import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';
import { onMounted } from 'vue';

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