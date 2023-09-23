<script setup>

import { RouterLink } from 'vue-router'
import Namepo from "../../assets/img/Message/Namepo.png"
import Viveon from "../../assets/img/Message/Viveon.png"
import Tiktok from "../../assets/img/Message/Tiktok.png"
import Burgking from "../../assets/img/Message/Burg king.png"
import Namepo2 from "../../assets/img/Message/Namepo.png"
import Viveon2 from "../../assets/img/Message/Viveon.png"
import num1 from "../../assets/img/NumFlags/1.png"
import num2 from "../../assets/img/NumFlags/2.png"
import num3 from "../../assets/img/NumFlags/3.png"
import num4 from "../../assets/img/NumFlags/4.png"
import num5 from "../../assets/img/NumFlags/5.png"
import num6 from "../../assets/img/NumFlags/6.png"
import num7 from "../../assets/img/NumFlags/7.png"



</script>

<template>
    <section class="max-w-[825px]">
        <div class="flex flex-wrap ">
            <!-- Recent Message -->
            <div class="max-w-[60%] w-full">
                <div class="max-w-[436px] w-full pl-6 pr-[30px] pt-6 pb-5 bg-white rounded-[20px] shadow">
                    <h4 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px]">Recent Message</h4>


                    <div
                        class="max-w-[364px] relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div class=" max-h-[512px] w-full overflow-y-auto scrollbar  mt-[30px] mr-0 pb-[30px] ">
                            <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 mr-[18px]"
                                v-for="messageData in messagesData" :key="messageData.id">
                                <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt="" srcset="">
                                <div class="w-[85%] flex flex-wrap mr-[2%]">
                                    <div class="w-full flex justify-between mb-[6px]">
                                        <h6 class="text-neutral-900 text-sm font-medium font-['Poppins'] leading-[17px]">
                                            Namepo
                                        </h6>
                                        <p class="text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                            {{ messageData.messageTime }}
                                        </p>
                                    </div>
                                    <div class="w-full text-neutral-800 text-xs font-light font-['Poppins'] leading-normal">
                                        <template v-if="!messageData.showFullMessage">
                                            <div class="w-full text-neutral-800 text-xs font-light font-['Poppins'] leading-normal"
                                                v-html="formattedMessage(messageData)">
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="w-[326px] text-neutral-800 text-xs font-light font-['Poppins'] leading-normal"
                                                v-html="formattedMessage(messageData)">
                                            </div>
                                        </template>
                                        <span v-if="messageData.message.length > 100"
                                            class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer"
                                            @click="toggleMessageReadMore(messageData)">
                                            {{ messageData.showFullMessage ? 'Less' : 'More' }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <!-- All Number -->
            <div class="w-[40%]">
                <div class="w-[329px] h-[546px]">
                    <div class="flex justify-between items-center">
                        <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px]">All Number</h3>
                        <ul
                            class="flex mb-0 list-none flex-row max-w-[168px] mx-auto rounded-xl border border-blue-600 overflow-hidden	 h-[37px]">
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-['Poppins'] leading-[13px] 
                                 h-[37px] " v-on:click="toggleTabs(1)"
                                    v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1 }">
                                    Active
                                </a>
                            </li>
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-['Poppins'] leading-[13px]  
                                 h-[37px] " v-on:click="toggleTabs(2)"
                                    v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2 }">
                                    Deactive
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div
                        class="w-full mt-[30px] px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[476px]">
                        <div class="w-full ">

                            <div class="tab-content tab-space w-full ">

                                <!-- openTab  1-->
                                <div class="w-full " v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">


                                    <div class="" v-for="numbersData in numbersData" :key="numbersData.id">
                                        <div class="mt-[10px] mb-[30px] flex flex-wrap items-center">
                                            <img class="max-w-[30px] max-h-[30px] mr-[16px]" :src="numbersData.img" alt="">
                                            <div class="max-w-[80%] w-[251px]">
                                                <div class="flex justify-between">
                                                    <p
                                                        class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        {{ numbersData?.number }}</p>
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        {{ numbersData?.timeLeft }}</p>
                                                </div>
                                                <div class="flex justify-between mt-[6px]">
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        Type: {{ numbersData?.type }} •</p>
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        Service: {{ numbersData?.service }} •</p>
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        Rent: {{ numbersData?.rent }}</p>
                                                </div>

                                            </div>
                                        </div>


                                    </div>

                                </div>
                                <!-- openTab  2-->
                                <div class="w-full " v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">


                                    <div class="" v-for="numbersData in deactiveNumbersData" :key="numbersData.id">
                                        <div class="mt-[10px] mb-[30px] flex flex-wrap items-center">
                                            <img class="max-w-[30px] max-h-[30px] mr-[16px]" :src="numbersData.img" alt="">
                                            <div class="max-w-[80%] w-[251px]">
                                                <div class="flex justify-between">
                                                    <p
                                                        class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">
                                                        {{ numbersData?.number }}</p>
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        {{ numbersData?.timeLeft }}</p>
                                                </div>
                                                <div class="flex justify-between mt-[6px]">
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        Type: {{ numbersData?.type }} •</p>
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        Service: {{ numbersData?.service }} •</p>
                                                    <p
                                                        class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">
                                                        Rent: {{ numbersData?.rent }}</p>
                                                </div>

                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Recent Transaction -->
            <div class="w-[100%] mt-[48px]">
                <div class="max-w-[825px]  w-full flex-col justify-start items-start gap-[30px] inline-flex ">
                    <div class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] ">Recent Transaction
                    </div>

                    <table class="border-collapse w-full ">
                        <thead>
                            <tr class="shadow-md">
                                <th
                                    class="px-4 py-8 text-left text-neutral-800 text-base font-normal font-['Poppins'] leading-[17px]">
                                    Date & Time</th>
                                <th
                                    class="px-4 py-8 text-left text-neutral-800 text-base font-normal font-['Poppins'] leading-[17px]">
                                    Action</th>
                                <th
                                    class="px-4 py-8 text-left text-neutral-800 text-base font-normal font-['Poppins'] leading-[17px]">
                                    Amount</th>
                                <th
                                    class="px-4 py-8 text-left text-neutral-800 text-base font-normal font-['Poppins'] leading-[17px]">
                                    Description</th>

                            </tr>
                        </thead>
                        <tbody class="">

                            <tr class=" border-b-2">
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">02
                                    jun 2023</td>
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">
                                    Top-up</td>
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">
                                    $02.30</td>
                                <td
                                    class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px] max-w-[253px]">
                                    A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. More </td>

                            </tr>
                            <tr class=" border-b-2">
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">02
                                    jun 2023</td>
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">
                                    Top-up</td>
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">
                                    $02.30</td>
                                <td
                                    class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px] max-w-[253px]">
                                    A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. More </td>

                            </tr>
                            <tr class=" border-b-2">
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">02
                                    jun 2023</td>
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">
                                    Top-up</td>
                                <td class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px]">
                                    $02.30</td>
                                <td
                                    class="px-4 py-6 text-neutral-800 text-xs font-light font-['Poppins'] leading-[17px] max-w-[253px]">
                                    A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. More </td>

                            </tr>

                        </tbody>
                    </table>
                    <div
                        class="w-[125px] h-[37px] px-[30px] py-2.5 rounded-[10px] border border-blue-600 justify-center items-center gap-2.5 inline-flex">
                        <div class="text-blue-600 text-sm font-normal font-['Poppins'] leading-[17px]">See More</div>
                    </div>

                </div>
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
            messagesData: [
                {
                    id: 1,
                    img: Namepo,
                    messageTime: "02 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 2,
                    img: Viveon,
                    messageTime: "15 days ago",
                    message: "Linterdum erdum ullamcorper amet consectetur CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 3,
                    img: Tiktok,
                    messageTime: "03 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 4,
                    img: Burgking,
                    messageTime: "04 days ago",
                    message: " sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 5,
                    img: Namepo2,
                    messageTime: "07 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 6,
                    img: Viveon2,
                    messageTime: "05 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
            ],
            numbersData: [
                {
                    id: 1,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 2,
                    img: num2,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 3,
                    img: num3,
                    number: "+8454655444",
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 4,
                    img: num4,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 5,
                    img: num5,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 6,
                    img: num6,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 7,
                    img: num7,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 8,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 9,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 10,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 11,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
            ],
            deactiveNumbersData: [
                {
                    id: 1,
                    img: num1,
                    number: "+899999999",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 2,
                    img: num2,
                    number: "+84456455444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 3,
                    img: num3,
                    number: "+4536453455",
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 4,
                    img: num4,
                    number: "+4563455453",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 5,
                    img: num5,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 6,
                    img: num6,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 7,
                    img: num7,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 8,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 9,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 10,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
                {
                    id: 11,
                    img: num1,
                    number: "+8454655444",
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: "1 Week"
                },
            ],

            tableData: [
                {
                    id: 1,
                    dateTime: "02 jun 2023",
                    action: "Top-up",
                    amount: "$02.30",
                    description: "A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor"

                },
                {
                    id: 2,
                    dateTime: "08 jun 2023",
                    action: "Top-up",
                    amount: "$08.30",
                    description: "A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor"

                },
                {
                    id: 3,
                    dateTime: "05 jun 2023",
                    action: "Top-up",
                    amount: "$12.30",
                    description: "A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor"

                },
                {
                    id: 4,
                    dateTime: "07 jun 2023",
                    action: "Top-up",
                    amount: "$25.30",
                    description: "A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor"

                },
                {
                    id: 5,
                    dateTime: "07 jun 2023",
                    action: "Top-up",
                    amount: "$25.30",
                    description: "A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor"

                },
                {
                    id: 6,
                    dateTime: "07 jun 2023",
                    action: "Top-up",
                    amount: "$25.30",
                    description: "A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor"

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