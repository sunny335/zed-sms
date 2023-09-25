<script setup>

import { RouterLink } from 'vue-router'

import cash from "../../assets/img/choosePayment/1.png"
import num1 from "../../assets/img/allNumber/1.png"
import num2 from "../../assets/img/allNumber/2.png"
import num3 from "../../assets/img/allNumber/3.png"
import num4 from "../../assets/img/allNumber/4.png"
import num5 from "../../assets/img/allNumber/5.png"
import num6 from "../../assets/img/allNumber/6.png"
import num7 from "../../assets/img/allNumber/7.png"
import Namepo from "../../assets/img/Message/Namepo.png"
import Viveon from "../../assets/img/Message/Viveon.png"
import Tiktok from "../../assets/img/Message/Tiktok.png"
import Burgking from "../../assets/img/Message/Burg king.png"
import Namepo2 from "../../assets/img/Message/Namepo.png"
import Viveon2 from "../../assets/img/Message/Viveon.png"




</script>

<template>
    <section class="ml-[25px] mb-[97px]">
        <div class="flex flex-wrap gap-[25px]">
            <!-- Choose Payment -->
            <div class="max-w-[401px] w-full">
                <div class="w-[401px] h-[716px]">
                    <div class="flex  items-center mb-[30px]">
                        <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] pr-[16px]">Choose
                            Payment</h3>

                    </div>




                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div
                            class="w-full px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[570px]">
                            <div class="w-full">

                                <div class="flex items-center gap-[20px] py-4 pr-3"
                                v-for="data in paymentsData" :key="data.id"
                                >
                                    <img :src="cash" alt="" srcset="">
                                    <div>
                                        <h6 class="text-neutral-800 text-base font-medium font-['Poppins'] leading-[17px]">
                                            Cash</h6>
                                        <p class=" text-zinc-600 text-sm font-light font-['Poppins'] leading-normal">
                                            Accepting bitcoin payment to staic wallet. Fee 1.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <!-- All Number -->
            <div class="max-w-[45%] w-full">

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
            openTab: 1,
            messageSeenStatus: false,
            toggleArrowIcon: false,
            paymentsData: [
                {
                    id: 1,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 2,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 3,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 4,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 5,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 6,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 7,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 8,
                    img: cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%"
                },
                {
                    id: 9,
                    img: cash,
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