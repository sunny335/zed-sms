<script setup>
import { RouterLink } from "vue-router";
import CommunityIcon from "../icons/IconCollections.vue";
const login = true;
const Theme = localStorage.getItem("Theme");
</script>

<template>
  <header
    class="bg-white dark:bg-[#070F24] sticky top-0 z-[9999]"
    v-bind:class="{ 'shadow-custom': currentPath.includes('dashboard'),'shadow-custom shadow-transition': hasShadow }"
    
  >
    <div class="mx-auto max-w-[1192px] px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex h-[70px] lg:h-[116px] items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-11">
          <RouterLink
            class="block text-teal-600 dark:text-[#F5F5F5] header-logo"
            to="/"
          >
            <span class="sr-only">Home</span>
            <CommunityIcon iconName="siteLogo" />
          </RouterLink>
        </div>
        <!-- dashboard mobile notification icon and balance -->
        <div class="flex items-center gap-4 mr-4">
          <div
            class="lg:hidden flex relative downArrow"
            v-if="currentPath.includes('dashboard')"
          >
            <svg
              @click="
                [
                  (OpenNotificationModal = !OpenNotificationModal),
                  (this.OpenModal = false),
                ]
              "
              class="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                stroke="#1E2329"
              />
              <path
                d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                stroke="#1E2329"
                stroke-linecap="round"
              />
              <circle cx="17" cy="8" r="4.5" fill="#0057FF" stroke="white" />
            </svg>

            <!-- Notification Dropdown -->
            <div
              v-if="OpenNotificationModal"
              class="w-[369px] absolute z-10 right-[-135px] top-[40px] h-[630px] px-[25px] py-5 bg-neutral-50 dark:bg-slate-800 rounded-[30px] flex-col justify-start items-start gap-3.5 inline-flex"
            >
              <div
                class="w-full pb-6 border-b border-gray-400 justify-center items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-medium font-['Poppins']"
                >
                  Notification
                </div>
              </div>
              <div
                class="w-full max-h-[538px] scrollbar scroll-y-auto flex-col justify-start items-start flex pr-[10px]"
              >
                <div
                  v-for="notification in notificationData"
                  :key="notification.id"
                  class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-5 inline-flex"
                >
                  <div
                    class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex"
                  >
                    <div
                      class="self-stretch justify-between items-center gap-[15px] inline-flex"
                    >
                      <p
                        class="dark:text-[#F5F5F5] text-neutral-900 text-sm font-normal font-['Poppins'] leading-[17px]"
                      >
                        {{ notification?.title }}
                      </p>
                      <p
                        class="dark:text-[#F5F5F5] text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]"
                      >
                        {{ notification?.notificationTime }}
                      </p>
                    </div>
                    <div>
                      <span
                        class="dark:text-[#ACB5BD] text-zinc-600 text-xs font-light font-['Poppins'] leading-tight"
                      >
                        {{
                          showFullMessage[notification.id] ||
                          notification.notificationMessage.length < 100
                            ? notification.notificationMessage
                            : notification.notificationMessage.substring(0, 100)
                        }}
                      </span>

                      <button
                        v-if="notification.notificationMessage.length > 100"
                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer pl-1"
                        @click="toggleMessage(notification.id)"
                      >
                        {{ showFullMessage[notification.id] ? "Less" : "More" }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="justify-center items-center inline-flex gap-[9px] relative downArrow block lg:hidden"
            v-if="currentPath.includes('dashboard')"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-light font-['Poppins'] leading-[17px]"
            >
              $00.00
            </div>
          </div>
        </div>
        <!-- dashboard mobile notification icon and balance -->

        <!-- mobile dropdown -->
        <div class="block md:hidden relative">
          <!-- mobile dropdown btn -->
          <button
            v-if="!currentPath.includes('dashboard')"
            class="rounded bg-transparent lg:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 darkIconStock"
            v-bind:class="{ hidden: MobileOpenModal }"
            @click="mobileHandleModalOpen(true)"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 8.75L5 8.75"
                stroke="#1E2329"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M25 15L5 15"
                stroke="#1E2329"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M25 21.25L5 21.25"
                stroke="#1E2329"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button
            v-if="!currentPath.includes('dashboard')"
            class="rounded bg-transparent lg:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 flex justify-center items-center darkIconFill"
            v-bind:class="{ hidden: !MobileOpenModal }"
            @click="mobileHandleModalOpen(true)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
              ></path>
            </svg>
          </button>

          <button
            v-if="currentPath.includes('dashboard')"
            class="rounded bg-transparent lg:bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 darkIconStock"
            @click="toggle()"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 8.75L5 8.75"
                stroke="#1E2329"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M25 15L5 15"
                stroke="#1E2329"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M25 21.25L5 21.25"
                stroke="#1E2329"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <!-- mobile dropdown -->

          <div v-if="!currentPath.includes('dashboard')">
            <div
              v-if="MobileOpenModal"
              class="absolute z-10 right-0 top-[50px] shadow w-[175px] pb-4 bg-neutral-50 dark:bg-[#09132C] rounded-[14px] flex-col justify-start items-start inline-flex"
            >
              <RouterLink
                to="/service"
                @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                >
                  Our Service
                </div>
              </RouterLink>
              <RouterLink
                to="/about"
                @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                >
                  About Us
                </div>
              </RouterLink>
              <RouterLink
                to="/contact-us"
                @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
              >
                <div
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                >
                  Contact Us
                </div>
              </RouterLink>
              <RouterLink
                v-if="login"
                to="/dashboard"
                @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex text-neutral-800 dark:text-[#F5F5F5]"
              >
                <div
                  class="flex gap-[9px] relative cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-10 downArrow darkCircle"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="9" r="3" stroke="#1E2329" />
                    <circle cx="12" cy="12" r="10" stroke="#1E2329" />
                    <path
                      d="M17.9691 20C17.81 17.1085 16.9247 15 12 15C7.07521 15 6.18991 17.1085 6.03076 20"
                      stroke="#1E2329"
                      stroke-linecap="round"
                    />
                  </svg>

                  <span> ahmad </span>
                </div>
              </RouterLink>

              <RouterLink
                v-if="!login"
                to="/logIn"
                @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
              >
                <button
                  class="w-[101px] h-[37px] px-4 py-2.5 rounded-[10px] border border-blue-600 justify-center items-center inline-flex"
                >
                  <span
                    class="text-center text-neutral-800 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins'] leading-[17px]"
                  >
                    Sign In
                  </span>
                </button>
              </RouterLink>
              <RouterLink
                v-if="!login"
                to="/signUp"
                @click="mobileHandleModalOpen(true)"
                class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
              >
                <button
                  class="w-24 h-[37px] px-4 py-2.5 bg-[#0057FF] rounded-[10px] justify-center items-end inline-flex"
                >
                  <span
                    class="text-center text-white text-sm font-medium font-['Poppins'] leading-[17px]"
                  >
                    Sign Up
                  </span>
                </button>
              </RouterLink>
              <div
                v-if="!login"
                class="self-stretch px-6 py-5 justify-start items-center gap-2.5 inline-flex"
              >
                <div>
                  <HeaderDropdown
                    :selectedLanguage="selectedLanguage"
                    @update:selectedLanguage="updateSelectedLanguage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- mobile dropdown -->
        <div
          v-if="!currentPath.includes('dashboard')"
          class="md:flex md:items-center md:gap-[42px]"
        >
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-11 text-sm">
              <li>
                <RouterLink
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                  to="/service"
                >
                  Our Service
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                  to="/about"
                >
                  About us
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  class="text-neutral-800 dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-normal transition hover:text-blue-600"
                  v-bind:class="{ 'mr-8': login }"
              
                  to="/contact-us"
                >
                  Contact
                </RouterLink>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4" v-if="!login">
            <div class="sm:flex sm:gap-5">
              <div class="hidden sm:flex">
                <RouterLink
                  class="w-[101px] h-[37px] px-4 py-2.5 rounded-[10px] border border-blue-600 justify-center items-center inline-flex"
                  to="/logIn"
                >
                  <span
                    class="text-center text-neutral-800 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins'] leading-[17px]"
                  >
                    Sign In
                  </span>
                </RouterLink>
              </div>
              <RouterLink
                class="w-24 h-[37px] px-4 py-2.5 bg-[#0057FF] rounded-[10px] justify-center items-end hidden lg:inline-flex"
                to="/signUp"
              >
                <span
                  class="text-center text-white text-sm font-medium font-['Poppins'] leading-[17px]"
                >
                  Sign Up
                </span>
              </RouterLink>

              <div class="hidden md:block">
                <HeaderDropdown
                  :selectedLanguage="selectedLanguage"
                  @update:selectedLanguage="updateSelectedLanguage"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex md:items-center md:gap-[42px]" v-if="login">
          <div class="flex items-center gap-4">
            <div class="hidden sm:flex sm:gap-[24px]">
              <div
                class="hidden sm:flex relative after:content-[''] after:w-[2px] after:absolute after:top-[6px] after:h-[10px] after:right-[-12px] after:bg-[#495057] dark:after:bg-[#ACB5BD] downArrow"
                v-if="currentPath.includes('dashboard')"
              >
                <svg
                  @click="
                    [
                      (OpenNotificationModal = !OpenNotificationModal),
                      (this.OpenModal = false),
                    ]
                  "
                  class="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7491 9.70957V9.00497C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00497V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z"
                    stroke="#1E2329"
                  />
                  <path
                    d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                    stroke="#1E2329"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="17"
                    cy="8"
                    r="4.5"
                    fill="#0057FF"
                    stroke="white"
                  />
                </svg>

                <!-- Notification Dropdown -->
                <div
                  v-if="OpenNotificationModal"
                  class="w-[369px] absolute z-10 right-0 top-[40px] h-[530px] px-[25px] py-5 bg-neutral-50 dark:bg-slate-800 rounded-[30px] flex-col justify-start items-start gap-3.5 inline-flex"
                >
                  <div
                    class="w-full pb-6 border-b border-gray-400 justify-center items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-medium font-['Poppins']"
                    >
                      Notification
                    </div>
                  </div>
                  <div
                    class="w-full max-h-[538px] scrollbar scroll-y-auto flex-col justify-start items-start flex pr-[10px]"
                  >
                    <div
                      v-for="notification in notificationData"
                      :key="notification.id"
                      class="self-stretch py-5 border-b border-zinc-200 justify-start items-start gap-5 inline-flex"
                    >
                      <div
                        class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex"
                      >
                        <div
                          class="self-stretch justify-between items-center gap-[15px] inline-flex"
                        >
                          <p
                            class="dark:text-[#F5F5F5] text-neutral-900 text-sm font-normal font-['Poppins'] leading-[17px]"
                          >
                            {{ notification?.title }}
                          </p>
                          <p
                            class="dark:text-[#F5F5F5] text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]"
                          >
                            {{ notification?.notificationTime }}
                          </p>
                        </div>
                        <div>
                          <span
                            class="dark:text-[#ACB5BD] text-zinc-600 text-xs font-light font-['Poppins'] leading-tight"
                          >
                            {{
                              showFullMessage[notification.id] ||
                              notification.notificationMessage.length < 100
                                ? notification.notificationMessage
                                : notification.notificationMessage.substring(
                                    0,
                                    100
                                  )
                            }}
                          </span>

                          <button
                            v-if="notification.notificationMessage.length > 100"
                            class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer pl-1"
                            @click="toggleMessage(notification.id)"
                          >
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
              <div
                class="justify-center items-center inline-flex gap-[9px] relative after:content-[''] after:w-[2px] after:absolute after:top-[6px] after:h-[10px] after:right-[-12px] after:bg-[#495057] dark:after:bg-[#ACB5BD] downArrow"
                v-if="currentPath.includes('dashboard')"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 8H10"
                    stroke="#1E2329"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.994 22 13.9167V10.0833C22 10.006 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9Z"
                    stroke="#1E2329"
                  />
                  <path
                    d="M20.965 9C20.8873 7.1277 20.6366 5.97975 19.8284 5.17157C18.6569 4 16.7712 4 13 4L10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15"
                    stroke="#1E2329"
                  />
                  <path
                    d="M17.9912 12H18.0002"
                    stroke="#1E2329"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div
                  class="text-neutral-800 dark:text-[#F5F5F5] text-xl font-light font-['Poppins'] leading-[17px]"
                >
                  $00.00
                </div>
              </div>

              <div class="flex gap-[9px] relative items-center">
                <div
                  class="flex gap-[9px] relative cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-10 downArrow darkCircle"
                  @click="handleModalOpen(true)"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="9" r="3" stroke="#1E2329" />
                    <circle cx="12" cy="12" r="10" stroke="#1E2329" />
                    <path
                      d="M17.9691 20C17.81 17.1085 16.9247 15 12 15C7.07521 15 6.18991 17.1085 6.03076 20"
                      stroke="#1E2329"
                      stroke-linecap="round"
                    />
                  </svg>

                  <span> ahmad </span>

                  <svg
                    class="downArrow block"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    v-if="!OpenModal"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 7.5L9.99996 12.5L4.16663 7.5"
                      stroke="#1E2329"
                      stroke-width="1.1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    class="downArrow"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    v-if="OpenModal"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 15L12 9L19 15"
                      stroke="#495057"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <!-- profile link dropdown -->
                <div
                  v-if="OpenModal"
                  @click="handleModalOpen(true)"
                  class="absolute z-10 right-0 top-[40px] shadow w-[232px] h-[448px] bg-neutral-50 dark:bg-[#09132C] rounded-[14px] flex-col justify-start items-start inline-flex"
                >
                  <RouterLink
                    to="/dashboard"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      My Dashboard
                    </div>
                  </RouterLink>
                  <RouterLink
                    to="/dashboard/my-number"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      My Number
                    </div>
                  </RouterLink>
                  <RouterLink
                    to="/dashboard/topup-balance"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      TOP-UP Balance
                    </div>
                  </RouterLink>
                  <RouterLink
                    to="/dashboard/balance-transfer"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      Transaction History
                    </div>
                  </RouterLink>
                  <RouterLink
                    to="/dashboard/appearance"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      API Connection
                    </div>
                  </RouterLink>
                  <RouterLink
                    to="/dashboard/account-settings"
                    class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      Account setting
                    </div>
                  </RouterLink>
                  <div
                    class="self-stretch px-10 py-5 justify-start items-center gap-2.5 inline-flex"
                  >
                    <div
                      class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                    >
                      Logout
                    </div>
                    <div
                      class="w-5 h-5 relative rounded-[5px] flex-col justify-start items-start inline-flex darkIconStock"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 16.6667C6.3181 16.6667 3.33333 13.6819 3.33333 9.99999C3.33333 6.3181 6.3181 3.33333 10 3.33333"
                          stroke="#1E2329"
                          stroke-linecap="round"
                        />
                        <path
                          d="M8.33317 10H16.6665M16.6665 10L14.1665 7.5M16.6665 10L14.1665 12.5"
                          stroke="#1E2329"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
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
    <div
      v-if="open"
      class="fixed top-0 right-0 left-0 bg-slate-600 bg-opacity-60 bottom-0 z-[99999]"
    >
      <!-- Sidebar Content -->
      <div ref="content">
        <div
          v-if="open"
          class="absolute z-[99999] right-0 shadow w-[232px] h-full bg-neutral-50 dark:bg-[#09132C] flex-col justify-start items-start inline-flex transition-all duration-700 overflow-hidden"
        >
          <div class="flex justify-end items-center mt-3 w-full pr-7">
            <button
              @click="toggle()"
              class="h-8 w-8 flex justify-center items-center darkIconFill"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-9.414 2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586Z"
                />
              </svg>
            </button>
          </div>
          <RouterLink
            to="/dashboard"
            @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              My Dashboard
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/my-number"
            @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              My Number
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/topup-balance"
            @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              TOP-UP Balance
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/balance-transfer"
            @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              Transaction History
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/appearance"
            @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              API Connection
            </div>
          </RouterLink>
          <RouterLink
            to="/dashboard/account-settings"
            @click="toggle()"
            class="self-stretch px-10 py-5 border-b border-gray-400 justify-start items-center gap-2.5 inline-flex"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              Account setting
            </div>
          </RouterLink>
          <div
            class="self-stretch px-10 py-5 justify-start items-center gap-2.5 inline-flex"
            @click="toggle()"
          >
            <div
              class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
            >
              Logout
            </div>
            <div
              class="w-5 h-5 relative rounded-[5px] flex-col justify-start items-start inline-flex darkIconStock"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 16.6667C6.3181 16.6667 3.33333 13.6819 3.33333 9.99999C3.33333 6.3181 6.3181 3.33333 10 3.33333"
                  stroke="#1E2329"
                  stroke-linecap="round"
                />
                <path
                  d="M8.33317 10H16.6665M16.6665 10L14.1665 7.5M16.6665 10L14.1665 12.5"
                  stroke="#1E2329"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
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
  transition: box-shadow 0.5s ease-in-out; /* Add animation to the shadow */
}


</style>
