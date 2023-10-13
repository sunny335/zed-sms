<script setup>
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
</script>

<template>
    <section class="ml-0 lg:ml-[25px] mb-[40px] lg:mb-[97px]"
        :class="{ 'block': showMessageCompose === !true, 'hidden': showMessageCompose === true }">
        <div class="flex  gap-[25px] lg:flex-row flex-col">
            <!-- All Number -->
            <div class="max-w-[100%] lg:max-w-[400px]  min-w-[338px] w-full mx-auto mb-[100px] lg:mb-0"
                :class="{ 'hidden lg:block': selectedNumber }">
                <div class="max-w-[100%] lg:max-w-[400px] w-full max-h-[711px]  ">
                    <div class="max-w-full w-full lg:max-w-[400px]  flex justify-around items-center px-4 lg:px-0">
                        <h3 class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] leading-[17px]">
                            All Number</h3>

                        <div class="relative hidden lg:block">

                            <div class="cursor-pointer absolute left-0 right-0 top-0 bottom-0 z-[3]"
                                :class="{ 'hidden': selectedNumber }" v-on:click="openErrorModal(true)">

                            </div>
                            <button :disabled="!selectedNumber" v-on:click="toggleShowMessageCompose(true)"
                                class="max-w-[164px] max-h-11 w-full py-2.5 px-2  rounded-[10px] shadow border border-neutral-800 dark:border-[#F5F5F5]  justify-center items-center gap-2 inline-flex  hover:text-[#F5F5F5] iconStock text-neutral-800 dark:text-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-20 disabled:border-neutral-800 disabled:bg-white disabled:hover:text-black disabled:dark:text-black iconStockBlack hover:border-[#0057FF] hover:bg-[#0057FF]">
                                <p class=" text-sm font-normal font-[Poppins] leading-[17px]">
                                    Start Chat
                                </p>
                                <div class="w-6 h-6 relative darkIconStock ">
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
                        </div>
                        <div>
                            <button
                                class="w-11 h-11 p-3.5 rounded-[10px] border  hover:bg-[#0057FF] hover:border-[#0057FF] dark:border-[#ACB5BD] justify-start items-start gap-2.5 inline-flex iconStock ml-[150px] lg:ml-0"
                                :class="{ 'bg-[#0057FF] border-[#0057FF] iconStockWhite z-[999999999]': isOpen, 'z-[99999] border-zinc-600': !isOpen }"
                                @click="toggleActiveStatusDropdown">
                                <div class="w-4 h-4 relative rounded-[5px] darkIconStock">
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
                                        <path d="M1.33325 11.3047L2.66659 11.3047" stroke="#495057"
                                            stroke-linecap="round" />
                                        <path d="M14.6667 4.63867L13.3334 4.63867" stroke="#495057"
                                            stroke-linecap="round" />
                                    </svg>


                                </div>
                            </button>
                            <div class="relative inline-block text-left">
                                <!-- Dropdown Trigger -->

                                <!-- Dropdown Menu -->

                                <ul v-show="isOpen"
                                    class="absolute right-0 top-5 mt-2  w-48 bg-white   dark:bg-slate-900 border border-[#0057FF] rounded-md shadow-lg z-[99999]"
                                    :class="{ 'z-[99999999] block': isOpen, 'z-[99999] hidden': !isOpen }">
                                    <!-- Render your list of countries and languages here -->
                                    <li v-for="(item, index) in option" :key="index" @click="selectActiveStatus(item)"
                                        class="px-4 py-2 cursor-pointer   dark:hover:bg-slate-600 flex items-center text-neutral-800  dark:text-[#F5F5F5] hover:bg-slate-700 hover:text-white"
                                        :class="{ 'bg-[#0057FF] text-white': selectedOption == item }">
                                        <span class=" text-xs font-light ">
                                            {{ item }}

                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 z-[9999]"
                            :class="{ 'z-[99999999] block': isOpen, 'z-[99999] hidden': !isOpen }">

                        </div>

                    </div>
                    <div
                        class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                        <div class="scrollbar max-h-[620px] mt-[20px]">
                            <div class="max-w-full lg:max-w-[390px] w-full h-[93px] px-5 py-7 border-b cursor-pointer border-gray-400 flex  items-center gap-4 flex-wrap mx-auto"
                                v-for="numberData in filteredNumberData" :key="numberData.id"
                                @click="selectNumber(numberData)"
                                :class="{ 'bg-[#0057FF] text-white': selectedNumber === numberData.id }">
                                <div class="w-[30px]">
                                    <img class="w-[30px] h-[30px] rounded-full" :src="numberData.img" alt="" srcset="">
                                </div>

                                <div class="flex-1">
                                    <div class="flex justify-between items-center mb-[10px]">
                                        <p class="text-neutral-800 dark:text-[#F5F5F5] text-sm font-medium font-[Poppins] leading-[17px]"
                                            :class="{ ' text-white': selectedNumber === numberData.id }">
                                            {{ numberData.number }}
                                        </p>
                                        <p class="text-xs font-normal font-[Poppins] leading-[17px] flex justify-center items-center gap-2"
                                            v-bind:class="{ 'text-[#0057FF]': numberData.status == 'true', 'text-red-600': numberData.status === false, 'text-white': selectedNumber === numberData.id, }">
                                            <svg :class="{ 'whiteIconFill': selectedNumber === numberData.id, 'blueIconFill': selectedNumber !== numberData.id }"
                                                v-if="numberData.status" xmlns="http://www.w3.org/2000/svg" height="4px"
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
                                        <p class=" dark:text-[#ACB5BD] text-xs font-light font-[Poppins] leading-[17px]"
                                            :class="{ 'text-white': selectedNumber === numberData.id, 'text-zinc-600': selectedNumber !== numberData.id }">
                                            {{
                                                numberData.timeLeft }}</p>
                                    </div>
                                    <div class="flex items-center gap-2 justify-between">
                                        <p class=" dark:text-[#ACB5BD] text-xs font-light font-[Poppins] leading-[17px]"
                                            :class="{ 'text-white': selectedNumber === numberData.id, 'text-zinc-600': selectedNumber !== numberData.id }">
                                            Type: {{
                                                numberData.type }}
                                        </p>
                                        <p class="dark:text-[#ACB5BD] text-xs font-light font-[Poppins] leading-[17px]"
                                            :class="{ 'text-white': selectedNumber === numberData.id, 'text-zinc-600': selectedNumber !== numberData.id }">
                                            •
                                            Service:
                                            {{ numberData.service }}
                                        </p>
                                        <p class="dark:text-[#ACB5BD] text-xs font-light font-[Poppins] leading-[17px]"
                                            :class="{ 'text-white': selectedNumber === numberData.id, 'text-zinc-600': selectedNumber !== numberData.id }">
                                            • Rent:
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
            <!-- All Message Desktop-->

            <div class="max-w-[500px] min-w-[350px] w-full hidden lg:block">
                <div
                    class="max-w-[100%] w-full lg:max-w-[500px] h-[716px] mt-0  p-[22px] bg-white dark:bg-[#09132C] rounded-[20px] shadow-none lg:shadow-custom">
                    <div class="flex justify-between items-center px-4  lg:hidden">

                        
                        <button v-on:click="toggleShowMessageCompose(true)"
                            class="max-w-[164px] max-h-11 w-full py-2.5 px-2  rounded-[10px] shadow border border-neutral-800 dark:border-[#F5F5F5]  justify-center items-center gap-2 inline-flex  hover:text-[#F5F5F5] iconStock text-neutral-800 dark:text-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-20 disabled:border-neutral-800 disabled:bg-white disabled:hover:text-black disabled:dark:text-black iconStockBlack hover:border-[#0057FF] hover:bg-[#0057FF]">
                            <p class=" text-sm font-normal font-[Poppins] leading-[17px]">
                                Start Chat
                            </p>
                            <div class="w-6 h-6 relative darkIconStock ">
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
                    </div>
                    <div class="flex lg:justify-start justify-center  mt-10 lg:mt-0  items-center mb-[30px]">
                        <h3
                            class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] leading-[17px] pr-[16px]">
                            All
                            Message</h3>
                        <ul
                            class="flex mb-0 list-none flex-row max-w-[168px]  rounded-xl border border-[#0057FF] overflow-hidden	 h-[37px]">
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-[Poppins] leading-[13px] 
                                        h-[37px] dark:text-[#F5F5F5]" v-on:click="toggleTabs(1)"
                                    v-bind:class="{ 'text-neutral-800 bg-white dark:bg-transparent': openTab !== 1, 'text-white bg-[#0057FF] dark:text-[#F5F5F5]': openTab === 1 }">
                                    Inbox
                                </a>
                            </li>
                            <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                <a class="w-20 flex items-center justify-center text-center text-sm font-light font-[Poppins] leading-[13px]  
                                        h-[37px] dark:text-[#F5F5F5]" v-on:click="toggleTabs(2)"
                                    v-bind:class="{ 'text-neutral-800 bg-white dark:bg-transparent': openTab !== 2, 'text-white bg-[#0057FF] dark:text-[#F5F5F5]': openTab === 2 }">
                                    Sent
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div
                        class="max-w-[100%] w-full h-[50px] px-4  py-3 rounded-[100px] border border-zinc-600 dark:border-[#ACB5BD] justify-start items-center gap-[7px] inline-flex mb-[32px]">

                        <svg v-if="Theme === 'light'" width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.66658" cy="8.16732" r="6.33333" stroke="#495057" />
                            <path d="M12.3333 12.834L14.6666 15.1673" stroke="#495057" stroke-linecap="round" />
                        </svg>
                        <svg v-if="Theme === 'dark'" width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.66536" cy="8.16732" r="6.33333" stroke="#ACB5BD" />
                            <path d="M12.332 12.834L14.6654 15.1673" stroke="#ACB5BD" stroke-linecap="round" />
                        </svg>

                        <input class="w-full outline-none h-[44px] dark:bg-transparent" type="text"
                            placeholder="Find Message">



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


                                        <div v-if="selectedNumberData">
                                            <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                v-for="messageData in selectedNumberData.messagesData"
                                                :key="messageData.id">
                                                <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                    srcset="">
                                                <div class="flex-1 flex flex-wrap ">
                                                    <div class="w-full flex justify-between mb-[6px]">
                                                        <h6
                                                            class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                            {{ messageData.name }}
                                                        </h6>
                                                        <p
                                                            class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                            {{ messageData.messageTime }}
                                                        </p>
                                                    </div>
                                                    <div class="">
                                                        <template v-if="!messageData.showFullMessage">
                                                            <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <template v-else>
                                                            <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <span v-if="messageData.message.length > 100"
                                                            class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
                                        <div v-if="selectedNumberData && !selectedNumberData?.messagesData">

                                            <p
                                                class="text-neutral-800 text-center dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                No messages</p>
                                        </div>

                                        <div v-if="!selectedNumberData">
                                            <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                v-for="messageData in messagesData" :key="messageData.id">
                                                <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                    srcset="">
                                                <div class="flex-1 flex flex-wrap ">
                                                    <div class="w-full flex justify-between mb-[6px]">
                                                        <h6
                                                            class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                            Namepo
                                                        </h6>
                                                        <p
                                                            class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                            {{ messageData.messageTime }}
                                                        </p>
                                                    </div>
                                                    <div class="">
                                                        <template v-if="!messageData.showFullMessage">
                                                            <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <template v-else>
                                                            <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <span v-if="messageData.message.length > 100"
                                                            class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
                                    <!-- openTab  2-->
                                    <div class="w-full pr-[35px]"
                                        v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">


                                        <div v-if="selectedNumberData">
                                            <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                v-for="messageData in selectedNumberData.messagesData"
                                                :key="messageData.id">
                                                <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                    srcset="">
                                                <div class="flex-1 flex flex-wrap ">
                                                    <div class="w-full flex justify-between mb-[6px]">
                                                        <h6
                                                            class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                            {{ messageData.name }}
                                                        </h6>
                                                        <p
                                                            class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                            {{ messageData.messageTime }}
                                                        </p>
                                                    </div>
                                                    <div class="">
                                                        <template v-if="!messageData.showFullMessage">
                                                            <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <template v-else>
                                                            <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <span v-if="messageData.message.length > 100"
                                                            class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
                                        <div v-if="selectedNumberData && !selectedNumberData?.messagesData">

                                            <p
                                                class="text-neutral-800 text-center dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                No messages</p>
                                        </div>

                                        <div v-if="!selectedNumberData">
                                            <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                v-for="messageData in messagesData" :key="messageData.id">
                                                <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                    srcset="">
                                                <div class="flex-1 flex flex-wrap ">
                                                    <div class="w-full flex justify-between mb-[6px]">
                                                        <h6
                                                            class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                            Namepo
                                                        </h6>
                                                        <p
                                                            class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                            {{ messageData.messageTime }}
                                                        </p>
                                                    </div>
                                                    <div class="">
                                                        <template v-if="!messageData.showFullMessage">
                                                            <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <template v-else>
                                                            <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                v-html="formattedMessage(messageData)">
                                                            </div>
                                                        </template>
                                                        <span v-if="messageData.message.length > 100"
                                                            class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
            <!-- All Message Mobile-->

            <div class="" :class="{ 'block lg:hidden': selectedNumber, 'hidden': !selectedNumber }">
                <div v-if="isLoading" class="flex justify-center items-center my-40">
                    <div class="loader-mobile loader"></div>
                </div>

                <div v-else class="max-w-full lg:max-w-[460px] w-full mx-auto mb-[100px]">
                    <div
                        class=" max-w-full lg:max-w-[460px] h-[716px] mt-0 lg:mt-[58px]  bg-white  dark:bg-transparent lg:dark:bg-[#09132C] rounded-[20px] shadow-none lg:shadow-custom mx-auto">
                        <div class="mb-8">

                            <p class="">Selected Number : <span class="text-[#0057FF]">  {{ selectedNumberData?.number }}</span></p>
                        </div>
                        <div class="flex justify-between items-center lg:hidden">

                            <button @click="handleBack" class=" flex justify-center items-center">

                                <svg class="w-[50px] h-[50px] ml-[-18px] iconStockWhite" viewBox="0 0 27 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8337 13H9.16699M9.16699 13L12.417 9.75M9.16699 13L12.417 16.25"
                                        stroke="#495057" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </button>
                            <button v-on:click="toggleShowMessageCompose(true)"
                                class="max-w-[164px] max-h-11 w-full py-2.5 px-2  rounded-[10px] shadow border border-neutral-800 dark:border-[#F5F5F5]  justify-center items-center gap-2 inline-flex  hover:text-[#F5F5F5] iconStock text-neutral-800 dark:text-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-20 disabled:border-neutral-800 disabled:bg-white disabled:hover:text-black disabled:dark:text-black iconStockBlack hover:border-[#0057FF] hover:bg-[#0057FF]">
                                <p class=" text-sm font-normal font-[Poppins] leading-[17px]">
                                    Start Chat
                                </p>
                                <div class="w-6 h-6 relative darkIconStock ">
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
                        </div>
                        <div class="flex lg:justify-start justify-between  mt-10 lg:mt-0  items-center mb-[30px]">
                            <h3
                                class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] leading-[17px] pr-[16px]">
                                All
                                Message</h3>
                            <ul
                                class="flex mb-0 list-none flex-row max-w-[168px]  rounded-xl border border-[#0057FF] overflow-hidden	 h-[37px]">
                                <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                    <a class="w-20 flex items-center justify-center text-center text-sm font-light font-[Poppins] leading-[13px] 
                                        h-[37px] dark:text-[#F5F5F5]" v-on:click="toggleTabs(1)"
                                        v-bind:class="{ 'text-neutral-800 bg-white dark:bg-transparent': openTab !== 1, 'text-white bg-[#0057FF] dark:text-[#F5F5F5]': openTab === 1 }">
                                        Inbox
                                    </a>
                                </li>
                                <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                                    <a class="w-20 flex items-center justify-center text-center text-sm font-light font-[Poppins] leading-[13px]  
                                        h-[37px] dark:text-[#F5F5F5]" v-on:click="toggleTabs(2)"
                                        v-bind:class="{ 'text-neutral-800 bg-white dark:bg-transparent': openTab !== 2, 'text-white bg-[#0057FF] dark:text-[#F5F5F5]': openTab === 2 }">
                                        Sent
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div
                            class="max-w-[100%] w-full h-[50px] px-4  py-3 rounded-[100px] border border-zinc-600 dark:border-[#ACB5BD] justify-start items-center gap-[7px] inline-flex mb-[32px]">

                            <svg v-if="Theme === 'light'" width="16" height="17" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.66658" cy="8.16732" r="6.33333" stroke="#495057" />
                                <path d="M12.3333 12.834L14.6666 15.1673" stroke="#495057" stroke-linecap="round" />
                            </svg>
                            <svg v-if="Theme === 'dark'" width="16" height="17" viewBox="0 0 16 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.66536" cy="8.16732" r="6.33333" stroke="#ACB5BD" />
                                <path d="M12.332 12.834L14.6654 15.1673" stroke="#ACB5BD" stroke-linecap="round" />
                            </svg>

                            <input class="w-full outline-none h-[44px] dark:bg-transparent" type="text"
                                placeholder="Find Message">



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


                                            <div v-if="selectedNumberData">
                                                <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                    v-for="messageData in selectedNumberData.messagesData"
                                                    :key="messageData.id">
                                                    <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                        srcset="">
                                                    <div class="flex-1 flex flex-wrap ">
                                                        <div class="w-full flex justify-between mb-[6px]">
                                                            <h6
                                                                class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                                {{ messageData.name }}
                                                            </h6>
                                                            <p
                                                                class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                                {{ messageData.messageTime }}
                                                            </p>
                                                        </div>
                                                        <div class="">
                                                            <template v-if="!messageData.showFullMessage">
                                                                <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <span v-if="messageData.message.length > 100"
                                                                class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
                                            <div v-if="selectedNumberData && !selectedNumberData?.messagesData">

                                                <p
                                                    class="text-neutral-800 text-center dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                    No messages</p>
                                            </div>

                                            <div v-if="!selectedNumberData">
                                                <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                    v-for="messageData in messagesData" :key="messageData.id">
                                                    <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                        srcset="">
                                                    <div class="flex-1 flex flex-wrap ">
                                                        <div class="w-full flex justify-between mb-[6px]">
                                                            <h6
                                                                class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                                Namepo
                                                            </h6>
                                                            <p
                                                                class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                                {{ messageData.messageTime }}
                                                            </p>
                                                        </div>
                                                        <div class="">
                                                            <template v-if="!messageData.showFullMessage">
                                                                <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <span v-if="messageData.message.length > 100"
                                                                class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
                                        <!-- openTab  2-->
                                        <div class="w-full pr-[35px]"
                                            v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">


                                            <div v-if="selectedNumberData">
                                                <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                    v-for="messageData in selectedNumberData.messagesData"
                                                    :key="messageData.id">
                                                    <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                        srcset="">
                                                    <div class="flex-1 flex flex-wrap ">
                                                        <div class="w-full flex justify-between mb-[6px]">
                                                            <h6
                                                                class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                                {{ messageData.name }}
                                                            </h6>
                                                            <p
                                                                class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                                {{ messageData.messageTime }}
                                                            </p>
                                                        </div>
                                                        <div class="">
                                                            <template v-if="!messageData.showFullMessage">
                                                                <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <span v-if="messageData.message.length > 100"
                                                                class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
                                            <div v-if="selectedNumberData && !selectedNumberData?.messagesData">

                                                <p
                                                    class="text-neutral-800 text-center dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                    No messages</p>
                                            </div>

                                            <div v-if="!selectedNumberData">
                                                <div class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400 "
                                                    v-for="messageData in messagesData" :key="messageData.id">
                                                    <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt=""
                                                        srcset="">
                                                    <div class="flex-1 flex flex-wrap ">
                                                        <div class="w-full flex justify-between mb-[6px]">
                                                            <h6
                                                                class="text-neutral-900 dark:text-[#ACB5BD] text-sm font-medium font-[Poppins] leading-[17px]">
                                                                Namepo
                                                            </h6>
                                                            <p
                                                                class="text-neutral-900 dark:text-[#ACB5BD]   text-xs font-light font-[Poppins] leading-[18.89px]">
                                                                {{ messageData.messageTime }}
                                                            </p>
                                                        </div>
                                                        <div class="">
                                                            <template v-if="!messageData.showFullMessage">
                                                                <div class="w-full text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <template v-else>
                                                                <div class=" text-neutral-800 dark:text-[#ACB5BD]  text-xs font-light font-[Poppins] leading-normal inline"
                                                                    v-html="formattedMessage(messageData)">
                                                                </div>
                                                            </template>
                                                            <span v-if="messageData.message.length > 100"
                                                                class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
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
            </div>

        </div>
        <TransitionRoot as="template" :show="numberSelectedShowModal">
            <Dialog as="div" class="relative z-[9999999]" @close="numberSelectedShowModal = false">
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
                                class=" relative transform overflow-hidden rounded-lg bg-neutral-50 dark:bg-[#09132C] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-[322px] lg:max-w-[361px]">
                                <div>
                                    <div
                                        class="max-w-[361px] w-full h-[196px] p-[50px] bg-neutral-50 dark:bg-[#09132C] rounded-3xl">
                                        <p
                                            class="text-zinc-600 dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] mb-[30px]">
                                            Please select a number</p>
                                        <div class="flex justify-center items-center">


                                            <button
                                                class="max-w-[108px] w-full h-9 py-1.5 bg-[#0057FF] rounded-[10px] justify-center items-center gap-1.5 inline-flex"
                                                @click="openErrorModal(false)">
                                                <div class="text-white text-base font-normal font-[Poppins]">Close</div>
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
    <section class="ml-0 lg:ml-[25px] mb-[97px] mt-0 lg:mt-[70px] w-full"
        :class="{ 'block': showMessageCompose === true, 'hidden': showMessageCompose === !true }">
        <div
            class="max-w-[808px] w-full h-[457px] px-[5px] lg:px-[100px] py-0 lg:py-[50px] bg-transparent lg:bg-white lg:dark:bg-[#09132C] rounded-[30px] shadow-none lg:shadow-custom mx-auto">
            <h3 class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-normal font-[Poppins] leading-[17px] ">Message
                Compose</h3>
            <form v-on:submit="onSubmit" class="mt-[30px]">


                <div class="flex flex-col lg:flex-row justify-between items-center gap-4">

                    <div class="max-w-full lg:max-w-[284px] w-full ">
                        <p
                            class="text-zinc-600  dark:text-[#ACB5BD] text-sm font-normal font-[Poppins] leading-[17px] mb-[14px] ">
                            From Number
                        </p>
                        <input
                            class="max-w-full lg:max-w-[284px] w-full h-10 bg-white rounded-lg border border-gray-400 outline-none px-4 dark:bg-transparent"
                            v-model="inputPhoneValue" readonly type="text" placeholder="+85 654 646 655 874" />
                    </div>


                    <div class="max-w-full lg:max-w-[284px] w-full mt-4 lg:mt-0">
                        <p
                            class="text-zinc-600  dark:text-[#ACB5BD] text-sm font-normal font-[Poppins] leading-[17px] mb-[14px] ">
                            To Number
                        </p>


                        <vue-tel-input
                            class="max-w-full lg:max-w-[284px] w-full h-10 bg-white rounded-lg border border-gray-400 outline-none dark:bg-transparent"
                            :value="phone" @input="onInput" placeholder="+85 654 646 655 874"></vue-tel-input>
                    </div>
                </div>
                <div class="mt-[24px]">

                    <p class="text-zinc-600  dark:text-[#ACB5BD] text-sm font-normal font-[Poppins] leading-[17px]">
                        Message</p>
                    <textarea
                        class="max-w-full lg:max-w-[608px] w-full h-[111px] bg-white rounded-xl border border-zinc-600 mt-[14px] outline-none px-4 py-2 resize-none dark:bg-transparent"></textarea>
                </div>
                <div class="flex justify-end items-center mt-[24px]">
                    <button v-on:click="toggleShowMessageCompose(true)"
                        class="max-w-full lg:max-w-[289px] w-full  h-[49px]  rounded-xl border border-[#0057FF] dark:bg-[#0057FF] justify-center items-center gap-2.5 inline-flex hover:text-[#F5F5F5] hover:bg-[#0057FF] text-[#0057FF] text-base  dark:text-[#F5F5F5] dark:hover:bg-[#F5F5F5] dark:hover:text-[#0057FF]">
                        <div class="    font-normal font-[Poppins] leading-[17px]">
                            Send</div>
                    </button>
                </div>


            </form>
        </div>


    </section>
</template>
<script >
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
const Theme = localStorage.getItem('Theme');

export default {
    components: {
        VueTelInput,
    },
    data() {

        return {
            phone: "",
            openTab: 1,
            isOpen: false,
            selectedOption: 'Active', // Default text,
            selectedNumber: null,
            selectedNumberData: null,
            messageSeenStatus: false,
            toggleArrowIcon: false,
            showMessageCompose: false,
            inputPhoneValue: '',
            numberSelectedShowModal: false,
            isLoading: false,
            numbersData: [
                {
                    id: 1,
                    number: "+8454655444",
                    status: true,
                    img: num1,
                    timeLeft: "10 days left",
                    type: "Private",
                    messagesData: [
                        {
                            id: 1,
                            img: Namepo,
                            name: "Namepo",
                            messageTime: "02 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 2,
                            img: Viveon,
                            name: "Viveon",
                            messageTime: "15 days ago",
                            message: "Linterdum erdum ullamcorper amet consectetur CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 3,
                            img: Tiktok,
                            name: "Tiktok",
                            messageTime: "03 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 4,
                            img: Burgking,
                            name: "Burgking",
                            messageTime: "04 days ago",
                            message: " sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 5,
                            img: Namepo2,
                            name: "Namepo2",
                            messageTime: "07 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 6,
                            img: Viveon2,
                            name: "Viveon2",
                            messageTime: "05 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                    ],
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
                    messagesData: [
                        {
                            id: 1,
                            img: Namepo,
                            name: "Namccepo",
                            messageTime: "02 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 2,
                            img: Viveon,
                            name: "Viveccon",
                            messageTime: "15 days ago",
                            message: "Linterdum erdum ullamcorper amet consectetur CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 3,
                            img: Tiktok,
                            name: "Ticcktok",
                            messageTime: "03 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 4,
                            img: Burgking,
                            name: "Burgking",
                            messageTime: "04 days ago",
                            message: " sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 5,
                            img: Namepo2,
                            name: "Namepo2",
                            messageTime: "07 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 6,
                            img: Viveon2,
                            name: "Viveon2",
                            messageTime: "05 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                    ],
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
                    messagesData: [

                        {
                            id: 4,
                            img: Burgking,
                            name: 'Burgking',
                            messageTime: "04 days ago",
                            message: " sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 5,
                            img: Namepo2,
                            name: 'Namepo2',
                            messageTime: "07 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                        {
                            id: 6,
                            img: Viveon2,
                            name: 'Viveon2',
                            messageTime: "05 days ago",
                            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                        },
                    ],
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
                    name: 'Namepo',
                    messageTime: "02 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 2,
                    img: Viveon,
                    name: 'Viveon',
                    messageTime: "15 days ago",
                    message: "Linterdum erdum ullamcorper amet consectetur CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 3,
                    img: Tiktok,
                    name: 'Tiktok',
                    messageTime: "03 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 4,
                    img: Burgking,
                    name: 'Burgking',
                    messageTime: "04 days ago",
                    message: " sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 5,
                    img: Namepo2,
                    name: 'Namepo2',
                    messageTime: "07 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 6,
                    img: Viveon2,
                    name: 'Viveon2',
                    messageTime: "05 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
            ],
            option: [
                "Active",
                "Deactive"
            ],


        }

    },
    mounted() {
        document.getElementsByName('telephone')[0].placeholder = '+85 654 646 655 874';
        
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

        },
        toggleActiveStatusDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectNumber(data) {

            if (this.selectedNumber === data.id) {
                this.selectedNumber = null;
                this.selectedNumberData = null;
            } else {
                this.selectedNumber = data.id;
                this.selectedNumberData = data;
                this.inputPhoneValue = data?.number
               
                this.isLoading = true;
                setTimeout(() => {
                    this.isLoading = false;
                }, 1000);
                
            }


        },

        selectActiveStatus(option) {
            this.selectedOption = option;
        
            this.isOpen = false;

            this.$emit('update:selectedStatus', option);

        },
        toggleSelectNumber(id) {
            if (this.selectedNumber === id) {
                this.selectedNumber = null;
                this.selectedNumberData = null;
            } else {
                this.selectedNumber = id;
            }
        },
        onInput(phone, phoneObject, input) {
            if (phoneObject?.formatted) {
                this.phone = phoneObject.formatted;
            }
        },
        onSubmit(e) {
            e.preventDefault();
        },
        openErrorModal() {
            this.numberSelectedShowModal = !this.numberSelectedShowModal;
        },
        handleBack() {
            this.selectedNumber = null
        }



    },
    computed: {


        filteredNumberData() {
            return this.numbersData.filter((item) => this.selectedOption == "Active" ? item.status == true : item.status == false)
        },

        formattedMessage() {
            return (messageData) => {
                const message = messageData.message;

                if (message.length <= 100 || messageData.showFullMessage) {

                    const parts = message.split(/(CODE:\s*\d+)/);
                    const formattedParts = parts.map((part, index) => {
                        if (index % 2 === 0) {
                            return part;
                        } else {

                            return `<span class="text-neutral-800 text-xs font-medium font-[Poppins] leading-tight">${part}</span>`;
                        }
                    });

                    return formattedParts;
                }

                const parts = message.split(/(CODE:\s*\d+)/);
                const formattedParts = parts.map((part, index) => {
                    if (index % 2 === 0) {
                        return part;
                    } else {
                        return `<span class="text-neutral-800 dark:text-[#ACB5BD]  text-xs font-medium font-[Poppins] leading-tight	">${part}</span>`;
                    }
                });
                const formattedMessage = parts.length > 1 ? formattedParts[0] + formattedParts[1] : formattedParts.join("").slice(0, 100);

                return formattedMessage;
            };
        },
    },
};


</script>
<style>
body.dark .darkIconFill path {
    fill: white;
}

body.dark .darkIconStock path {
    stroke: white;
}


.iconStock:hover path {
    stroke: white;
}

.iconStockWhite path {
    stroke: white;
}

.iconStock:disabled:hover path {
    stroke: #1E2329;
}

body.dark .iconStockBlack:disabled path {
    stroke: #1E2329;
}


body .whiteIconFill path {
    fill: white;
}

body .blueIconFill path {
    fill: #0057FF;
}

body.dark .vti__dropdown:hover {
    background-color: #223361;
}

body.dark .open {
    background-color: #223361;
}

body.dark .vue-tel-input {

    border-radius: 0.5rem !important;
}

body.dark .vue-tel-input input {
    background-color: #070F24;

}

.vue-tel-input {
    outline: none !important;
    /* border: 1px red  !important; */
    --tw-border-opacity: 1;
    border-color: rgb(156 163 175 / var(--tw-border-opacity));
    border-width: 1px;
    box-shadow: none !important;

}

body.dark .vti__dropdown-list {
    background-color: #070F24;
}

body.dark .vti__dropdown-list .highlighted {
    background-color: #2f3e6a;
}

body.dark .vti__input {
    width: 220px !important;
}

.vti__input::-webkit-input-placeholder::before {
    color: #666;
    content: "Line 1\A Line 2\A Line 3\A";
}


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

/* Media query to show the loader on mobile screens */
@media (max-width: 1023px) {
    .loader-mobile {
        display: block;
    }


}

@media (max-width: 768px) {
    .loader-mobile {
        display: block;
    }


}
</style>