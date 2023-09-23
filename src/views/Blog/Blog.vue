<script setup>

import { RouterLink } from 'vue-router'
import img1 from "../../assets/img/blog/1.png"
import img2 from "../../assets/img/blog/2.png"
import img3 from "../../assets/img/blog/3.png"
import img4 from "../../assets/img/blog/4.png"
import img5 from "../../assets/img/blog/5.png"
import img6 from "../../assets/img/blog/6.png"
import more1 from "../../assets/img/blog/more1.png"
import more2 from "../../assets/img/blog/more2.png"
import more3 from "../../assets/img/blog/more3.png"
import largeImg6 from "../../assets/img/blog/largeImg6.png"
import chart from "../../assets/img/blog/chart.png"


</script>
<template>
    <section>
        <div>



            <div class="px-4 pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] mb-[52px] lg:mb-[52px] md:px-24 lg:px-8 lg:pt-[39px]">
                <!-- Display filtered blogs based on userId -->
                <div v-for="blog in filteredBlogs" :key="blog.id">

                    <nav aria-label="Breadcrumb">
                        <ol class="flex items-start lg:items-center gap-1 text-sm text-gray-600">
                            <li>
                                <a href="#" class="block transition hover:text-gray-700"> Blog </a>
                            </li>

                            <li class="rtl:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </li>
                            <li>
                                <a href="#" class="block transition hover:text-gray-700"> {{ blog.blogTItle }} </a>
                            </li>






                        </ol>
                    </nav>

                    <div>
                        <img class="max-w-[317.47px] max-h-[174px] lg:max-w-[1128px] lg:max-h-[550px] rounded-[20px] lg:rounded-[50px] mt-[22px] lg:mt-[41px] mb-[59px]"
                            :src="blog.largeImg" />
                        <p
                            class="text-zinc-600 text-sm  lg:text-base font-normal font-['Poppins'] leading-tight tracking-tight">
                            {{ blog.publishDate }}</p>
                        <h1
                            class="max-w-[343px] lg:max-w-[1061px] text-neutral-800 text-2xl lg:text-4xl tracking-normal font-medium font-['Poppins'] leading-[31.20px] lg:leading-[46.80px] my-[18px]">
                            {{ blog.blogTItle }}</h1>
                        <p
                            class="text-zinc-600 text-base lg:text-xl font-normal font-['Poppins'] leading-relaxed tracking-tight">
                            Writer
                            : {{ blog.Writer }}</p>
                        <h2
                            class="max-w-[1038px] h-[60px] text-zinc-600 text-base lg:text-2xl font-normal font-['Poppins'] leading-[35.04px] mt-[36px] mb-[75px]">
                            {{ blog.blogSubTItle }}</h2>
                        <p
                            class="max-w-[1061px] text-zinc-600 text-sm lg:text-base font-light font-['Poppins'] leading-7 tracking-tight mb-[20px]">
                            {{ blog.subTitle1 }}</p>
                        <p
                            class="max-w-[1061px] text-zinc-600 text-sm lg:text-base font-light font-['Poppins'] leading-7 tracking-tight">
                            {{ blog.subTitle2 }}</p>
                        <!-- subBlogWithImg -->

                        <div v-for="(subBlogWithImg, index) in blog.subBlogWithImg" :key="index">
                            <div
                                class="mt-[30px] lg:mt-[83px] flex flex-col lg:flex-row justify-start items-center gap-[95px] lg:gap-[171px]">
                                <div>
                                    <h5
                                        class="text-neutral-800 text-sm lg:text-base font-medium font-['Inter'] leading-normal lg:leading-tight tracking-tight">
                                        {{ subBlogWithImg.subBlogTitle }}</h5>
                                    <p
                                        class="max-w-[513px] text-zinc-600 text-sm lg:text-base font-light font-['Poppins'] leading-7 tracking-tight mt-[14px] mb-[24px]">
                                        {{ subBlogWithImg.subBlogDescription }}</p>
                                    <div class="block lg:hidden">
                                        <p
                                            class="text-neutral-800 text-sm lg:text-base font-normal font-['Poppins'] leading-[34px]">
                                            <span class="text-xl lg:text-2xl">○ </span>{{ subBlogWithImg.subBlogFooter1 }}
                                        </p>
                                        <p
                                            class="text-neutral-800 text-sm lg:text-base font-normal font-['Poppins'] leading-[34px]">
                                            <span class="text-xl lg:text-2xl">○ </span>{{ subBlogWithImg.subBlogFooter2 }}
                                        </p>
                                    </div>
                                </div>

                                <img class="max-w-[291.29px] w-full h-[245.60px]" :src="subBlogWithImg.subBlogImg" alt="">
                            </div>

                            <p class="text-neutral-800 text-sm lg:text-base font-normal font-['Poppins'] leading-[34px]">
                                <span class="text-sm lg:text-2xl">○ </span>{{ subBlogWithImg.subBlogFooter1 }}
                            </p>
                            <p class="text-neutral-800 text-sm lg:text-base font-normal font-['Poppins'] leading-[34px]">
                                <span class="text-sm lg:text-2xl">○ </span>{{ subBlogWithImg.subBlogFooter2 }}
                            </p>

                        </div>

                        <p
                            class="max-w-[1061px] text-zinc-600 text-base font-light font-['Poppins'] leading-7 tracking-tight mt-[83px] mb-[20px]">
                            {{ blog.blogFooter1 }}</p>
                        <p
                            class="max-w-[1061px] text-zinc-600 text-base font-light font-['Poppins'] leading-7 tracking-tight">
                            {{ blog.blogFooter2 }}</p>
                    </div>
                    <!-- More -->

                    <carousel/>
                </div>
            </div>
        </div>


    </section>
</template>
  
<script>
import carousel from "../Blog/carousel.vue"
export default {
    components: {
        carousel,
    },
    data() {
        return {
            userId: null,
            // Add your blogsData array here
            blogsData: [
                {
                    id: "01",
                    blogBanner: img1,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "02",
                    blogBanner: img2,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",

                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "03",
                    blogBanner: img3,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "04",
                    blogBanner: img4,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "05",
                    blogBanner: img5,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "06",
                    blogBanner: img6,
                    largeImg: largeImg6,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",

                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },


            ],
            MoreBlogsData: [
                {
                    id: "01",
                    blogBanner: more1,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "02",
                    blogBanner: more2,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",

                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "03",
                    blogBanner: more3,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "04",
                    blogBanner: img4,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "05",
                    blogBanner: img5,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",
                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },
                {
                    id: "06",
                    blogBanner: img6,
                    largeImg: largeImg6,
                    publishDate: "13 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle: "Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
                    Writer: "Gwen Stacy",

                    subTitle1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    subTitle2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                    subBlogWithImg: [{
                        subBlogTitle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                        subBlogImg: chart,
                        subBlogDescription: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                        subBlogFooter1: "BrightEyes Institute:  Illuminating the Path to Better Vision",
                        subBlogFooter2: "VisionCare Pro:  Expert Care for Healthy Eyes.",

                    }],
                    blogFooter1: "Tincidunt et amet suspendisse venenatis neque ultricies eget. Aliquam duis amet amet lobortis. Elit risus ultrices gravida fringilla id odio tortor, vitae. In pretium purus ac potenti pretium ultrices. Aliquam velit scelerisque auctor in libero amet. Commodo faucibus consequat, dolor fringilla volutpat sed nibh. Amet, sit ut id eget. Egestas hendrerit.",
                    blogFooter2: "Tempor lorem diam curabitur ac in nec, elementum arcu. Risus habitasse in aliquet mattis augue augue ornare in. Orci eu maecenas purus diam, sapien facilisis. Nunc tincidunt urna amet, et, in turpis sagittis, tristique purus. Facilisis sagittis nec et egestas leo lorem diam aenean egestas. Cras vestibulum, purus pretium nisl. Diam eleifend egestas gravida cursus in.",
                },



            ]
            // ...
        };
    },
    computed: {
        filteredBlogs() {
            const userId = this.$route.params.id;
            // Use Array.filter to filter blogs based on userId
            return this.blogsData.filter(blog => blog.id === userId);
        },
    },

};
</script>
