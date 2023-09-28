
<script setup>
import { RouterLink } from 'vue-router'
import google from '../assets/img/google.png';

</script>
<template>
    <section
        class="bg-white dark:bg-[#070F24]  py-6 lg:py-10 px-4 pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 lg:pt-[84px] ">
        <div class="flex-col-reverse flex lg:flex-row justify-evenly items-center">
            <div class="py-[130px] lg:py-0 mx-6">
                <img src="../assets/img/SignUp.png" alt="" srcset="">
            </div>
            <div class="max-w-[330px] lg:max-w-[534px]">
                <div class="flex-col flex lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-0 lg:gap-[120px]">
                    <p class="text-zinc-600 dark:text-white text-2xl lg:text-[32px] font-medium font-['Poppins'] pb-[14px] lg:pb-0">Create
                        an account</p>
                    <RouterLink class="text-neutral-800  dark:text-white text-base font-light font-['Poppins'] underline " to="/login">Log in
                        instead</RouterLink>
                </div>
                <form class="mt-10">
                    <div>
                        <label class="text-zinc-600  dark:text-white text-base font-normal font-['Poppins'] block mb-2">User Name</label>
                        <input type="text" class="px-[16px] dark:bg-transparent py-[8px] w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="mt-5">
                        <label class="text-zinc-600  dark:text-white text-base font-normal font-['Poppins'] block mb-2">Email</label>
                        <input type="email" class="px-[16px]  dark:bg-transparent py-[8px] w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="mt-5">

                        <div class="flex justify-between items-center">
                            <label class="text-zinc-600  dark:text-white text-base font-normal font-['Poppins'] block mb-2">Password</label>
                            <div class="flex items-center gap-2 cursor-pointer w-[72px] justify-between"
                                    v-on:click="handlePasswordShow(!passwordShow)">
                                    <svg v-if="passwordShow == true" width="19" height="17" viewBox="0 0 19 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 1">
                                            <path id="Vector"
                                                d="M17.0194 0.881092L16.2835 0.145149C16.0755 -0.0628416 15.6915 -0.0308325 15.4515 0.257113L12.8913 2.80108C11.7392 2.30514 10.4754 2.06514 9.14731 2.06514C5.19519 2.08107 1.77141 4.38504 0.12329 7.69725C0.0272626 7.90524 0.0272626 8.16117 0.12329 8.33716C0.891223 9.90518 2.04329 11.2012 3.4833 12.1772L1.3873 14.3051C1.1473 14.5451 1.11529 14.9291 1.27534 15.1371L2.01128 15.8731C2.21928 16.081 2.60326 16.049 2.84326 15.7611L16.8912 1.71321C17.1952 1.47334 17.2272 1.08938 17.0192 0.881366L17.0194 0.881092ZM9.9953 5.71298C9.72329 5.64896 9.43534 5.56901 9.16332 5.56901C7.80327 5.56901 6.71538 6.65703 6.71538 8.01694C6.71538 8.28895 6.7794 8.57689 6.85935 8.84892L5.78724 9.90495C5.46728 9.34499 5.2913 8.72089 5.2913 8.01697C5.2913 5.88899 7.00332 4.17697 9.1313 4.17697C9.83536 4.17697 10.4593 4.35295 11.0193 4.67291L9.9953 5.71298Z"
                                                fill="#495057" />
                                            <path id="Vector_2"
                                                d="M18.1714 7.69743C17.6114 6.57738 16.8753 5.56945 15.9634 4.75342L12.9874 7.69743V8.01738C12.9874 10.1454 11.2754 11.8574 9.14739 11.8574H8.82744L6.93945 13.7454C7.64351 13.8893 8.37946 13.9854 9.09946 13.9854C13.0516 13.9854 16.4754 11.6814 18.1235 8.35325C18.2675 8.12918 18.2675 7.90527 18.1714 7.69726L18.1714 7.69743Z"
                                                fill="#495057" />
                                        </g>
                                    </svg>
                                    <svg v-if="passwordShow == false" xmlns="http://www.w3.org/2000/svg" height="17" width="19" viewBox="0 0 612 612"
                                        xml:space="preserve">

                                        <path
                                            d="M609.608 315.426a19.767 19.767 0 0 0 0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72S60.857 188.931 2.393 296.573a19.767 19.767 0 0 0 0 18.853C60.858 423.069 174.892 496.147 306 496.147s245.143-73.078 303.608-180.721zM306 451.855c-80.554 0-145.855-65.302-145.855-145.855S225.446 160.144 306 160.144 451.856 225.446 451.856 306 386.554 451.855 306 451.855z"
                                            fill="#495057" />
                                        <path
                                            d="M306 231.67c-6.136 0-12.095.749-17.798 2.15 5.841 6.76 9.383 15.563 9.383 25.198 0 21.3-17.267 38.568-38.568 38.568-9.635 0-18.438-3.541-25.198-9.383a74.513 74.513 0 0 0-2.15 17.798c0 41.052 33.279 74.33 74.33 74.33s74.33-33.279 74.33-74.33S347.052 231.67 306 231.67z"
                                            fill="#495057" />

                                    </svg>
                                    <span class="pl-1">
                                        {{ passwordShow ? "Hide" : "Show" }}
                                    </span>

                                </div>
                        </div>
                        <input :type="passwordShow ? 'password' : 'text'" class="px-[16px] py-[8px]  dark:bg-transparent w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="mt-5">

                        <div class="flex justify-between items-center">
                            <label class="text-zinc-600  dark:text-white text-base font-normal font-['Poppins'] block mb-2">Confirm
                                Password</label>
                                <div class="flex items-center gap-2 cursor-pointer w-[72px] justify-between"
                                    v-on:click="handlePasswordShow(!passwordShow)">
                                    <svg v-if="passwordShow == true" width="19" height="17" viewBox="0 0 19 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 1">
                                            <path id="Vector"
                                                d="M17.0194 0.881092L16.2835 0.145149C16.0755 -0.0628416 15.6915 -0.0308325 15.4515 0.257113L12.8913 2.80108C11.7392 2.30514 10.4754 2.06514 9.14731 2.06514C5.19519 2.08107 1.77141 4.38504 0.12329 7.69725C0.0272626 7.90524 0.0272626 8.16117 0.12329 8.33716C0.891223 9.90518 2.04329 11.2012 3.4833 12.1772L1.3873 14.3051C1.1473 14.5451 1.11529 14.9291 1.27534 15.1371L2.01128 15.8731C2.21928 16.081 2.60326 16.049 2.84326 15.7611L16.8912 1.71321C17.1952 1.47334 17.2272 1.08938 17.0192 0.881366L17.0194 0.881092ZM9.9953 5.71298C9.72329 5.64896 9.43534 5.56901 9.16332 5.56901C7.80327 5.56901 6.71538 6.65703 6.71538 8.01694C6.71538 8.28895 6.7794 8.57689 6.85935 8.84892L5.78724 9.90495C5.46728 9.34499 5.2913 8.72089 5.2913 8.01697C5.2913 5.88899 7.00332 4.17697 9.1313 4.17697C9.83536 4.17697 10.4593 4.35295 11.0193 4.67291L9.9953 5.71298Z"
                                                fill="#495057" />
                                            <path id="Vector_2"
                                                d="M18.1714 7.69743C17.6114 6.57738 16.8753 5.56945 15.9634 4.75342L12.9874 7.69743V8.01738C12.9874 10.1454 11.2754 11.8574 9.14739 11.8574H8.82744L6.93945 13.7454C7.64351 13.8893 8.37946 13.9854 9.09946 13.9854C13.0516 13.9854 16.4754 11.6814 18.1235 8.35325C18.2675 8.12918 18.2675 7.90527 18.1714 7.69726L18.1714 7.69743Z"
                                                fill="#495057" />
                                        </g>
                                    </svg>
                                    <svg v-if="passwordShow == false" xmlns="http://www.w3.org/2000/svg" height="17" width="19" viewBox="0 0 612 612"
                                        xml:space="preserve">

                                        <path
                                            d="M609.608 315.426a19.767 19.767 0 0 0 0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72S60.857 188.931 2.393 296.573a19.767 19.767 0 0 0 0 18.853C60.858 423.069 174.892 496.147 306 496.147s245.143-73.078 303.608-180.721zM306 451.855c-80.554 0-145.855-65.302-145.855-145.855S225.446 160.144 306 160.144 451.856 225.446 451.856 306 386.554 451.855 306 451.855z"
                                            fill="#495057" />
                                        <path
                                            d="M306 231.67c-6.136 0-12.095.749-17.798 2.15 5.841 6.76 9.383 15.563 9.383 25.198 0 21.3-17.267 38.568-38.568 38.568-9.635 0-18.438-3.541-25.198-9.383a74.513 74.513 0 0 0-2.15 17.798c0 41.052 33.279 74.33 74.33 74.33s74.33-33.279 74.33-74.33S347.052 231.67 306 231.67z"
                                            fill="#495057" />

                                    </svg>
                                    <span class="pl-1">
                                        {{ passwordShow ? "Hide" : "Show" }}
                                    </span>

                                </div>
                        </div>
                        <input :type="passwordShow ? 'password' : 'text'" class="px-[16px]  dark:bg-transparent py-[8px] w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="">
                        <label for="" class="flex justify-start items-start my-5">
                            <div class="inline-flex items-center">
                                <label class="relative flex cursor-pointer items-center rounded-full p-3" for="checkbox-3"
                                    data-ripple-dark="true">
                                    <input type="checkbox"
                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10"
                                        id="checkbox-3" defaultChecked />
                                    <div
                                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20"
                                            fill="currentColor" stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>

                            <div><span class="text-zinc-600  dark:text-white text-sm lg:text-base font-normal font-['Poppins']">By creating
                                    an account,I agree to our </span>
                                <span
                                    class="text-neutral-800  dark:text-white text-sm lg:text-base font-normal font-['Poppins'] underline">Terms
                                    of
                                    use</span>
                                <span class="text-zinc-600  dark:text-white text-sm lg:text-base font-normal font-['Poppins']">
                                    and
                                </span>
                                <span
                                    class="text-neutral-800  dark:text-white text-sm lg:text-base font-normal font-['Poppins'] underline">Privacy
                                    Policy</span><span
                                    class="text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] underline">
                                </span>
                            </div>
                        </label>
                    </div>
                    <button
                        class="max-w-[534px] w-full h-[70px]  pt-[19.50px] pb-[20.50px] bg-[#0057FF] rounded-[14px] justify-center items-center inline-flex">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="text-white text-xl font-normal font-['Poppins']">Create an account</div>
                        </div>
                    </button>
                </form>
                <div class="my-[30px]">
                    <div class="flex  items-center justify-center ">
                        <div class="w-[226.50px] h-[1px] bg-gray-400"></div>
                        <p class=" text-neutral-800  dark:text-white text-base font-normal font-['Poppins'] px-6">OR</p>
                        <div class="w-[226.50px] h-[1px] bg-gray-400"></div>
                    </div>
                    <button
                        class="max-w-[534px] w-full max-h-16  pt-[16.50px] pb-[17.50px] bg-white  dark:bg-slate-900 rounded-[14px] border border-zinc-600 justify-center items-center inline-flex cursor-pointe my-6">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="google" alt="">
                            </div>
                            <div class="text-zinc-600  dark:text-white  text-xl  font-normal font-['Poppins']">Continue with Google</div>
                        </div>
                    </button>
                    <button
                        class="max-w-[534px] w-full max-h-16 pt-[16.50px] pb-[17.50px] bg-white   dark:bg-slate-900 rounded-[14px] border border-zinc-600 justify-center items-center inline-flex cursor-pointer">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="text-zinc-600  dark:text-white text-xl font-normal font-['Poppins']">Continue with Others</div>
                        </div>
                    </button>
                </div>

            </div>
        </div>
</section>

</template>

<script>

const Theme = localStorage.getItem('Theme');
export default {
    components: {

    },
    data() {
        return {
            passwordShow: true,
        };
    },

    methods: {

        handlePasswordShow(v) {

            this.passwordShow = v
            console.log("handlePasswordShow", this.passwordShow = v);

        },

    },
};
</script>