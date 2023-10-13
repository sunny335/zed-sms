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

        <div class="flex justify-center lg:justify-between  gap-[49px]">
            <!-- Choose Payment -->
            <div class="max-w-full min-w-[350px] lg:max-w-[450px] w-full  flex justify-center items-center" :class="{ 'hidden lg:block': selectedPayment }">
                <div class="max-w-full min-w-[340px] w-full  lg:max-w-[450px] h-[635px]">
                    <div class=" mb-[30px]">
                        <h3
                            class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] leading-[17px] pr-[16px] pl-6 lg:pl-0">
                            Choose
                            Payment</h3>

                    </div>




                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div
                            class="w-full max-w-full px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[570px]">
                            <div class="max-w-full w-full">

                                <div class="flex items-center gap-[20px] py-4 pr-3 cursor-pointer max-w-full lg:max-w-[460px] w-full px-4"
                                    v-for="data in paymentsData" :key="data.id" @click="selectPayment(data.id)"
                                    :class="{ 'bg-[#0057FF] text-white': selectedPayment === data.id }">
                                    <img :src="data.img" alt="" srcset="">
                                    <div>
                                        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-medium font-[Poppins] leading-[17px]"
                                            :class="{ ' text-white dark:text-white': selectedPayment === data.id }">
                                            {{ data?.name }}</h6>
                                        <p class="  dark:text-[#ACB5BD] text-sm font-light font-[Poppins] leading-normal"
                                            :class="{ ' text-white dark:text-[#F5F5F5]': selectedPayment === data.id }">
                                            Accepting bitcoin payment to staic wallet. Fee 1.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- Balance TO-UP  for mobile-->
            <div class="max-w-full lg:max-w-[360px] w-full mx-auto "
            :class="{ 'block lg:hidden': selectedPayment,'hidden': !selectedPayment }"
            >
                <div v-if="isLoading" class="flex justify-center items-center my-40">
                    <div class="loader-mobile loader"></div>
                </div>



                <div v-else
                
                >
                    <div class="flex justify-between lg:justify-center lg:hidden px-0 items-center">
                        <button @click="handleBack" class=" flex justify-center items-center">

<svg class="w-[50px] h-[50px] ml-[-18px] iconStockWhite" viewBox="0 0 27 26" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8337 13H9.16699M9.16699 13L12.417 9.75M9.16699 13L12.417 16.25"
        stroke="#495057" stroke-linecap="round" stroke-linejoin="round" />
</svg>


</button>
                        <h3
                            class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-medium font-[Poppins] leading-[17px] mb-0 lg:mb-10 text-center lg:text-left">
                            Balance TO-UP</h3>
                    </div>
                    <div
                        class="max-w-full lg:max-w-[360px] w-full h-[281px] px-0 lg:px-[30px] py-10 bg-white dark:bg-[#09132C] rounded-[20px] shadow-none lg:shadow-custom">
                        <form v-on:submit="onSubmit">

                            <h6
                                class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-[Poppins] mb-[14px]">
                                Amount</h6>
                            <input
                                class="max-w-full lg:max-w-[300px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 dark:bg-transparent"
                                type="text" placeholder="$00.00" />
                            <p class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-light font-[Poppins] mt-[10px]">
                                Minimum
                                Amount: 1 USD</p>



                            <div class="flex justify-end items-center">
                                <button :disabled="!selectedPayment" type="submit"
                                @click="submitModal(true)"
                                    class="max-w-[166px] h-[45px] w-full py-3 rounded-[10px] shadow border border-[#0057FF] justify-center items-start gap-2.5 inline-flex mt-10  dark:bg-[#0057FF] disabled:cursor-not-allowed disabled:opacity-20  disabled:hover:border-[#0057FF] disabled:hover:text-[#0057FF] disabled:hover:bg-[#F5F5F5] text-[#0057FF]  dark:text-[#F5F5F5] hover:text-[#F5F5F5] hover:bg-[#0057FF]">
                                    <div class="text-center text-sm font-normal font-[Poppins]">
                                        TOP-UP Now</div>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            <!-- Balance TO-UP  for desktop-->
            <div class="max-w-[460px] min-w-[310px] w-full mx-auto hidden lg:block">





                <div class="flex justify-between lg:justify-center lg:hidden px-2 lg:px-0 items-center">
          
                    <h3
                        class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-medium font-[Poppins] leading-[17px] mb-0 lg:mb-10 text-center lg:text-left">
                        Balance TO-UP</h3>
                </div>
                <div
                    class="max-w-[460px] w-full h-[281px] px-[30px] py-10 bg-white dark:bg-[#09132C] rounded-[20px] shadow-none lg:shadow-custom">
                    <form v-on:submit="onSubmit">

                        <h6 class="text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-[Poppins] mb-[14px]">
                            Amount</h6>
                        <input
                            class="max-w-[400px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 dark:bg-transparent"
                            type="text" placeholder="$00.00" />
                        <p class="text-zinc-600  dark:text-[#ACB5BD] text-xs font-light font-[Poppins] mt-[10px]">
                            Minimum
                            Amount: 1 USD</p>



                        <div class="flex justify-end items-center">
                            <button :disabled="!selectedPayment" type="submit"
                            @click="submitModal(true)"
                                class="max-w-[200px] h-[45px] w-full py-3 rounded-[10px] shadow border border-[#0057FF] justify-center items-start gap-2.5 inline-flex mt-10  dark:bg-[#0057FF] disabled:cursor-not-allowed disabled:opacity-20  disabled:hover:border-[#0057FF] disabled:hover:text-[#0057FF] disabled:hover:bg-[#F5F5F5] text-[#0057FF]  dark:text-[#F5F5F5] hover:text-[#F5F5F5] hover:bg-[#0057FF] dark:hover:bg-white dark:hover:text-[#0057FF]">
                                <div class="text-center text-sm font-normal font-[Poppins]">
                                    TOP-UP Now</div>
                            </button>
                        </div>
                    </form>
                </div>

            </div>



        </div>
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
                                            class="text-zinc-600 dark:text-[#F5F5F5] text-center text-base lg:text-xl font-normal font-[Poppins] mb-[30px]">
                                            Do you want to TOP-UP?</p>
                                        <div class="flex justify-between items-center gap-10">

                                            <button
                                                class="max-w-[119px] w-full h-9  py-1.5 rounded-[10px] border border-zinc-600 justify-center items-center gap-1.5 inline-flex"
                                                @click="submitModal(false)">
                                                <div
                                                    class="text-zinc-600 dark:text-[#ACB5BD] text-base font-normal font-[Poppins]">
                                                    Back</div>
                                            </button>
                                            <button
                                                class="max-w-[108px] w-full h-9 py-1.5 bg-[#0057FF] rounded-[10px] justify-center items-center gap-1.5 inline-flex"
                                                @click="submitModal(false)">
                                                <div class="text-white text-base font-normal font-[Poppins]">Yes</div>
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
            ],
            isLoading: false, 


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
            if (this.selectedPayment === id) {
                this.selectedPayment = null;
            } else {
                this.selectedPayment = id;
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                }, 1000);
            }
        },

        onSubmit(e) {
            e.preventDefault();
        },
        handleBack() {
            this.isLoading = false; // Hide loader
            this.selectedPayment = null; // Clear selectedPayment
            // Simulate an asynchronous operation (e.g., an HTTP request)
            setTimeout(() => {
                this.isLoading = false; // Hide loader after the operation is complete
            }, 1000); // Adjust the timeout as needed
        },
        submitModal(open) {
      
      this.isSubmitOpen = open;
  },

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
<style scoped>
/* Add styles for the mobile loader */

.loader {
    border: 4px solid rgba(0, 0, 0, 0.2);
    border-top: 4px solid #0057FF;
    /* Change the loader color as needed */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    /* Adjust animation duration as needed */
    margin: 0 auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader-mobile {
    display: none;
    /* Add your loader styles here */
}
@media (max-width: 1023px) {
    .loader-mobile {
        display: block;
    }


}
/* Media query to show the loader on mobile screens */
@media (max-width: 768px) {
    .loader-mobile {
        display: block;
    }

    /* Hide other elements on mobile screens */
    .max-w-[360px] {
        display: none;
    }
}</style>
