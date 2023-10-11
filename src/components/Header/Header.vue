<script setup>
import { RouterLink } from "vue-router";
import CommunityIcon from "../icons/IconCollections.vue";

const Theme = localStorage.getItem("Theme");
</script>

<template>
  <header class="bg-white dark:bg-[#070F24] sticky top-0 z-[999999]"
    v-bind:class="{ 'shadow-custom': currentPath.includes('dashboard'), 'shadow-custom shadow-transition': hasShadow }">
    <div class="mx-auto  px-4 sm:px-6 lg:px-8 w-full"
    v-bind:class="{ 'max-w-[1440px]': currentPath.includes('dashboard'), 'max-w-[1192px]': !currentPath.includes('dashboard')}"
    
    >
      <div class="flex h-[70px] lg:h-[116px] items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-11">
          <RouterLink class="block text-teal-600 dark:text-[#F5F5F5] header-logo" to="/">
            <span class="sr-only">Home</span>
            <CommunityIcon iconName="siteLogo" />
          </RouterLink>
        </div>
        <!-- dashboard mobile notification icon and balance -->
        <div class="flex items-center gap-4 mr-4">
          <div class="lg:hidden md:hidden flex relative downArrow" v-if="currentPath.includes('dashboard')">
            <div
              class="relative z-[102] cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-[102] downArrow darkCircle"
              @click="
                [
                  (OpenNotificationModal = !OpenNotificationModal),
                  (this.OpenModal = false),
                ]
                ">
              <button class="w-[40px] h-[40px]  rounded-full flex justify-center items-center relative "
                v-bind:class="{ 'bg-[#0057FF] border-2 border-[#6B9EFF]': OpenNotificationModal, 'bg-neutral-100 dark:bg-slate-700  border-none ': !OpenNotificationModal }">

                <svg class="darkIconStockBlack darkIconStock" v-if="!OpenNotificationModal" width="18" height="18" viewBox="0 0 22 22"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.1867 8.90109V8.2552C17.1867 4.70886 14.4168 1.83398 11 1.83398C7.58318 1.83398 4.8133 4.70886 4.8133 8.2552V8.90109C4.8133 9.67621 4.59224 10.434 4.17798 11.0789L3.16283 12.6594C2.23559 14.103 2.94346 16.0652 4.55617 16.5217C8.77501 17.7159 13.225 17.7159 17.4438 16.5217C19.0565 16.0652 19.7644 14.103 18.8372 12.6594L17.822 11.0789C17.4078 10.434 17.1867 9.67621 17.1867 8.90109Z"
                    stroke="#1E2329" />
                  <path
                    d="M6.875 17.416C7.47544 19.0182 9.09558 20.166 11 20.166C12.9044 20.166 14.5246 19.0182 15.125 17.416"
                    stroke="#1E2329" stroke-linecap="round" />
                </svg>
                <svg v-if="OpenNotificationModal" width="18" height="18" viewBox="0 0 22 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                    stroke="white" />
                  <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="white"
                    stroke-linecap="round" />
                </svg>

                <div class="w-[16px] h-[16px] rounded-full bg-[#FF0000] flex justify-center items-center absolute "
                  v-bind:class="{ 'bottom-[-5px] right-[-3px]': OpenNotificationModal, 'top-[5px] right-1': !OpenNotificationModal }">
                  <p class="text-white text-sm lg:text-base">
                    3
                  </p>
                </div>

              </button>
            </div>
            <div @click="
              [
                (OpenNotificationModal = !OpenNotificationModal),
                (this.OpenModal = false),
              ]
              " v-if="OpenNotificationModal"
              class="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-[100]">

            </div>

            <!-- Notification Dropdown -->
            <div
              class=" lg:w-[369px] absolute z-[101] right-[-124px] h-[530px] px-[25px] py-5 bg-neutral-50 dark:bg-slate-800 rounded-[30px] flex-col justify-start items-start gap-3.5 ease-custom-dropdown"
              :class="{ ' dropDownBlock': OpenNotificationModal, 'dropDown-hidden': !OpenNotificationModal }">
              <div class="w-full pb-6 border-b border-gray-400 justify-center items-center gap-2.5 inline-flex">
                <div class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-medium font-[Poppins]">
                  Notification
                </div>
              </div>
              <div class="w-full max-h-[538px] scrollbar scroll-y-auto flex-col justify-start items-start flex pr-[10px]">
                <div v-for="notification in notificationData" :key="notification.id"
                  class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-5 inline-flex">
                  <div class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div class="self-stretch justify-between items-center gap-[15px] inline-flex">
                      <p class="dark:text-[#F5F5F5] text-neutral-900 text-sm font-normal font-[Poppins] leading-[17px]">
                        {{ notification?.title }}
                      </p>
                      <p
                        class="dark:text-[#F5F5F5] text-neutral-900 text-xs font-light font-[Poppins] leading-[18.89px]">
                        {{ notification?.notificationTime }}
                      </p>
                    </div>
                    <div>
                      <span class="dark:text-[#ACB5BD] text-zinc-600 text-xs font-light font-[Poppins] leading-tight">
                        {{
                          showFullMessage[notification.id] ||
                          notification.notificationMessage.length < 100 ? notification.notificationMessage :
                          notification.notificationMessage.substring(0, 100) }} </span>

                          <button v-if="notification.notificationMessage.length > 100"
                            class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
                            @click="toggleMessage(notification.id)">
                            {{ showFullMessage[notification.id] ? "Less" : "More" }}
                          </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="justify-center items-center inline-flex gap-[9px] relative downArrow  md:hidden  lg:hidden"
            v-if="currentPath.includes('dashboard')">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-light font-[Poppins] leading-[17px]">
              $00.00
            </div>
          </div>
        </div>
        <!-- dashboard mobile notification icon and balance -->

        <!-- mobile dropdown -->
        <div class="block md:hidden relative">
          <!-- mobile dropdown btn -->
          <button v-if="!currentPath.includes('dashboard')"
            class="rounded bg-transparent lg:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 darkIconStock"
            v-bind:class="{ hidden: MobileOpenModal }" @click="mobileHandleModalOpen(true)">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 8.75L5 8.75" stroke="#1E2329" stroke-width="1.5" stroke-linecap="round" />
              <path d="M25 15L5 15" stroke="#1E2329" stroke-width="1.5" stroke-linecap="round" />
              <path d="M25 21.25L5 21.25" stroke="#1E2329" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
          <button v-if="!currentPath.includes('dashboard')"
            class="rounded bg-transparent lg:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 flex justify-center items-center darkIconFill"
            v-bind:class="{ hidden: !MobileOpenModal }" @click="mobileHandleModalOpen(true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z">
              </path>
            </svg>
          </button>

          <button v-if="currentPath.includes('dashboard')"
            class="rounded bg-transparent lg:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 darkIconStock"
            @click="toggle()">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 8.75L5 8.75" stroke="#1E2329" stroke-width="1.5" stroke-linecap="round" />
              <path d="M25 15L5 15" stroke="#1E2329" stroke-width="1.5" stroke-linecap="round" />
              <path d="M25 21.25L5 21.25" stroke="#1E2329" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
          <!-- mobile dropdown -->

          <div v-if="!currentPath.includes('dashboard')">
            <div v-if="MobileOpenModal"
              class="absolute z-10 right-0 top-[50px] shadow w-[175px]  bg-neutral-50 dark:bg-[#09132C] rounded-[14px] flex-col justify-start items-start inline-flex">
              <RouterLink to="/service" @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                  Our Service
                </div>
              </RouterLink>
              <RouterLink to="/about" @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                  About Us
                </div>
              </RouterLink>
              <RouterLink to="/contact-us" @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                  Contact Us
                </div>
              </RouterLink>
              <RouterLink v-if="login" to="/dashboard" @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 justify-start items-center gap-2.5 inline-flex text-neutral-800 dark:text-[#F5F5F5]">
                <div
                  class="flex gap-[9px] relative cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-10 downArrow darkCircle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="9" r="3" stroke="#1E2329" />
                    <circle cx="12" cy="12" r="10" stroke="#1E2329" />
                    <path d="M17.9691 20C17.81 17.1085 16.9247 15 12 15C7.07521 15 6.18991 17.1085 6.03076 20"
                      stroke="#1E2329" stroke-linecap="round" />
                  </svg>

                  <span> ahmad </span>
                </div>
              </RouterLink>

              <RouterLink v-if="!login" to="/logIn" @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                <button
                  class="w-[101px] h-[37px] px-4 py-2.5 rounded-[10px] border border-[#0057FF] justify-center items-center inline-flex">
                  <span
                    class="text-center text-neutral-800 dark:text-[#F5F5F5] text-sm font-normal font-[Poppins] leading-[17px]">
                    Sign In
                  </span>
                </button>
              </RouterLink>
              <RouterLink v-if="!login" to="/signUp" @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                <button
                  class="w-24 h-[37px] px-4 py-2.5 bg-[#0057FF] rounded-[10px] justify-center items-end inline-flex">
                  <span class="text-center text-white text-sm font-medium font-[Poppins] leading-[17px]">
                    Sign Up
                  </span>
                </button>
              </RouterLink>
              <div v-if="!login" class="self-stretch px-6 py-5 justify-start items-center gap-2.5 inline-flex">
                <div>
                  <HeaderDropdown :selectedLanguage="selectedLanguage"
                    @update:selectedLanguage="updateSelectedLanguage" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- mobile dropdown -->
        <div v-if="!currentPath.includes('dashboard')" class="md:flex md:items-center md:gap-[42px]">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-11 text-sm">
              <li>
                <RouterLink
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-normal transition hover:text-[#0057FF]"
                  to="/service">
                  Our Service
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-normal transition hover:text-[#0057FF]"
                  to="/about">
                  About us
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-normal font-[Poppins] leading-normal transition hover:text-[#0057FF]"
                  v-bind:class="{ 'mr-8': login }" to="/contact-us">
                  Contact
                </RouterLink>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4" v-if="!login">
            <div class="sm:flex sm:gap-5">
              <div class="hidden sm:flex">
                <RouterLink
                  class="w-[101px] h-[37px] px-4 py-2.5 rounded-[10px] border border-[#0057FF] justify-center items-center inline-flex hover:bg-[#0057FF] text-neutral-800 dark:text-[#F5F5F5] hover:text-[#F5F5F5]"
                  to="/logIn">
                  <span
                    class="text-center  text-sm font-normal font-[Poppins] leading-[17px]">
                    Sign In
                  </span>
                </RouterLink>
              </div>
              <RouterLink
                class="w-24 h-[37px] px-4 py-2.5 bg-[#0057FF] border border-[#0057FF] text-white rounded-[10px] justify-center items-end hidden lg:inline-flex hover:bg-white hover:text-[#0057FF] hover:border-[#0057FF] dark:text-[#F5F5F5] dark:hover:text-[#0057FF]"
                to="/signUp">
                <span class="text-center text-sm font-medium font-[Poppins] leading-[17px]">
                  Sign Up
                </span>
              </RouterLink>

              <div class="hidden md:block">
                <HeaderDropdown :selectedLanguage="selectedLanguage" @update:selectedLanguage="updateSelectedLanguage" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center md:gap-[42px]" v-if="login">
          <div class="flex items-center gap-4">
            <div class="hidden md:flex md:gap-[30px] ">


              <div
                class="max-w-[175px] w0full h-[46px] px-6 py-[18px] bg-neutral-100 dark:bg-slate-700 rounded-[100px] justify-center items-center  inline-flex dark:after:bg-[#ACB5BD] downArrow"
                v-if="currentPath.includes('dashboard')">
                <p
                  class="text-center text-neutral-800 dark:text-white  text-sm font-normal font-[Poppins] leading-[10px] justify-center items-center inline-flex gap-1">
                  My Balance: <span
                    class="text-center text-neutral-800 dark:text-white text-sm font-semibold font-[Poppins] leading-[10px]">0.26$</span>
                </p>

              </div>
              <div class="hidden sm:flex relative items-center
                 dark:after:bg-[#ACB5BD] downArrow" v-if="currentPath.includes('dashboard')">


                <div
                  class="relative z-[102] cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-[102] downArrow darkCircle"
                  @click="
                    [
                      (OpenNotificationModal = !OpenNotificationModal),
                      (this.OpenModal = false),
                    ]
                    ">
                  <button class="w-[46px] h-[46px]  rounded-full flex justify-center items-center relative"
                    v-bind:class="{ 'bg-[#0057FF] border-2 border-[#6B9EFF]': OpenNotificationModal, 'bg-neutral-100 dark:bg-slate-700  border-none ': !OpenNotificationModal }">

                    <svg class="darkIconStockBlack darkIconStock" v-if="!OpenNotificationModal" width="22" height="22"
                      viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.1867 8.90109V8.2552C17.1867 4.70886 14.4168 1.83398 11 1.83398C7.58318 1.83398 4.8133 4.70886 4.8133 8.2552V8.90109C4.8133 9.67621 4.59224 10.434 4.17798 11.0789L3.16283 12.6594C2.23559 14.103 2.94346 16.0652 4.55617 16.5217C8.77501 17.7159 13.225 17.7159 17.4438 16.5217C19.0565 16.0652 19.7644 14.103 18.8372 12.6594L17.822 11.0789C17.4078 10.434 17.1867 9.67621 17.1867 8.90109Z"
                        stroke="#1E2329" />
                      <path
                        d="M6.875 17.416C7.47544 19.0182 9.09558 20.166 11 20.166C12.9044 20.166 14.5246 19.0182 15.125 17.416"
                        stroke="#1E2329" stroke-linecap="round" />
                    </svg>
                    <svg v-if="OpenNotificationModal" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                        stroke="white" />
                      <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="white"
                        stroke-linecap="round" />
                    </svg>

                    <div class="w-[20px] h-[20px] rounded-full bg-[#FF0000] flex justify-center items-center absolute "
                      v-bind:class="{ 'bottom-[-5px] right-[-3px]': OpenNotificationModal, 'top-[5px] right-1': !OpenNotificationModal }">
                      <p class="text-white">
                        3
                      </p>
                    </div>

                  </button>
                </div>
                <div @click="
                  [
                    (OpenNotificationModal = !OpenNotificationModal),
                    (this.OpenModal = false),
                  ]
                  " v-if="OpenNotificationModal"
                  class="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-[100]">

                </div>
                <!-- Notification Dropdown -->
                <div
                  class="z-[102] w-[369px] absolute  right-[-8px] top-[53px] h-[530px] px-[25px] py-5 bg-neutral-50 dark:bg-slate-800 rounded-[30px] flex-col justify-start items-start gap-3.5 inline-flex ease-custom-dropdown"
                  :class="{ ' dropDownBlock': OpenNotificationModal, 'dropDown-hidden': !OpenNotificationModal }">
                  <div class="w-full pb-6 border-b border-gray-400 justify-center items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-medium font-[Poppins]">
                      Notification
                    </div>
                  </div>
                  <div
                    class="w-full max-h-[538px] scrollbar scroll-y-auto flex-col justify-start items-start flex pr-[10px]">
                    <div v-for="notification in notificationData" :key="notification.id"
                      class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-5 inline-flex">
                      <div class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div class="self-stretch justify-between items-center gap-[15px] inline-flex">
                          <p
                            class="dark:text-[#F5F5F5] text-neutral-900 text-sm font-normal font-[Poppins] leading-[17px]">
                            {{ notification?.title }}
                          </p>
                          <p
                            class="dark:text-[#F5F5F5] text-neutral-900 text-xs font-light font-[Poppins] leading-[18.89px]">
                            {{ notification?.notificationTime }}
                          </p>
                        </div>
                        <div>
                          <span
                            class="dark:text-[#ACB5BD] text-zinc-600 text-xs font-light font-[Poppins] leading-tight">
                            {{
                              showFullMessage[notification.id] ||
                              notification.notificationMessage.length < 100 ? notification.notificationMessage :
                              notification.notificationMessage.substring(0, 100) }} </span>

                              <button v-if="notification.notificationMessage.length > 100"
                                class="text-[#0057FF] text-xs font-medium font-[Poppins] leading-tight cursor-pointer pl-1"
                                @click="toggleMessage(notification.id)">
                                {{
                                  showFullMessage[notification.id] ? "Less" : "More"
                                }}
                              </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- account enter icon -->
              <div class="flex gap-[9px] relative items-center">
                <div
                  class="relative  cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-['']  downArrow darkCircle"
                  v-bind:class="{ 'after:z-[105] z-[105]': OpenModal, }" @click="handleModalOpen(true)">


                  <button class="w-[46px] h-[46px] rounded-full flex justify-center items-center"
                    v-bind:class="{ 'bg-[#0057FF] border-2 border-[#6B9EFF]': OpenModal, 'bg-neutral-100 dark:bg-slate-700  border-none ': !OpenModal }">
                    <svg class="darkIconFill" v-if="!OpenModal" width="22" height="22" viewBox="0 0 22 22" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.9307 11.5834L14.5868 11.8525L14.993 12.0128C16.8157 12.7322 18.407 13.9313 19.5965 15.4814C20.7858 17.0313 21.5285 18.8738 21.7452 20.8112C21.769 21.0335 21.7037 21.2564 21.563 21.4313C21.4249 21.6029 21.2252 21.7148 21.0058 21.7434L20.8993 21.7434L20.8978 21.7434C20.6859 21.7446 20.4813 21.6678 20.3234 21.528C20.1655 21.3883 20.0655 21.1956 20.0424 20.9873L20.0423 20.9869C19.7926 18.7764 18.7328 16.7351 17.0657 15.253C15.3987 13.7709 13.2413 12.9518 11.0057 12.9518C8.77015 12.9518 6.61273 13.7709 4.94569 15.253C3.27861 16.7351 2.21879 18.7764 1.96911 20.9869L1.96905 20.9874C1.94413 21.2127 1.83024 21.4192 1.65191 21.5614C1.47354 21.7036 1.24539 21.7698 1.01769 21.7448C0.789998 21.7199 0.581933 21.6061 0.439084 21.4289C0.368359 21.3412 0.31576 21.2406 0.284223 21.1328C0.252687 21.025 0.242814 20.9121 0.255152 20.8006C0.470745 18.8685 1.20949 17.0306 2.3928 15.483C3.57616 13.9352 5.1598 12.7357 6.97499 12.0125L7.37915 11.8515L7.03651 11.5834C5.99364 10.7674 5.23265 9.64857 4.85915 8.38276C4.48566 7.11696 4.51816 5.76689 4.95214 4.5203C5.38613 3.27369 6.20012 2.19236 7.2811 1.42691C8.3621 0.661446 9.65629 0.25 10.9836 0.25C12.3109 0.25 13.6051 0.661446 14.6861 1.42691C15.7671 2.19236 16.5811 3.27369 17.0151 4.5203C17.4491 5.76689 17.4815 7.11696 17.1081 8.38276C16.7346 9.64857 15.9736 10.7674 14.9307 11.5834ZM8.38866 10.4668C9.15689 10.9773 10.0599 11.2497 10.9836 11.2497C12.2222 11.2497 13.4103 10.7604 14.2865 9.88898C15.1628 9.01752 15.6553 7.83527 15.6553 6.60224C15.6553 5.68275 15.3812 4.78402 14.8676 4.01972C14.3541 3.25543 13.6244 2.65994 12.7709 2.30836C11.9175 1.95677 10.9784 1.86481 10.0725 2.04402C9.16649 2.22324 8.33412 2.66564 7.68068 3.3155C7.02723 3.96537 6.58206 4.79352 6.40169 5.69531C6.22133 6.5971 6.31391 7.53181 6.66768 8.3812C7.02144 9.23057 7.62042 9.95631 8.38866 10.4668Z"
                        fill="#1E2329" stroke-width="0.5" />
                    </svg>
                    <svg class="darkIconStock" v-if="OpenModal" width="22" height="22" viewBox="0 0 22 22" fill="#fff"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.9307 11.5834L14.5868 11.8525L14.993 12.0128C16.8157 12.7322 18.407 13.9313 19.5965 15.4814C20.7858 17.0313 21.5285 18.8738 21.7452 20.8112C21.769 21.0335 21.7037 21.2564 21.563 21.4313C21.4249 21.6029 21.2252 21.7148 21.0058 21.7434L20.8993 21.7434L20.8978 21.7434C20.6859 21.7446 20.4813 21.6678 20.3234 21.528C20.1655 21.3883 20.0655 21.1956 20.0424 20.9873L20.0423 20.9869C19.7926 18.7764 18.7328 16.7351 17.0657 15.253C15.3987 13.7709 13.2413 12.9518 11.0057 12.9518C8.77015 12.9518 6.61273 13.7709 4.94569 15.253C3.27861 16.7351 2.21879 18.7764 1.96911 20.9869L1.96905 20.9874C1.94413 21.2127 1.83024 21.4192 1.65191 21.5614C1.47354 21.7036 1.24539 21.7698 1.01769 21.7448C0.789998 21.7199 0.581933 21.6061 0.439084 21.4289C0.368359 21.3412 0.31576 21.2406 0.284223 21.1328C0.252687 21.025 0.242814 20.9121 0.255152 20.8006C0.470745 18.8685 1.20949 17.0306 2.3928 15.483C3.57616 13.9352 5.1598 12.7357 6.97499 12.0125L7.37915 11.8515L7.03651 11.5834C5.99364 10.7674 5.23265 9.64857 4.85915 8.38276C4.48566 7.11696 4.51816 5.76689 4.95214 4.5203C5.38613 3.27369 6.20012 2.19236 7.2811 1.42691C8.3621 0.661446 9.65629 0.25 10.9836 0.25C12.3109 0.25 13.6051 0.661446 14.6861 1.42691C15.7671 2.19236 16.5811 3.27369 17.0151 4.5203C17.4491 5.76689 17.4815 7.11696 17.1081 8.38276C16.7346 9.64857 15.9736 10.7674 14.9307 11.5834ZM8.38866 10.4668C9.15689 10.9773 10.0599 11.2497 10.9836 11.2497C12.2222 11.2497 13.4103 10.7604 14.2865 9.88898C15.1628 9.01752 15.6553 7.83527 15.6553 6.60224C15.6553 5.68275 15.3812 4.78402 14.8676 4.01972C14.3541 3.25543 13.6244 2.65994 12.7709 2.30836C11.9175 1.95677 10.9784 1.86481 10.0725 2.04402C9.16649 2.22324 8.33412 2.66564 7.68068 3.3155C7.02723 3.96537 6.58206 4.79352 6.40169 5.69531C6.22133 6.5971 6.31391 7.53181 6.66768 8.3812C7.02144 9.23057 7.62042 9.95631 8.38866 10.4668Z"
                        fill="#fff" stroke="#F5F5F5" stroke-width="0.5" />
                    </svg>

                  </button>



                </div>
                <!-- profile link dropdown -->

                <div v-if="OpenModal" @click="handleModalOpen(true)"
                  class="fixed top-0 z-[104] bottom-0 right-0 left-0 bg-black  bg-opacity-50 ">

                </div>
                <div @click="handleModalOpen(true)"
                  class="absolute z-[105] right-[5px] top-[53px] shadow w-[232px] h-[448px] bg-neutral-50 dark:bg-[#09132C] rounded-[14px] flex-col justify-start items-start inline-flex ease-custom-dropdown"
                  :class="{ ' dropDownBlock': OpenModal, 'dropDown-hidden': !OpenModal }">
                  <RouterLink to="/dashboard"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      My Dashboard
                    </div>
                  </RouterLink>
                  <RouterLink to="/dashboard/my-number"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      My Number
                    </div>
                  </RouterLink>
                  <RouterLink to="/dashboard/topup-balance"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      TOP-UP Balance
                    </div>
                  </RouterLink>
                  <RouterLink to="/dashboard/balance-transfer"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      Transaction History
                    </div>
                  </RouterLink>
                  <RouterLink to="/dashboard/appearance"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      API Connection
                    </div>
                  </RouterLink>
                  <RouterLink to="/dashboard/account-settings"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      Account setting
                    </div>
                  </RouterLink>
                  <div class="self-stretch px-10 py-5 justify-start items-center gap-2.5 inline-flex cursor-pointer"
                    v-on:click="handleLogOut()">
                    <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
                      Logout
                    </div>
                    <div
                      class="w-5 h-5 relative rounded-[5px] flex-col justify-start items-start inline-flex darkIconStock">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 16.6667C6.3181 16.6667 3.33333 13.6819 3.33333 9.99999C3.33333 6.3181 6.3181 3.33333 10 3.33333"
                          stroke="#1E2329" stroke-linecap="round" />
                        <path d="M8.33317 10H16.6665M16.6665 10L14.1665 7.5M16.6665 10L14.1665 12.5" stroke="#1E2329"
                          stroke-linecap="round" stroke-linejoin="round" />
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
    <div class="fixed top-0 right-0 left-0  bg-slate-600 bg-opacity-60 bottom-0 z-[999999]"
      :class="{ ' dropDownBlock-sidebar': open, 'dropDown-hidden-sidebar': !open }">
      <!-- Sidebar Content -->
      <div ref="content">
        <div :class="{ ' dropDownBlock-sidebar': open, 'dropDown-hidden-sidebar': !open }"
          class="absolute z-[999999] right-0 shadow w-[232px] h-full bg-neutral-50 dark:bg-[#09132C] flex-col justify-start items-start inline-flex transition-all duration-700 overflow-hidden">
          <div class="flex justify-end items-center mt-3 w-full pr-7">
            <button @click="toggle()" class="h-8 w-8 flex justify-center items-center darkIconFill">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-9.414 2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586Z" />
              </svg>
            </button>
          </div>
          <RouterLink to="/dashboard" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Home
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/my-number" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              My Number
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/manage-number" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Manage Number
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/buy-number" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Buy Number
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/transaction" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Transaction
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/balance-transfer" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Balance Transfer
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/topup-balance" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              TOP-UP Balance
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/appearance" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Appearance
            </div>
          </RouterLink>
          <RouterLink to="/dashboard/account-settings" @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Account Setting
            </div>
          </RouterLink>

          <div class="self-stretch px-10 py-5 justify-start items-center gap-2.5 inline-flex cursor-pointer"
            @click="toggle(), handleLogOut()">
            <div class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins]">
              Logout
            </div>
            <div class="w-5 h-5 relative rounded-[5px] flex-col justify-start items-start inline-flex darkIconStock">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 16.6667C6.3181 16.6667 3.33333 13.6819 3.33333 9.99999C3.33333 6.3181 6.3181 3.33333 10 3.33333"
                  stroke="#1E2329" stroke-linecap="round" />
                <path d="M8.33317 10H16.6665M16.6665 10L14.1665 7.5M16.6665 10L14.1665 12.5" stroke="#1E2329"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderDropdown from "./DropDownLanguage.vue";

export default {
  components: {
    HeaderDropdown,
  },
  data() {
    return {
      selectedLanguage: "English", // Initialize with an empty string or a default language
      OpenModal: false,
      MobileOpenModal: false,
      OpenNotificationModal: false,
      currentPath: this.$route.path,
      open: false,
      dimmer: true,
      right: false,
      login: true,
      notificationData: [
        {
          id: 1,

          title: "Namepo",
          notificationTime: "02 days ago",
          notificationMessage: "Lorem ipsum dolor sit amet consectetur",
        },
        {
          id: 2,

          title: "Viveon",
          notificationTime: "15 days ago",
          notificationMessage:
            "Linterdum erdum ullamcorper amet consectetur CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum",
        },
        {
          id: 3,

          title: "Tiktok",
          notificationTime: "03 days ago",
          notificationMessage:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum",
        },
        {
          id: 4,
          title: "Burgking",
          notificationTime: "04 days ago",
          notificationMessage:
            " sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum",
        },
        {
          id: 5,
          title: "Namepo2",
          notificationTime: "07 days ago",
          notificationMessage:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum",
        },
        {
          id: 6,

          title: "Viveon2",
          notificationTime: "05 days ago",
          notificationMessage:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum",
        },
      ],
      showFullMessage: {},
      hasShadow: false,

    };
  },
  created() {

    window.addEventListener("click", this.handleNotificationModalOpen);
  },
  mounted() {

    window.addEventListener('scroll', this.toggleShadow);
  },
  beforeUnmount() {

    window.removeEventListener("click", this.handleNotificationModalOpen);
    window.removeEventListener('scroll', this.toggleShadow);
  },


  methods: {
    updateSelectedLanguage(language) {
      this.selectedLanguage = language;
    },
    handleModalOpen(open) {
      this.OpenModal = !this.OpenModal;
      this.OpenNotificationModal = false;
    },
    mobileHandleModalOpen(open) {
      this.MobileOpenModal = !this.MobileOpenModal;

      console.log("MobileOpenModal", this.MobileOpenModal);
    },
    handleNotificationModalOpen(event) {
      if (!this.$el.contains(event.target)) {
        this.OpenNotificationModal = false;
        this.OpenModal = false;
      }
    },
    toggle() {
      this.open = !this.open;
    },
    toggleMessage(id) {

      this.showFullMessage[id] = !this.showFullMessage[id];
    },
    toggleShadow() {
      this.hasShadow = window.scrollY > 100;

    },
    handleLogOut() {
      this.login = !this.login
    }
  },

  watch: {
    $route(to, from) {
      // Update currentPath when the route changes
      this.currentPath = to.path;
    },
  },

};
</script>
<style>
header .router-link-exact-active {
  color: #0074d9 !important;
  text-decoration: underline;
  font-weight: 500;
}

body.dark .downArrow path {
  stroke: white;
}

body.dark .darkIconStockBlack path {
  stroke: #1E2329;
}

body.dark .darkCircle circle {
  stroke: white;
}

body.dark .header-logo path {
  fill: #fff;
}

body.dark .darkIconFill path {
  fill: white;
}

body.dark .darkIconStock path {
  stroke: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.shadow-transition {
  transition: box-shadow 0.5s ease-in-out;
  /* Add animation to the shadow */
}

.ease-custom {
  transition-timing-function: cubic-bezier(.61, -0.53, .43, 1.43);
}

.ease-custom-dropdown {
  top: -50px;
  transition: all 0.3s linear;
}

.dropDown-hidden {

  width: 0px !important;
  height: 0 !important;
  overflow: hidden !important;
  z-index: -1 !important;
  right: 0 !important;
  left: unset !important;
  right: -100px !important;
  opacity: 0 !important;
}

.dropDownBlock {
  top: 50px;
  width: 330px;
  height: auto;
  overflow: hidden;
  z-index: 101;
  opacity: 1;
}


.ease-custom-dropdown-sidebar {
  top: -50px;
  transition: all 0.3s linear;
}

.dropDown-hidden-sidebar {

  width: 0px;
  height: 0;
  overflow: hidden;
  z-index: 999999;
  right: 0;
  left: unset !important;
  right: -100px !important;
  opacity: 0;
}

.dropDownBlock-sidebar {
  height: auto;
  overflow: hidden;
  z-index: 999999;
  opacity: 1;
}
</style>
