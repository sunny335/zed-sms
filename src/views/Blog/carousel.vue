

<template>
    <div class="pt-21 sm:max-w-xl md:max-w-full lg:max-w-[1192px] mb-[139px] lg:pt-[39px]">
        <swiper :navigation="true" :modules="modules" :slides-per-view="3" :space-between="50"
            class="mySwiper relative py-56 ">

            
            <swiper-slide v-for="(value, index) in blogImages1" :key="index">
                
             <RouterLink class="max-w-1/2 w-[50%] lg-w-auto lg:max-w-[360px] mb-[80px]" :to="'/blogs/' + value.id">

                <img :src="value.img" alt="" srcset="">
                <p
                    class="text-zinc-600 dark:text-gray-400 text-sm font-light font-[Poppins] leading-[18.20px] tracking-tight mt-[20px] mb-[8px]">
                    {{ value.publishDate }}</p>

                <h3
                    class="max-w-[360px] text-neutral-800 dark:text-white text-xl py-2 font-medium font-[Poppins] leading-relaxed tracking-tight truncate overflow-hidden">
                    {{ value.title }}</h3>
                <p
                    class="max-w-[360px] h-[47px] text-zinc-600  dark:text-gray-400  text-base font-light font-[Poppins] leading-normal mb-[8px] multiline">
                    {{ value.subTitle }}</p>
             </RouterLink>
            </swiper-slide>


        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


import { RouterLink } from 'vue-router'

import video1 from "../../assets/img/blog/video1.png"
import video2 from "../../assets/img/blog/video2.png"

import more1 from "../../assets/img/blog/more1.png"
import more2 from "../../assets/img/blog/more2.png"
import more3 from "../../assets/img/blog/more3.png"


// import required modules
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
            blogImages: [video1, video2, video1, video2, video1, video2],
            blogImages1: [
                {
                    id: 1,
                    img: more1,
                    publishDate: "13 Sept, 2021",
                    title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                },
                {
                    id: 2,
                    img: more2,
                    publishDate: "13 Sept, 2021",
                    title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                },
                {
                    id: 3,
                    img: more3,
                    publishDate: "13 Sept, 2021",
                    title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                },
                {
                    id: 4,
                    img: more1,
                    publishDate: "13 Sept, 2021",
                    title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                },
                {
                    id: 5,
                    img: more1,
                    publishDate: "13 Sept, 2021",
                    title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                },
                {
                    id: 6,
                    img: more1,
                    publishDate: "13 Sept, 2021",
                    title: "Porttitor pharetra, consectetur viverra est nisl a, vulputate id. ",
                    subTitle: "Lorem ipsum dolor sit amet, consectetur id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                },
            ],

        };
    },
};
</script>
<style>
.swiper-button-prev {

    position: absolute;
    top: 50px;
    left: 92%;

}




.swiper-button-next {

    position: absolute;
    top: 50px;
    right: 10px;
}

.swiper-button-prev::after {
    content: " ";

    background-image: url(../../assets/img/about/ArrowLeft.svg);
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}



.swiper-button-next::after {
    content: " ";

    background-image: url(../../assets/img/about/ArrowRight.svg);
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.swiper {
    padding-top: 100px;
}

.swiper-wrapper{}

@media (max-width: 767px) {
    .swiper-slide{
        max-width: 50% !important;
        width: 159px !important;
        margin-right: 24px !important;
    }

    .swiper-button-prev {


left: 76%;

}
}
</style>
  