<script setup>
import chart from "../../assets/img/about/chart.png"
import Innovation from "../../assets/img/about/Innovation.png"
import teamwork from "../../assets/img/about/teamwork.png"
import Excellence from "../../assets/img/about/Excellence.png"
import Responsibility from "../../assets/img/about/Responsibility.png"



</script>
<template>
    <section>
        <div>
            <SectionHeader title="About our company" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
interdum ullamcorper sed pharetra sene." />


            <div class="px-4 pt-[60px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 lg:pt-[84px]">
                <div class="flex flex-col lg:flex-row flex-wrap justify-start items-start gap-[14px] lg:gap-[100px]">
                    <h3 class="text-left lg:text-center w-full lg:w-[20%] text-neutral-800   dark:text-[#F5F5F5] text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9">What

                        we do
                    </h3>
                    <div class="w-full lg:w-[65%]">
                        <p class="max-w-[808px] text-zinc-600    dark:text-[#ACB5BD] text-xl font-light font-['Poppins'] leading-[29.20px]">It is a
                            long
                            established fact that a reader will be distracted by the content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it has a more-or-less distribution of letters, as
                            opposed to using.
                        </p>
                        <br>
                        <p class="max-w-[808px] text-zinc-600    dark:text-[#ACB5BD] text-xl font-light font-['Poppins'] leading-[29.20px]">
                            Content here', making it look like readable English. Many desktop and web page editors now use
                            Lorem
                            Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                            still
                            in their infancy.
                        </p>
                    </div>
                </div>
                <div class="flex  flex-col lg:flex-row justify-center items-center gap-[100px] mt-[187px] ">
                    <div class="max-w-[486px]">
                        <h3 class=" text-neutral-800   dark:text-[#F5F5F5] text-xl lg:text-[32px] font-medium font-['Poppins'] leading-9 pb-[24px]">Our
                            Mission</h3>
                        <p class=" text-zinc-600    dark:text-[#ACB5BD] text-xl font-light font-['Poppins'] leading-[29.20px]">Lorem ipsum dolor
                            sit amet, consectetur adipiscing Pharetra Ld eu aliquet diam lorem viverra at justo. Nulla odio
                            nequefjf gravida in pharetra egestas. Ac id sagittis at morbi interdum nibh diam sagittis et.
                        </p>
                        <br>
                        <p class=" text-zinc-600    dark:text-[#ACB5BD] text-xl font-light font-['Poppins'] leading-[29.20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at
                            justo. Nulla odio nequesg gravida in pharetra egestas.
                        </p>
                    </div>
                    <img :src="chart" alt="" srcset="">
                </div>
                <div class="mt-[100px] lg:mt-[194px] mb-[107px] lg:mb-[172px]">
                    <div class="flex flex-col justify-center items-center">
                        <div
                            class="max-w-[201px] h-[63px] px-[50px] py-[18px] bg-sky-100 rounded-[39px] justify-center items-center gap-2.5 inline-flex mb-[28px]">
                            <p class="text-blue-600 text-lg font-normal font-['Poppins']">Our values
                            </p>

                        </div>
                        <h3 class="max-w-[456px] text-center text-neutral-800   dark:text-[#F5F5F5]  text-2xl px-[25px] lg:px-0 lg:text-[32px] font-medium font-['Poppins'] leading-9 mb-[82px]">The
                            story and values behind our company</h3>
                    </div>
                    <div class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-[80px]">
                        <div class="flex flex-col lg:flex-row  w-full lg:w-[45%] gap-[30px]"
                        v-for="(value, index) in valuesData" :key="index"
                        >
                            <img class="max-w-[100px] max-h-[100px] lg:max-w-[120px] lg:max-h-[120px]" :src="value.img" alt="" srcset="">
                            <div>
                                <h6 class="text-neutral-800   dark:text-[#F5F5F5] text-2xl font-medium font-['Poppins'] leading-relaxed">
                                    {{value.title}}</h6>
                                <p class=" text-zinc-600    dark:text-[#ACB5BD] text-base font-light font-['Poppins'] leading-normal">Long
                                    {{ value.description }}</p>
                            </div>
                        </div>
                    
                    </div>

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
    data(){

        return {
            valuesData: [
                {
                    id: 1,
                    img: Innovation,
                    title: "Boleto Bancário",
                    description: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
                },
                {
                    id: 2,
                    img: teamwork,
                    title: "Team work",
                    description: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
                },
                {
                    id: 3,
                    img: Excellence,
                    title: "Excellence",
                    description: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
                },
                {
                    id: 4,
                    img: Responsibility,
                    title: "Responsibility",
                    description: "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
                }
             
            ]
        }
        
    },
    setup() {
    onMounted(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
    });
  },
 
};


</script>