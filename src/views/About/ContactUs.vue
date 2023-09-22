<script setup>

import ContactUs from "../../assets/img/about/ContactUs.png"
import blueTik from '../../assets/img/blueTik.svg';

</script>
<template>
    <section>
        <div>
            <SectionHeader title="Contact Us" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
                            interdum ullamcorper sed pharetra sene." />


            <div class="px-[28px] pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 lg:pt-[84px]">
                <div class="flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[100px] mt-[52px] mb-[60px] lg:mb-[153px]">
                    <img :src="ContactUs" alt="" srcset="">
                    <div class="max-w-[534px] w-full">
                        <form>
                            <label class="text-zinc-600 text-base font-normal font-['Poppins']">Email or Username</label>
                            <input class="max-w-[534px] w-full h-14 relative rounded-xl border border-gray-400 mt-[16px]" />

                            <div class="mt-[40px]">
                                <p class=" text-neutral-800 text-base font-semibold font-['Poppins'] leading-tight">Select
                                    Subject?</p>
                                <div class="my-[24px] lg:my-[36px]">
                                    <ul
                                        class="flex flex-col lg:flex-row justify-start mb-0 list-none  mx-auto gap-[20px] lg:gap-[35px] rounded-2xl overflow-hidden 	 ">
                                        <li class="max-w-[300px]-mb-px last:mr-0  text-center cursor-pointer">
                                            <a class="w-full  flex items-center  text-neutral-800 text-base font-normal font-['Poppins'] leading-tight "
                                                v-on:click="toggleTabs(1); selectMessage(1)">
                                                <img class="w-[14px] h-[14px] mr-[2px] lg:mr-[10px]" :src="blueTik" alt=""
                                                    srcset=""
                                                    v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                                <div class="w-[14px] h-[14px] rounded-full bg-slate-100 mr-[2px] lg:mr-[10px]"
                                                    v-bind:class="{ 'block': openTab !== 1, 'hidden': openTab === 1 }">
                                                </div>

                                                Account Balance
                                            </a>
                                        </li>
                                        <li class="max-w-[300px] -mb-px last:mr-0  text-center cursor-pointer">
                                            <a class="w-full flex items-center text-neutral-800 text-base font-normal font-['Poppins'] leading-tight "
                                                v-on:click="toggleTabs(2);">
                                                <img class="w-[14px] h-[14px] mr-[2px] lg:mr-[10px]" :src="blueTik" alt=""
                                                    srcset=""
                                                    v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                                <div class="w-[14px] h-[14px] rounded-full bg-slate-100 mr-[2px] lg:mr-[10px]"
                                                    v-bind:class="{ 'block': openTab !== 2, 'hidden': openTab === 2 }">
                                                </div>
                                                General Inquiry
                                            </a>
                                        </li>
                                        <li class="max-w-[300px] -mb-px last:mr-0  text-center cursor-pointer">
                                            <a class="w-full flex items-center text-neutral-800 text-base font-normal font-['Poppins'] leading-tight "
                                                v-on:click="toggleTabs(3);">
                                                <img class="w-[14px] h-[14px] mr-[2px] lg:mr-[10px]" :src="blueTik" alt=""
                                                    srcset=""
                                                    v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                                                <div class="w-[14px] h-[14px] rounded-full bg-slate-100 mr-[2px] lg:mr-[10px]"
                                                    v-bind:class="{ 'block': openTab !== 3, 'hidden': openTab === 3 }">
                                                </div>
                                                General Inquiry
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="mt-[40px]">
                                <label
                                    class="text-zinc-600 text-base font-normal font-['Poppins'] block mb-[16px]">Message</label>
                                <textarea
                                    class="max-w-[534px] w-full h-28 relative rounded-xl border border-gray-400"></textarea>

                            </div>
                            <div class="flex justify-end items-center mt-[30px]">
                                <button
                                    class="w-[257px] h-[60px] px-12 py-[18px] bg-blue-600 rounded-[14px] shadow justify-center items-center gap-2.5 inline-flex">
                                    <div class="text-center text-white text-base font-normal font-['Poppins']">Submit
                                        Message
                                    </div>
                                    <div class="w-[18px] h-[18px] relative">

                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.9768 11.7526L15.2641 7.8906C16.3887 4.51681 16.951 2.82992 16.0605 1.93946C15.1701 1.04901 13.4832 1.61131 10.1094 2.73591L6.2474 4.02324C3.52443 4.9309 2.16294 5.38473 1.77604 6.05024C1.40799 6.68334 1.40799 7.46527 1.77604 8.09837C2.16294 8.76388 3.52442 9.21771 6.2474 10.1254C6.68461 10.2711 6.90322 10.344 7.08595 10.4663C7.26303 10.5849 7.41515 10.737 7.5337 10.9141C7.65602 11.0968 7.72889 11.3154 7.87463 11.7526C8.78229 14.4756 9.23611 15.8371 9.90162 16.224C10.5347 16.592 11.3167 16.592 11.9498 16.224C12.6153 15.8371 13.0691 14.4756 13.9768 11.7526Z"
                                                stroke="white" />
                                            <path
                                                d="M12.1148 6.59222C12.3112 6.39804 12.3129 6.08147 12.1188 5.88512C11.9246 5.68878 11.608 5.68703 11.4117 5.88121L12.1148 6.59222ZM7.95315 10.708L12.1148 6.59222L11.4117 5.88121L7.24997 9.99703L7.95315 10.708Z"
                                                fill="white" />
                                        </svg>

                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script >
import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';

export default {
    components: {
        SectionHeader,
    },
    data() {

        return {
            openTab: 1,
      
        }

    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },




    },

};


</script>