<script setup>

import { RouterLink } from 'vue-router'
import img1 from "../../assets/img/blog/1.png"
import img2 from "../../assets/img/blog/2.png"
import img3 from "../../assets/img/blog/3.png"
import img4 from "../../assets/img/blog/4.png"
import img5 from "../../assets/img/blog/5.png"
import img6 from "../../assets/img/blog/6.png"
import largeImg6 from "../../assets/img/blog/largeImg6.png"
import chart from "../../assets/img/blog/chart.png"

</script>
<template>
    <section>
        <div>
            <SectionHeader title="Blog" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
                            interdum ullamcorper sed pharetra sene." />


            <div class="px-4 pt-[47px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 mb-[66px] lg:mb-[58px] lg:px-8  lg:pt-[125px]">
                <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    <RouterLink class="max-w-[360px] mb-[30px] lg:mb-[80px]" v-for="(blog, index) in blogsData" :key="index"
                    v-on:click="selectedBlogPage(blog.id)"
                    :to="'/blogs/' + blog.id"
                    >
                        <img class="max-w-[159.50px] min-h-[140px] lg:max-w-[360px] lg:min-h-60 rounded-[18px] lg:rounded-[30px]" :src="blog.blogBanner" alt="" srcset="">
                        <p
                            class="text-zinc-600 dark:text-gray-400 text-sm font-light font-[Poppins] leading-[18.20px] tracking-tight mt-[20px] mb-[8px]">
                            {{blog.publishDate}}</p>
                        <h3
                            class="max-w-[360px] text-neutral-800 dark:text-white py-2 text-base lg:text-xl font-medium font-[Poppins] leading-relaxed tracking-tight truncate overflow-hidden">
                            {{blog.blogTItle}}</h3>
                        <p
                            class="max-w-[360px] h-[47px] text-zinc-600 dark:text-gray-400 text-sm lg:text-base font-light font-[Poppins] leading-normal mb-[8px] multiline">
                           {{ blog.blogSubTItle }}</p>
                    </RouterLink>
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
            blogsData: [
                {
                    id: "01",
                    blogBanner: img1,
                    publishDate: "14 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle:"Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
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
                    publishDate: "14 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle:"Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
              
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
                    publishDate: "13 Jun, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle:"Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
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
                    publishDate: "20 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle:"Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
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
                    publishDate: "23 Sept, 2021",
                    blogTItle: "Adipiscing lacus dui rutrum quam. In morbi facilisis elit.",
                    blogSubTItle:"Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
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
                    blogSubTItle:"Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in pharetra egestas.",
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
        }

    },
    methods: {

        selectedBlogPage(id) {
       
        },


    },

};


</script>
<style>
.multiline {
    display: block;
    display: -webkit-box;
    margin: 0 auto;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>