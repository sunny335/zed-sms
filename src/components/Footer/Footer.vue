<script setup>
import playStore from '../../assets/img/Google Play Black Borde.png';
import appStore from '../../assets/img/App Store Black Borde.png';
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="bg-neutral-100 dark:bg-[#09132C]">
        <div
            class="min-h-[276.62px] lg:px-8 mx-auto py-[60px] sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24  bg-neutral-100 dark:bg-[#09132C]">
            <div class="flex flex-wrap md:flex lg:grid justify-around gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
                <div class="sm:col-span-2 flex flex-col items-center lg:items-start lg:mr-[263px] w-full ">
                    <a href="/" aria-label="Go home" title="Company" class="flex flex-col items-center">
                        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0_43_1731" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="44" height="45">
                                <rect y="0.500977" width="44" height="43.614" fill="url(#pattern0)" />
                            </mask>
                            <g mask="url(#mask0_43_1731)">
                                <rect x="-4.92114" y="-3.74463" width="63.6842" height="52.1053" fill="#0057FF" />
                            </g>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_43_1731" transform="scale(0.00219298 0.00221239)" />
                                </pattern>
                                <image id="image0_43_1731" width="456" height="452"
                                    xlink:href="data:image/png;base64,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" />
                            </defs>
                        </svg>


                        <span
                            class="ml-2 text-xl font-bold tracking-wide text-gray-800  dark:text-white uppercase pt-4">ZEDSMS</span>
                    </a>
                    <div class="flex justify-center items-center gap-4 mt-3">
                        <a href="" class="darkIcon">

                            <svg  width="16" height="17" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_39_4024)">
                                    <path
                                        d="M5.6437 5.24909H3.76245V7.75742H5.6437V15.2824H8.77911V7.75742H11.0366L11.2875 5.24909H8.77911V4.18304C8.77911 3.61867 8.90454 3.36784 9.46894 3.36784H11.2875V0.232422H8.90454C6.64704 0.232422 5.6437 1.23576 5.6437 3.11701V5.24909Z"
                                        fill="#1E2329" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_39_4024">
                                        <rect width="15.05" height="15.9906" fill="white"
                                            transform="translate(0 0.119629)" />
                                    </clipPath>
                                </defs>
                            </svg>

                         


                        </a>
                        <a href="" class="darkIcon">
                            <svg  width="16" height="17" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_39_4028)">
                                    <path
                                        d="M4.73309 13.7147C10.4126 13.7147 13.5185 9.13118 13.5185 5.15681C13.5185 5.02659 13.5157 4.89704 13.5096 4.76798C14.1125 4.34347 14.6366 3.81357 15.05 3.21065C14.4967 3.45008 13.9014 3.61132 13.2768 3.68402C13.9143 3.31169 14.4038 2.72244 14.6347 2.02015C14.038 2.36479 13.3773 2.61523 12.6742 2.75029C12.1105 2.16571 11.308 1.80005 10.4201 1.80005C8.71473 1.80005 7.33183 3.14713 7.33183 4.8075C7.33183 5.0436 7.35905 5.27303 7.41177 5.49329C4.84572 5.36774 2.57015 4.17072 1.0474 2.35095C0.781916 2.79531 0.629059 3.31186 0.629059 3.86259C0.629059 4.90604 1.17425 5.82727 2.00323 6.36633C1.49673 6.35116 1.02087 6.21543 0.604752 5.99001C0.604068 6.00251 0.604068 6.01518 0.604068 6.02836C0.604068 7.48514 1.66859 8.70133 3.08128 8.97694C2.82195 9.0458 2.5491 9.08282 2.26735 9.08282C2.06844 9.08282 1.87502 9.06348 1.68691 9.02863C2.07992 10.2234 3.21993 11.0931 4.5715 11.1177C3.51451 11.9246 2.18313 12.4052 0.736555 12.4052C0.4875 12.4052 0.241695 12.3914 0 12.3635C1.36647 13.2166 2.98901 13.7147 4.73309 13.7147Z"
                                        fill="#1E2329" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_39_4028">
                                        <rect width="15.05" height="15.9906" fill="white"
                                            transform="translate(0 0.119629)" />
                                    </clipPath>
                                </defs>
                            </svg>

                           

                        </a>
                        <a href="" class="darkIcon">
                            <svg  width="16" height="17" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_39_4032)">
                                    <path
                                        d="M3.34997 2.3487C3.34997 3.18272 2.69586 3.83803 1.86334 3.83803C1.03083 3.83803 0.376709 3.18272 0.376709 2.3487C0.376709 1.51468 1.03083 0.859375 1.86334 0.859375C2.69586 0.859375 3.34997 1.51468 3.34997 2.3487ZM3.34997 5.02948H0.376709V14.5612H3.34997V5.02948ZM8.10719 5.02948H5.13393V14.5612H8.10719V9.55705C8.10719 6.75709 11.6751 6.51881 11.6751 9.55705V14.5612H14.6484V8.54428C14.6484 3.83802 9.35596 4.01674 8.10719 6.34009V5.02948Z"
                                        fill="#1E2329" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_39_4032">
                                        <rect width="15.05" height="15.9906" fill="white"
                                            transform="translate(0 0.119629)" />
                                    </clipPath>
                                </defs>
                            </svg>


                           


                        </a>
                        <a href="" class="darkIcon">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_39_4036)">
                                    <path
                                        d="M14.7352 4.24011C14.6501 3.91985 14.4825 3.62754 14.249 3.39246C14.0154 3.15739 13.7242 2.98779 13.4046 2.90066C12.2312 2.58398 7.525 2.58398 7.525 2.58398C7.525 2.58398 2.81874 2.58398 1.64484 2.90066C1.32528 2.98795 1.03425 3.15761 0.800834 3.39266C0.567424 3.62772 0.399823 3.91995 0.314796 4.24011C0 5.42154 0 7.88598 0 7.88598C0 7.88598 0 10.3504 0.314796 11.5318C0.399819 11.8521 0.567495 12.1444 0.801031 12.3795C1.03457 12.6146 1.32576 12.7842 1.64546 12.8713C2.81874 13.188 7.525 13.188 7.525 13.188C7.525 13.188 12.2312 13.188 13.4051 12.8713C13.7248 12.7842 14.0162 12.6146 14.2496 12.3796C14.4832 12.1444 14.6509 11.8522 14.7358 11.5318C15.05 10.3504 15.05 7.88598 15.05 7.88598C15.05 7.88598 15.05 5.42154 14.7352 4.24011ZM5.98551 10.1234V5.64854L9.91917 7.88598L5.98551 10.1234Z"
                                        fill="#1E2329" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_39_4036">
                                        <rect width="15.05" height="15.9906" fill="white"
                                            transform="translate(0 0.119629)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            


                        </a>
                    </div>

                </div>
                <div class="space-y-2 text-sm lg:w-full  sm:w-[48%] md:w-[30%]">
                    <p class="text-blue-600 text-lg font-medium font-['Inter'] leading-7">Information</p>
                    <div class="flex">

                        <RouterLink to="/blogs"
                            class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">
                            Blog</RouterLink>

                    </div>
                    <div class="flex">
                        <RouterLink to="/tutorial"
                            class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">
                            Tutorials</RouterLink>

                    </div>
                    <div class="flex">
                        <a href=""
                            class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">Help
                            Desk</a>
                    </div>
                </div>
                <div class="space-y-2 text-sm lg:w-full sm:w-[48%] md:w-[30%]">
                    <p class="text-blue-600 text-lg font-medium font-['Inter'] leading-7">Company</p>
                    <div class="flex">

                        <RouterLink to="/about"
                            class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">
                            About</RouterLink>

                    </div>
                    <div class="flex">
                        <RouterLink to="/contact-us"
                            class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">
                            Contact</RouterLink>

                    </div>
                    <div class="flex">
                        <RouterLink to="/privacy-policy"
                            class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">
                            Privacy & Policy</RouterLink>
                    </div>
                <div class="flex">
                    <RouterLink to="/terms-condition"
                        class="text-neutral-800  dark:text-white text-base font-normal font-['Inter'] leading-normal">
                        Terms & condition</RouterLink>
                </div>
            </div>
            <div>
                <div
                    class="space-y-2 text-sm w-full flex flex-col justify-center items-start lg:items-center gap-3 px-4">
                    <p class="text-blue-600 text-lg font-medium font-['Inter'] leading-7">Download App</p>
                    <div class="flex  lg:flex-col items-center gap-3">

                        <a href="#" class="max-w-[46%] md:max-w-[100%]">
                            <img :src="appStore" alt="play-store" />

                        </a>
                        <a href="#" class="max-w-[46%] md:max-w-[100%]">
                            <img :src="playStore" alt="app-store" />
                        </a>

                    </div>


                </div>
            </div>
        </div>

    </div>
</div></template>

<script>
const Theme = localStorage.getItem('Theme');

</script>


<style>




body.dark .darkIcon path {
    fill:white;
}
body.dark .darkCircle circle{
    stroke:white;
}


</style>