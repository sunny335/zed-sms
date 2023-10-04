<script setup>

import { RouterLink } from 'vue-router'

import img6 from "../../assets/img/blog/6.png"
import video1 from "../../assets/img/blog/video1.png"
import video2 from "../../assets/img/blog/video2.png"
import video3 from "../../assets/img/blog/video3.png"
import video4 from "../../assets/img/blog/video4.png"
import video5 from "../../assets/img/blog/video5.png"
import video6 from "../../assets/img/blog/video6.png"

import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

</script>
<template>
    <section>
        <div>
            <SectionHeader title="Tutorial" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
                            interdum ullamcorper sed pharetra sene." />


            <div
                class="px-4 pt-[47px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 pb-[66px] lg:pb-[139px] lg:pt-[90px]">
                <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">

                    <div v-for="(videoData, index) in VideosData" :key="index" class="mt-2 lg:mt-[70px]">
                        <div class="relative">
                            <img class="max-w-[159.50px] min-h-[140px] lg:max-w-[360px] lg:h-60 rounded-[30px]"
                                :src="videoData.videoThumbnail" />
                            <div v-on:click="handleModalOpen(true)"
                                class="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center cursor-pointer">
                                <svg class="" width="42" height="42" viewBox="0 0 42 42" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_430_33099)">
                                        <path
                                            d="M23.7183 19.455C24.7607 20.1281 24.7607 21.8706 23.7183 22.5437L17.4247 26.6078C16.4117 27.262 15.1667 26.4105 15.1667 25.0635L15.1667 16.9352C15.1667 15.5882 16.4117 14.7367 17.4247 15.3909L23.7183 19.455Z"
                                            stroke="white" />
                                        <path d="M26.8333 16.916V25.0827" stroke="white" stroke-linecap="round" />
                                    </g>
                                    <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="white" />
                                    <defs>
                                        <clipPath id="clip0_430_33099">
                                            <rect width="14" height="14" fill="white" transform="translate(14 14)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>



                        </div>
                        <h3
                            class="max-w-[360px] text-neutral-800 dark:text-neutral-100 text-xl font-medium font-['Poppins'] truncate overflow-hidden leading-relaxed tracking-tight mt-[18px]">
                            {{ videoData.videoTitle }} </h3>
                        <p
                            class="max-w-[360px] h-[47px] text-zinc-600 text-sm lg:text-base font-light font-['Poppins'] leading-normal mb-[8px] multiline-tutorial block lg:hidden">
                            {{ videoData.videoDescription }}</p>
                    </div>
                    <div>

                    </div>

                </div>
            </div>

        </div>


    </section>
    <TransitionRoot as="template" :show="OpenModal">
        <Dialog as="div" class="relative z-[9999999]" @close="OpenModal = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel
                            class=" relative transform overflow-hidden rounded-lg lg:rounded-[30px] bg-neutral-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-[951px]">
                            <div
                                class="max-w-[250px] max-h-[161px] rounded-2xl   lg:max-w-[951px] lg:min-h-[557px] w-full lg:rounded-[30px] overflow-hidden">
                                <iframe
                                    class="max-w-[250px] max-h-[161px] rounded-2xl   lg:max-w-[951px] lg:min-h-[557px] w-full"
                                    src="https://www.youtube.com/embed/9m4HUt9MAzc"
                                    title="The End Of Node.js? My Honest Thoughts" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
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
            OpenModal: false,
            VideosData: [
                {
                    id: 1,
                    videoThumbnail: video1,
                    videoTitle: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    videoDescription: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas."
                },
                {
                    id: 2,
                    videoThumbnail: video2,
                    videoTitle: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ", videoDescription: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas."
                },
                {
                    id: 3,
                    videoThumbnail: video3,
                    videoTitle: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ", videoDescription: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas."
                },
                {
                    id: 4,
                    videoThumbnail: video4,
                    videoTitle: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ", videoDescription: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas."
                },
                {
                    id: 5,
                    videoThumbnail: video5,
                    videoTitle: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ", videoDescription: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas."
                },
                {
                    id: 6,
                    videoThumbnail: video6,
                    videoTitle: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ", videoDescription: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas."
                },
            ]
        }

    },

    methods: {


        handleModalOpen(open) {
            console.log("modal", open);
            this.OpenModal = open;
        },


    },
    setup() {
        onMounted(() => {
            window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
        });
    },

};


</script>
<style>


@media (max-width: 767px){
    .multiline-tutorial {
    display: block;
    display: -webkit-box;
    margin: 0 auto;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

}


</style>