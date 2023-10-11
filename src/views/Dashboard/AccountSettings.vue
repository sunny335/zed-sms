<script setup>
</script>

<template >
    <section class="flex justify-center items-center">
        <div
            class="max-w-full lg:max-w-[700px] w-full h-[656px] px-[38px] lg:px-20 pt-0 lg:pt-10 pb-[50px] bg-white  dark:bg-[#09132C] rounded-3xl shadow-none mx-auto lg:shadow-custom ml-0 mr-0 lg:ml-[80px] mb-[112px]">
            <h3 class="text-zinc-600  dark:text-[#F5F5F5]  text-xl font-medium font-[Poppins]">Account</h3>
            <form v-on:submit="onSubmit" class="mt-[26px] w-full">
                <div>

                    <label class="text-zinc-600 block dark:text-[#F5F5F5]  text-base font-normal font-[Poppins]">User
                        Name</label>
                    <input
                        class="max-w-full lg:max-w-[540px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                        type="text" placeholder="Ex: ahmad65" />


                </div>
                <div class="mt-[24px]">

                    <label
                        class="text-zinc-600 block dark:text-[#F5F5F5]  text-base font-normal font-[Poppins]">Email</label>
                    <input
                        class="max-w-full lg:max-w-[540px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                        type="email" placeholder="Ex: hello@zedsms.com" />


                </div>
                <div class="mt-[24px]">

                    <div class="flex justify-between items-center">

                        <label class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-[Poppins]"><span
                                class="hidden lg:inline-flex">Change
                                Password/</span>Old Password</label>

                        <div class="flex lg:hidden  items-center gap-2 cursor-pointer w-[72px] justify-between"
                            v-on:click="handleOldPasswordShow(!oldPasswordShow)">
                            <svg v-if="oldPasswordShow == true" width="19" height="17" viewBox="0 0 19 17" fill="none"
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
                            <svg v-if="oldPasswordShow == false" xmlns="http://www.w3.org/2000/svg" height="17" width="19"
                                viewBox="0 0 612 612" xml:space="preserve">

                                <path
                                    d="M609.608 315.426a19.767 19.767 0 0 0 0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72S60.857 188.931 2.393 296.573a19.767 19.767 0 0 0 0 18.853C60.858 423.069 174.892 496.147 306 496.147s245.143-73.078 303.608-180.721zM306 451.855c-80.554 0-145.855-65.302-145.855-145.855S225.446 160.144 306 160.144 451.856 225.446 451.856 306 386.554 451.855 306 451.855z"
                                    fill="#495057" />
                                <path
                                    d="M306 231.67c-6.136 0-12.095.749-17.798 2.15 5.841 6.76 9.383 15.563 9.383 25.198 0 21.3-17.267 38.568-38.568 38.568-9.635 0-18.438-3.541-25.198-9.383a74.513 74.513 0 0 0-2.15 17.798c0 41.052 33.279 74.33 74.33 74.33s74.33-33.279 74.33-74.33S347.052 231.67 306 231.67z"
                                    fill="#495057" />

                            </svg>
                            <span class="pl-1">
                                {{ oldPasswordShow ? "Hide" : "Show" }}
                            </span>

                        </div>

                    </div>
                    <input
                        class="max-w-full lg:max-w-[540px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                        :type="oldPasswordShow ? 'password' : 'text'" placeholder="***************" />


                </div>
                <div class="mt-[24px] flex gap-[24px] flex-col lg:flex-row w-full max-w-[540px]">
                    <div class="max-w-full  lg:max-w-[250px]">
                        <div class="flex justify-between items-center">
                            <label
                                class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-[Poppins] block">New
                                Password</label>
                            <div class="flex lg:hidden  items-center gap-2 cursor-pointer w-[72px] justify-between"
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
                                <svg v-if="passwordShow == false" xmlns="http://www.w3.org/2000/svg" height="17" width="19"
                                    viewBox="0 0 612 612" xml:space="preserve">

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

                        <input
                            class="max-w-full  lg:max-w-[270px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                            :type="passwordShow ? 'password' : 'text'" placeholder="***************" />


                    </div>
                    <div  class="max-w-full  lg:max-w-[250px]">
                        <div class="flex justify-between items-center">
                            <label
                                class="text-zinc-600  dark:text-[#F5F5F5]  text-base font-normal font-[Poppins] block">Confirm
                                Password</label>
                            <div class="flex lg:hidden  items-center gap-2 cursor-pointer w-[72px] justify-between"
                                v-on:click="handleConfirmPasswordShow(!confirmPasswordShow)">
                                <svg v-if="confirmPasswordShow == true" width="19" height="17" viewBox="0 0 19 17"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 1">
                                        <path id="Vector"
                                            d="M17.0194 0.881092L16.2835 0.145149C16.0755 -0.0628416 15.6915 -0.0308325 15.4515 0.257113L12.8913 2.80108C11.7392 2.30514 10.4754 2.06514 9.14731 2.06514C5.19519 2.08107 1.77141 4.38504 0.12329 7.69725C0.0272626 7.90524 0.0272626 8.16117 0.12329 8.33716C0.891223 9.90518 2.04329 11.2012 3.4833 12.1772L1.3873 14.3051C1.1473 14.5451 1.11529 14.9291 1.27534 15.1371L2.01128 15.8731C2.21928 16.081 2.60326 16.049 2.84326 15.7611L16.8912 1.71321C17.1952 1.47334 17.2272 1.08938 17.0192 0.881366L17.0194 0.881092ZM9.9953 5.71298C9.72329 5.64896 9.43534 5.56901 9.16332 5.56901C7.80327 5.56901 6.71538 6.65703 6.71538 8.01694C6.71538 8.28895 6.7794 8.57689 6.85935 8.84892L5.78724 9.90495C5.46728 9.34499 5.2913 8.72089 5.2913 8.01697C5.2913 5.88899 7.00332 4.17697 9.1313 4.17697C9.83536 4.17697 10.4593 4.35295 11.0193 4.67291L9.9953 5.71298Z"
                                            fill="#495057" />
                                        <path id="Vector_2"
                                            d="M18.1714 7.69743C17.6114 6.57738 16.8753 5.56945 15.9634 4.75342L12.9874 7.69743V8.01738C12.9874 10.1454 11.2754 11.8574 9.14739 11.8574H8.82744L6.93945 13.7454C7.64351 13.8893 8.37946 13.9854 9.09946 13.9854C13.0516 13.9854 16.4754 11.6814 18.1235 8.35325C18.2675 8.12918 18.2675 7.90527 18.1714 7.69726L18.1714 7.69743Z"
                                            fill="#495057" />
                                    </g>
                                </svg>
                                <svg v-if="confirmPasswordShow == false" xmlns="http://www.w3.org/2000/svg" height="17"
                                    width="19" viewBox="0 0 612 612" xml:space="preserve">

                                    <path
                                        d="M609.608 315.426a19.767 19.767 0 0 0 0-18.853c-58.464-107.643-172.5-180.72-303.607-180.72S60.857 188.931 2.393 296.573a19.767 19.767 0 0 0 0 18.853C60.858 423.069 174.892 496.147 306 496.147s245.143-73.078 303.608-180.721zM306 451.855c-80.554 0-145.855-65.302-145.855-145.855S225.446 160.144 306 160.144 451.856 225.446 451.856 306 386.554 451.855 306 451.855z"
                                        fill="#495057" />
                                    <path
                                        d="M306 231.67c-6.136 0-12.095.749-17.798 2.15 5.841 6.76 9.383 15.563 9.383 25.198 0 21.3-17.267 38.568-38.568 38.568-9.635 0-18.438-3.541-25.198-9.383a74.513 74.513 0 0 0-2.15 17.798c0 41.052 33.279 74.33 74.33 74.33s74.33-33.279 74.33-74.33S347.052 231.67 306 231.67z"
                                        fill="#495057" />

                                </svg>
                                <span class="pl-1">
                                    {{ confirmPasswordShow ? "Hide" : "Show" }}
                                </span>

                            </div>

                        </div>

                        <input
                            class="max-w-full  lg:max-w-[250px] h-[50px] w-full px-4 outline-none pt-[15px] pb-[11px] rounded-[10px] border border-zinc-600 mt-[10px] dark:bg-transparent"
                            :type="confirmPasswordShow ? 'password' : 'text'" placeholder="***************" />


                    </div>

                </div>
                <div class="mt-[36px] flex  justify-end items-center">

                    <button
                        class="max-w-full lg:max-w-[297px] h-[50px] w-full rounded-[14px] border border-[#0057FF] dark:bg-[#0057FF] justify-center items-center gap-2.5 inline-flex text-[#0057FF] dark:text-white hover:bg-[#0057FF] hover:text-white dark:hover:bg-white dark:hover:text-[#0057FF]">
                        <p class=" text-xl font-normal font-[Poppins] uppercase">Save</p>
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
<script >


export default {
    components: {

    },
    data() {

        return {
            oldPasswordShow: true,
            passwordShow: true,
            confirmPasswordShow: true,



        }

    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
        },
        handleOldPasswordShow(v) {

            this.oldPasswordShow = v


        },
        handlePasswordShow(v) {

            this.passwordShow = v


        },
        handleConfirmPasswordShow(v) {

            this.confirmPasswordShow = v


        },
    },
    computed: {

    },
};


</script>
