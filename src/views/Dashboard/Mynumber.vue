<script setup>

import { RouterLink } from 'vue-router'

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
    <section class="ml-0 lg:ml-[25px] mb-[40px] lg:mb-[97px]"
        :class="{ 'block': showMessageCompose === !true, 'hidden': showMessageCompose === true }">
        <div class="flex  gap-[25px] lg:flex-row flex-col">
            <!-- All Number -->
            <div class="max-w-[342px] lg:max-w-[357px] w-full mx-auto">
                <div class="max-w-[342px] lg:max-w-[357px] h-[711px]  ">
                    <div class="flex justify-between items-center">
                        <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px]">All Number</h3>
                        <button v-on:click="toggleShowMessageCompose(true)"
                            class="max-w-[164px] max-h-11 w-full  py-2.5 rounded-[10px] shadow border border-neutral-800 justify-center items-center gap-2 inline-flex">
                            <div class="text-neutral-800 text-sm font-normal font-['Poppins'] leading-[17px]">Start Chat
                            </div>
                            <div class="w-6 h-6 relative">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
                                        stroke="#1E2329" stroke-linecap="round" />
                                    <path
                                        d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9"
                                        stroke="#1E2329" />
                                </svg>

                            </div>
                        </button>
                        <button
                            class="w-11 h-11 p-3.5 rounded-[10px] border border-zinc-600 justify-start items-start gap-2.5 inline-flex">
                            <div class="w-4 h-4 relative rounded-[5px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.33325 9.33397C7.43782 9.33397 8.33325 10.2294 8.33325 11.334C8.33325 12.4385 7.43782 13.334 6.33325 13.334C5.22868 13.334 4.33325 12.4385 4.33325 11.334C4.33325 10.2294 5.22868 9.33397 6.33325 9.33397Z"
                                        stroke="#495057" />
                                    <path
                                        d="M9.66675 2.666C8.56218 2.666 7.66675 3.56143 7.66675 4.666C7.66675 5.77057 8.56218 6.666 9.66675 6.666C10.7713 6.666 11.6667 5.77057 11.6667 4.666C11.6667 3.56143 10.7713 2.666 9.66675 2.666Z"
                                        stroke="#495057" />
                                    <path d="M10 11.3047L14.6667 11.3047" stroke="#495057" stroke-linecap="round" />
                                    <path d="M6 4.63867L1.33333 4.63867" stroke="#495057" stroke-linecap="round" />
                                    <path d="M1.33325 11.3047L2.66659 11.3047" stroke="#495057" stroke-linecap="round" />
                                    <path d="M14.6667 4.63867L13.3334 4.63867" stroke="#495057" stroke-linecap="round" />
                                </svg>

                            </div>
                        </button>
                    </div>


                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div class="scrollbar h-[620px] mt-[20px]">
                            <div class="max-w-[337px] h-[93px] px-5 py-7 border-b border-gray-400 flex  items-center gap-4 flex-wrap mx-auto"
                                v-for="numberData in numbersData" :key="numberData.id">
                                <div class="w-[30px]">
                                    <img class="w-[30px] h-[30px] rounded-full" :src="numberData.img" alt="" srcset="">
                                </div>

                                <div class="flex-1">
                                    <div class="flex justify-between items-center mb-[10px]">
                                        <p class="text-neutral-800 text-sm font-medium font-['Poppins'] leading-[17px]">
                                            {{ numberData.number }}
                                        </p>
                                        <p class=" text-blue-600 text-xs font-normal font-['Poppins'] leading-[17px] flex justify-center items-center gap-2"
                                            v-bind:class="{ 'text-blue-600': numberData.status == true, 'text-red-600': numberData.status === false }">
                                            <svg v-if="numberData.status" xmlns="http://www.w3.org/2000/svg" height="4px"
                                                viewBox="0 0 512 512">
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                                    fill="#0057FF" />
                                            </svg>
                                            <svg v-if="!numberData.status" xmlns="http://www.w3.org/2000/svg" height="4px"
                                                viewBox="0 0 512 512">
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                                    fill="#fc0307" />
                                            </svg>


                                            {{ numberData.status ? 'Active' : 'Deactive' }}
                                        </p>
                                        <p class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">{{
                                            numberData.timeLeft }}</p>
                                    </div>
                                    <div class="flex items-center gap-2 justify-center">
                                        <p class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">Type: {{
                                            numberData.type }}
                                        </p>
                                        <p class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">•
                                            Service:
                                            {{ numberData.service }}
                                        </p>
                                        <p class="text-zinc-600 text-xs font-light font-['Poppins'] leading-[17px]">• Rent:
                                            {{
                                                numberData.rent }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- All Message -->
            <div class="max-w-[460px] w-full">
                <div class="max-w-[375px] lg:max-w-[460px] h-[716px] p-[22px] bg-white rounded-[20px] shadow-none lg:shadow-custom">
                    <div class="flex lg:justify-start justify-center  items-center mb-[30px]">
                        <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] pr-[16px]">All
                            Message</h3>
                        <ul
                            class="flex mb-0 list-none flex-row max-w-[168px]  rounded-xl border border-blue-600 overflow-hidden	 h-[37px]">
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-['Poppins'] leading-[13px] 
                                 h-[37px] " v-on:click="toggleTabs(1)"
                                    v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1 }">
                                    Inbox
                                </a>
                            </li>
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-['Poppins'] leading-[13px]  
                                 h-[37px] " v-on:click="toggleTabs(2)"
                                    v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2 }">
                                    Sent
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div
                        class="max-w-[400px] w-full h-[45px] px-4  py-3 rounded-[100px] border border-zinc-600 justify-start items-center gap-[7px] inline-flex mb-[32px]">

                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.66658" cy="8.16732" r="6.33333" stroke="#495057" />
                            <path d="M12.3333 12.834L14.6666 15.1673" stroke="#495057" stroke-linecap="round" />
                        </svg>

                        <input class="w-full outline-none" type="text" placeholder="Find Message">



                    </div>



                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div
                            class="w-full px-[2px] pt-[0px] pb-[30px] flex-col justify-start items-center gap-[30px] inline-flex overflow-y-auto scrollbar max-h-[500px]">
                            <div class="w-full">

                                <div class="tab-content tab-space w-full ">

                                    <!-- openTab  1-->
                                    <div class="w-full pr-[35px]"
                                        v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">


                                        <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                            v-for="messageData in messagesData" :key="messageData.id">
                                            <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                srcset="">
                                            <div class="flex-1 flex flex-wrap ">
                                                <div class="w-full flex justify-between mb-[6px]">
                                                    <h6
                                                        class="text-neutral-900 text-sm font-medium font-['Poppins'] leading-[17px]">
                                                        Namepo
                                                    </h6>
                                                    <p
                                                        class="text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        {{ messageData.messageTime }}
                                                    </p>
                                                </div>
                                                <div class="">
                                                    <template v-if="!messageData.showFullMessage">
                                                        <div class="w-full text-neutral-800 text-xs font-light font-['Poppins'] leading-normal inline"
                                                            v-html="formattedMessage(messageData)">
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <div class=" text-neutral-800 text-xs font-light font-['Poppins'] leading-normal inline"
                                                            v-html="formattedMessage(messageData)">
                                                        </div>
                                                    </template>
                                                    <span v-if="messageData.message.length > 100"
                                                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer pl-1"
                                                        @click="toggleMessageReadMore(messageData); toggleArrow(!toggleArrowIcon)">
                                                        {{ messageData.showFullMessage ? 'Less' : 'More' }}
                                                    </span>
                                                    <svg class="inline pl-1 cursor-pointer"
                                                        v-bind:class="{ 'block': toggleArrowIcon == false, 'hidden': toggleArrowIcon == true }"
                                                        @click="toggleMessageReadMore(messageData); toggleArrow(!toggleArrowIcon)"
                                                        xmlns="http://www.w3.org/2000/svg" height="10px"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                                                            fill="#0057FF" />
                                                    </svg>


                                                    <svg class="inline pl-1 cursor-pointer"
                                                        v-bind:class="{ 'block': toggleArrowIcon == true, 'hidden': toggleArrowIcon == false }"
                                                        @click="toggleMessageReadMore(messageData); toggleArrow(!toggleArrowIcon)"
                                                        xmlns="http://www.w3.org/2000/svg" height="10px"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                                            fill="#0057FF" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- openTab  2-->
                                    <div class="w-full pr-[35px]"
                                        v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">


                                        <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                            v-for="messageData in messagesData" :key="messageData.id">
                                            <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                srcset="">
                                            <div class="flex-1 flex flex-wrap ">
                                                <div class="w-full flex justify-between mb-[6px]">
                                                    <h6
                                                        class="text-neutral-900 text-sm font-medium font-['Poppins'] leading-[17px]">
                                                        Namepo
                                                    </h6>
                                                    <p
                                                        class="text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]">
                                                        {{ messageData.messageTime }}
                                                    </p>
                                                </div>
                                                <div class="">
                                                    <template v-if="!messageData.showFullMessage">
                                                        <div class="w-full text-neutral-800 text-xs font-light font-['Poppins'] leading-normal inline"
                                                            v-html="formattedMessage(messageData)">
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <div class=" text-neutral-800 text-xs font-light font-['Poppins'] leading-normal inline"
                                                            v-html="formattedMessage(messageData)">
                                                        </div>
                                                    </template>
                                                    <span v-if="messageData.message.length > 100"
                                                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer pl-1"
                                                        @click="toggleMessageReadMore(messageData); toggleArrow(!toggleArrowIcon)">
                                                        {{ messageData.showFullMessage ? 'Less' : 'More' }}
                                                    </span>
                                                    <svg class="inline pl-1 cursor-pointer"
                                                        v-bind:class="{ 'block': toggleArrowIcon == false, 'hidden': toggleArrowIcon == true }"
                                                        @click="toggleMessageReadMore(messageData); toggleArrow(!toggleArrowIcon)"
                                                        xmlns="http://www.w3.org/2000/svg" height="10px"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                                                            fill="#0057FF" />
                                                    </svg>


                                                    <svg class="inline pl-1 cursor-pointer"
                                                        v-bind:class="{ 'block': toggleArrowIcon == true, 'hidden': toggleArrowIcon == false }"
                                                        @click="toggleMessageReadMore(messageData); toggleArrow(!toggleArrowIcon)"
                                                        xmlns="http://www.w3.org/2000/svg" height="10px"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                                            fill="#0057FF" />
                                                    </svg>
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

        </div>
    </section>
    <section class="ml-0 lg:ml-[25px] mb-[97px] mt-0 lg:mt-[70px] w-full"
        :class="{ 'block': showMessageCompose === true, 'hidden': showMessageCompose === !true }">
        <div class="max-w-[808px] w-full h-[457px] px-[48px] py-0 lg:py-[50px] bg-white rounded-[30px] shadow-none lg:shadow-custom">
            <h3 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px] ">Message Compose</h3>
            <form class="mt-[30px]">


                <div class="flex flex-col lg:flex-row justify-between items-center">

                    <div class="max-w-[284px] w-full ">
                        <p class="text-zinc-600 text-sm font-normal font-['Poppins'] leading-[17px] mb-[14px] ">From Number
                        </p>
                        <input
                            class="max-w-[284px] w-full h-10 bg-white rounded-lg border border-gray-400 outline-none px-4"
                            type="text" placeholder="+85 654 646 655 874" />
                    </div>


                    <div class="max-w-[284px] w-full ">
                        <p class="text-zinc-600 text-sm font-normal font-['Poppins'] leading-[17px] mb-[14px] ">From Number
                        </p>
                        <input
                            class="max-w-[284px] w-full h-10 bg-white rounded-lg border border-gray-400 outline-none px-4"
                            type="text" placeholder="+85 654 646 655 874" />
                    </div>
                </div>
                <div class="mt-[24px]">

                    <p class="text-zinc-600 text-sm font-normal font-['Poppins'] leading-[17px]">Message</p>
                    <textarea
                        class="max-w-[337px] lg:max-w-[608px] w-full h-[111px] bg-white rounded-xl border border-zinc-600 mt-[14px] outline-none px-4 py-2 resize-none"></textarea>
                </div>
                <div class="flex justify-end items-center mt-[24px]">
                    <button
                    v-on:click="toggleShowMessageCompose(true)"
                        class="max-w-[289px] w-full  h-[49px]  rounded-xl border border-blue-600 justify-center items-center gap-2.5 inline-flex">
                        <div class="text-blue-600 text-base font-normal font-['Poppins'] leading-[17px]">Send</div>
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
            openTab: 1,
            messageSeenStatus: false,
            toggleArrowIcon: false,
            showMessageCompose: false,
            numbersData: [
                {
                    id: 1,
                    number: "+8454655444",
                    status: true,
                    img: num1,
                    timeLeft: "10 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 3,
                    number: "+8454655222",
                    status: false,
                    img: num2,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 4,
                    number: "+8454655222",
                    status: true,
                    img: num3,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 5,
                    number: "+8454655222",
                    status: false,
                    img: num4,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 6,
                    number: "+8454655222",
                    status: true,
                    img: num5,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 7,
                    number: "+8454655222",
                    status: false,
                    img: num6,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 8,
                    number: "+8454655222",
                    status: false,
                    img: num7,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 9,
                    number: "+8454655222",
                    status: false,
                    img: num1,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 10,
                    number: "+8454655222",
                    status: true,
                    img: num2,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 11,
                    number: "+8454655222",
                    status: false,
                    img: num3,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 12,
                    number: "+8454655222",
                    status: false,
                    img: num4,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 13,
                    number: "+8454655222",
                    status: true,
                    img: num5,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 14,
                    number: "+8454655222",
                    status: false,
                    img: num6,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 15,
                    number: "+8454655222",
                    status: false,
                    img: num7,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
                {
                    id: 16,
                    number: "+8454655222",
                    status: false,
                    img: num1,
                    timeLeft: "15 days left",
                    type: "Private",
                    service: "any",
                    rent: " 1 Week"
                },
            ],
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
        toggleShowMessageCompose(v) {
            this.showMessageCompose = v;
            console.log("ssssssssssjjjjjjjj", v);
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

                            return `<span class="text-neutral-800 text-xs font-medium font-['Poppins'] leading-tight">${part}</span>`;
                        }
                    });

                    return formattedParts;
                }

                const parts = message.split(/(CODE:\s*\d+)/);
                const formattedParts = parts.map((part, index) => {
                    if (index % 2 === 0) {
                        return part;
                    } else {
                        return `<span class="text-neutral-800 text-xs font-medium font-['Poppins'] leading-tight	">${part}</span>`;
                    }
                });
                const formattedMessage = parts.length > 1 ? formattedParts[0] + formattedParts[1] : formattedParts.join("").slice(0, 100);

                return formattedMessage;
            };
        },
    },
};


</script>
