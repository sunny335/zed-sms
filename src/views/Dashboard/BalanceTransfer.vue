<script setup>

import { RouterLink } from 'vue-router'

import balanceTransfer from "../../assets/img/balanceTransfer.png"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'




</script>

<template>
    <section class="ml-0 lg:ml-[25px] mb-[97px]">
        <div class="flex  flex-col-reverse lg:flex-row justify-center items-center gap-2 mt-0 lg:mt-20">
            <img class="mx-[18px] lg:mx-0" :src="balanceTransfer" alt="">
            <div class="max-w-[360px] w-full h-96 px-[30px] py-10 bg-white dark:bg-[#09132C] rounded-[20px] shadow-none lg:shadow-custom">


                <form v-on:submit="onSubmit">
                    <div>
                        <label class="text-zinc-600  dark:text-[#F5F5F5] text-base font-normal font-['Poppins']">Email or Username</label>
                        <input
                            class="max-w-[300px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 justify-start items-center inline-flex mt-[14px] dark:bg-transparent"
                            type="email" placeholder="Ex: hello@zedsms.com" />
                    </div>
                    <div class="mt-[40px]">
                        <label class="text-zinc-600  dark:text-[#F5F5F5] text-base font-normal font-['Poppins']">Transfer Amount</label>
                        <input
                            class="max-w-[300px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 justify-start items-center inline-flex mt-[14px] dark:bg-transparent"
                            type="text" />
                    </div>
                <div class="flex justify-end mt-[40px]">
                    <button
                    @click="submitModal(true)"
                    type="submit"
                        class="max-w-[146px] h-12 w-full py-3 rounded-[10px] shadow border border-[#0057FF] dark:bg-[#0057FF] justify-center items-start gap-2.5 inline-flex text-[#0057FF]  dark:text-[#F5F5F5] hover:text-[#F5F5F5] hover:bg-[#0057FF] dark:hover:bg-white dark:hover:text-[#0057FF]">
                        <p class="text-center  text-base font-normal font-['Poppins']">Transfer</p>
                    </button>
                </div>


                </form>
                <TransitionRoot as="template" :show="isSubmitOpen">
            <Dialog as="div" class="relative z-[9999999]" @close="isSubmitOpen = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class=" relative transform overflow-hidden rounded-lg bg-neutral-50 dark:bg-[#09132C] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-[322px] lg:max-w-[420px]">
                                <div>
                                    <div
                                        class="max-w-[420px] w-full h-[196px] p-[50px] bg-neutral-50 dark:bg-[#09132C] rounded-3xl">
                                        <p
                                            class="text-zinc-600 dark:text-[#F5F5F5] text-center text-base lg:text-xl font-normal font-['Poppins'] mb-[30px]">
                                            Do you want to transfer money?</p>
                                        <div class="flex justify-between items-center">

                                            <button
                                                class="max-w-[119px] w-full h-9  py-1.5 rounded-[10px] border border-zinc-600 justify-center items-center gap-1.5 inline-flex"
                                                @click="submitModal(false)">
                                                <div
                                                    class="text-zinc-600 dark:text-[#ACB5BD] text-base font-normal font-['Poppins']">
                                                    Back</div>
                                            </button>
                                            <button
                                                class="max-w-[108px] w-full h-9 py-1.5 bg-[#0057FF] rounded-[10px] justify-center items-center gap-1.5 inline-flex"
                                                @click="submitModal(false)">
                                                <div class="text-white text-base font-normal font-['Poppins']">Yes</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
            </div>
        </div>
    </section>
</template>
<script >


export default {
    components: {

    },
    data() {

        return {

            isSubmitOpen: false,


        }

    },
    methods: {
        submitModal(open) {
            console.log("object", open);
            this.isSubmitOpen = open;
        },
        onSubmit(e) {
            e.preventDefault();
        } 

    },
    computed: {

    },
};


</script>
