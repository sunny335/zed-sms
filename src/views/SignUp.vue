
<script setup>
import { RouterLink } from 'vue-router'
import google from '../assets/img/google.png';

</script>
<template>
    <!--
      Heads up! 👋
    
      Plugins:
        - @tailwindcss/forms
    -->

    <section class="bg-white py-10">
        <div class="flex justify-evenly items-center">
            <div>
                <img src="../assets/img/SignUp.png" alt="" srcset="">
            </div>
            <div class="max-w-[534px]">
                <div class="flex justify-between items-center gap-[120px]">
                    <p class="text-zinc-600 text-[32px] font-medium font-['Poppins']">Create an account</p>
                    <RouterLink class="text-neutral-800 text-base font-light font-['Poppins'] underline" to="/">Log in
                        instead</RouterLink>
                </div>
                <form class="mt-10">
                    <div>
                        <label class="text-zinc-600 text-base font-normal font-['Poppins'] block mb-2">User Name</label>
                        <input type="text" class="w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="mt-5">
                        <label class="text-zinc-600 text-base font-normal font-['Poppins'] block mb-2">Email</label>
                        <input type="email" class="w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="mt-5">

                        <div class="flex justify-between items-center">
                            <label class="text-zinc-600 text-base font-normal font-['Poppins'] block mb-2">Password</label>
                            <div class="flex items-center gap-2">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
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
                                <span>
                                    Hide
                                </span>

                            </div>
                        </div>
                        <input type="password" class="w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="mt-5">

                        <div class="flex justify-between items-center">
                            <label class="text-zinc-600 text-base font-normal font-['Poppins'] block mb-2">Confirm
                                Password</label>
                            <div class="flex items-center gap-2">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
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
                                <span>
                                    Hide
                                </span>

                            </div>
                        </div>
                        <input type="password" class="w-full h-14 relative rounded-xl border border-zinc-600" />
                    </div>
                    <div class="">
                        <label for="" class="flex gap-4 items-start my-5">
                            <input type="checkbox" class="border-gray-300 rounded h-5 w-5 mt-1" />

                            <div><span class="text-zinc-600 text-base font-normal font-['Poppins']">By creating an account,
                                    I agree to our </span><span
                                    class="text-neutral-800 text-base font-normal font-['Poppins'] underline">Terms of
                                    use</span><span class="text-zinc-600 text-base font-normal font-['Poppins']"> <br />and
                                </span><span
                                    class="text-neutral-800 text-base font-normal font-['Poppins'] underline">Privacy
                                    Policy</span><span
                                    class="text-zinc-600 text-base font-normal font-['Poppins'] underline"> </span></div>
                        </label>
                    </div>
                    <button
                        class="max-w-[534px] h-[70px] pl-[173px] pr-[172px] pt-[19.50px] pb-[20.50px] bg-blue-600 rounded-[14px] justify-center items-center inline-flex">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="text-white text-xl font-normal font-['Poppins']">Create an account</div>
                        </div>
                    </button>
                </form>
                <div class="my-[30px]">
                    <div class="w-[534px] h-[33px] justify-start items-center gap-[23px] inline-flex">
                        <div class="grow shrink basis-0 h-0.5 bg-zinc-200"></div>
                        <div class="text-zinc-600 text-2xl font-normal font-['Poppins']">OR</div>
                        <div class="grow shrink basis-0 h-0.5 bg-zinc-200"></div>
                    </div>
                    <div
                        class="max-w-[534px] max-h-16 pl-[139.50px] pr-[137.5px] pt-[16.50px] pb-[17.50px] bg-white rounded-[14px] border border-zinc-600 justify-center items-center inline-flex cursor-pointe my-6">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="w-6 h-6 relative">
                                <img :src="google" alt="">
                            </div>
                            <div class="text-zinc-600 text-xl  font-normal font-['Poppins']">Continue with Google</div>
                        </div>
                    </div>
                    <div
                        class="max-w-[534px] max-h-16 pl-[160.50px] pr-[160.50px] pt-[16.50px] pb-[17.50px] bg-white rounded-[14px] border border-zinc-600 justify-center items-center inline-flex cursor-pointer">
                        <div class="self-stretch justify-center items-center gap-4 inline-flex">
                            <div class="text-zinc-600 text-xl font-normal font-['Poppins']">Continue with Others</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>