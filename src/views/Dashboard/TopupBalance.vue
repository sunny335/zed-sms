<script setup>
import { RouterLink } from 'vue-router'
import cash1 from "../../assets/img/choosePayment/1.png"
import cash2 from "../../assets/img/choosePayment/2.png"
import cash3 from "../../assets/img/choosePayment/3.png"
import cash4 from "../../assets/img/choosePayment/4.png"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
</script>

<template>
    <section class="ml-0 lg:ml-[25px] mb-[97px]">
        <div class="flex flex-wrap gap-[49px]">
            <!-- Choose Payment -->
            <div class="max-w-[401px] w-full mx-auto">
                <div class="max-w-[343px] lg:max-w-[401px] h-[635px] mx-auto">
                    <div class="flex  items-center mb-[30px]">
                        <h3
                            class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-normal font-['Poppins'] leading-[17px] pr-[16px]">
                            Choose
                            Payment</h3>

                    </div>




                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div
                            class="w-full px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[570px]">
                            <div class="w-full">

                                <div class="flex items-center gap-[20px] py-4 pr-3 cursor-pointer max-w-[370px] w-full px-4"
                                    v-for="data in paymentsData" :key="data.id" @click="selectPayment(data.id)"
                                    :class="{ 'bg-[#0057FF] text-white': selectedPayment === data.id }">
                                    <img :src="data.img" alt="" srcset="">
                                    <div>
                                        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-medium font-['Poppins'] leading-[17px]"
                                            :class="{ ' text-white dark:text-white': selectedPayment === data.id }">
                                            Cash</h6>
                                        <p class="  dark:text-[#ACB5BD] text-sm font-light font-['Poppins'] leading-normal"
                                            :class="{ ' text-white dark:text-[#F5F5F5]': selectedPayment === data.id }">
                                            Accepting bitcoin payment to staic wallet. Fee 1.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- Balance TO-UP -->
            <div class="max-w-[360px] w-full mx-auto">
                <h3
                    class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-medium font-['Poppins'] leading-[17px] mb-10 text-center lg:text-left">
                    Balance TO-UP</h3>

                <div
                    class="max-w-[360px] w-full h-[281px] px-[30px] py-10 bg-white dark:bg-[#09132C] rounded-[20px] shadow-none lg:shadow-custom">
                    <form v-on:submit="onSubmit">

                        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] mb-[14px]">
                            Amount</h6>
                        <input
                            class="max-w-[300px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 dark:bg-transparent"
                            type="text" placeholder="$00.00" />
                        <p class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-light font-['Poppins'] mt-[10px]">Minimum
                            Amount: 1 USD</p>



                        <div class="flex justify-end items-center">
                            <button :disabled="!selectedPayment" @click="submitModal(true)" type="submit"
                                class="max-w-[166px] h-[45px] w-full py-3 rounded-[10px] shadow border border-blue-600 justify-center items-start gap-2.5 inline-flex mt-10  dark:bg-[#0057FF] disabled:cursor-not-allowed disabled:opacity-20">
                                <div
                                    class="text-center text-blue-600  dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']">
                                    TOP-UP Now</div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
        <TransitionRoot as="template" :show="isSubmitOpen">
            <Dialog as="div" class="relative z-[100]" @close="isSubmitOpen = false">
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
                                class=" relative transform overflow-hidden rounded-lg bg-neutral-50 dark:bg-[#09132C] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-[322px] lg:max-w-[361px]">
                                <div>
                                    <div
                                        class="max-w-[361px] w-full h-[196px] p-[50px] bg-neutral-50 dark:bg-[#09132C] rounded-3xl">
                                        <p
                                            class="text-zinc-600 dark:text-[#F5F5F5] text-xl font-normal font-['Poppins'] mb-[30px]">
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
    </section>
</template>
<script >


export default {
    components: {

    },
    data() {

        return {
            openTab: 1,
            isSubmitOpen: false,
            messageSeenStatus: false,
            toggleArrowIcon: false,
            selectedPayment: null,
            selectedPaymentColor: false,
            paymentsData: [
                {
                    id: 1,
                    img: cash1,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 2,
                    img: cash2,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 3,
                    img: cash3,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 4,
                    img: cash4,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 5,
                    img: cash1,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 6,
                    img: cash2,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 7,
                    img: cash3,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 8,
                    img: cash4,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 9,
                    img: cash1,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
            ]


        }

    },
    methods: {
        toggleMessageReadMore(messageData) {
            messageData.showFullMessage = !messageData.showFullMessage;
        },
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        toggleArrow: function (v) {
            this.toggleArrowIcon = v
        },
        selectPayment(id) {
            this.selectedPayment = id;

        },
        submitModal(open) {
            console.log("object", open);
            this.isSubmitOpen = open;
        },
        onSubmit(e) {
            e.preventDefault();
        }

    },
    computed: {
        formattedMessage() {
            return (messageData) => {
                const message = messageData.message;

                if (message.length <= 100 || messageData.showFullMessage) {

                    const parts = message.split(/(CODE:\s*\d+)/);
                    const formattedParts = parts.map((part, index) => {
                        if (index % 2 === 0) {
                            return part;
                        } else {

                            return `<span class="font-bold">${part}</span>`;
                        }
                    });

                    return formattedParts;
                }

                const parts = message.split(/(CODE:\s*\d+)/);
                const formattedParts = parts.map((part, index) => {
                    if (index % 2 === 0) {
                        return part;
                    } else {
                        return `<span class="font-bold	">${part}</span>`;
                    }
                });
                const formattedMessage = parts.length > 1 ? formattedParts[0] + formattedParts[1] : formattedParts.join("").slice(0, 100);

                return formattedMessage;
            };
        },
    },
};


</script>
