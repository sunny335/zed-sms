<script setup>
import PhilipinsImg from "../../assets/img/Philipins.png";
import LebanonImg from "../../assets/img/flags/Lebanon.png";
import TaiwanImg from "../../assets/img/flags/Taiwan.png";
import IsraelImg from "../../assets/img/flags/Israel.png";
import RussiaImg from "../../assets/img/flags/Russia.png";
import NorthAfricaImg from "../../assets/img/flags/North-africa.png";
import SouthAmericaImg from "../../assets/img/flags/South-america.png";
import DenmarkImg from "../../assets/img/flags/Denmark.png";
import AppleImg from "../../assets/img/company/Apple.png";
import MicrosoftImg from "../../assets/img/company/Microsoft.png";
import MicrosoftImg2 from "../../assets/img/company/Microsoft2.png";
import MicrosoftImg3 from "../../assets/img/company/Microsoft3.png";
import AmazonImg from "../../assets/img/company/Amazon.png";
import AmazonImg2 from "../../assets/img/company/Amazon2.png";
import TeslaImg from "../../assets/img/company/Tesla.png";
import TeslaImg2 from "../../assets/img/company/Tesla2.png";
import { ref, computed } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const open = ref(true);

const selectedSearchCountry = ref(null);

const filteredCountries = computed(() => {
  if (!selectedSearchCountry?.value) {
    return countries;
  } else {
    const searchTerm = selectedSearchCountry?.value.toLowerCase();
    return countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }
});

const selectedSearchService = ref(null);

const filteredService = computed(() => {
  if (!selectedSearchService.value) {
    return services;
  } else {
    const searchTerm = selectedSearchService.value.toLowerCase();
    return services.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
  }
});

const selectedSearchPhone = ref(null);

const filteredPhone = computed(() => {
  if (!selectedSearchPhone.value) {
    return phoneNumbers;
  } else {
    const searchTerm = selectedSearchPhone.value.toLowerCase();
    return phoneNumbers.filter((country) =>
      country.toLowerCase().includes(searchTerm)
    );
  }
});
</script>

<template>
  <div>
    <h1
      class="text-neutral-800 dark:text-[#F5F5F5] text-center text-[32px] font-medium font-['Poppins'] leading-[22px]"
    >
      To Get A Number
    </h1>
    <p
      class="text-neutral-800 dark:text-[#F5F5F5] text-center text-base font-light font-['Poppins'] leading-[11px] mt-[20px]"
    >
      for any kind of services
    </p>
  </div>
  <div class="flex flex-wrap mt-[30px]">
    <div class="w-full">
      <ul
        class="flex mb-0 list-none flex-row max-w-[300px] lg:max-w-[450px] w-full mx-auto rounded-2xl border border-blue-600 overflow-hidden h-[58px]"
        :class="{'hidden lg:flex' : selectedCountry || selectedService || selectedPhone}"
      >
        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="max-w-[100px] lg:max-w-[150px] w-[100px] lg:w-[150px] flex items-center justify-center dark:text-[#F5F5F5] text-center text-sm lg:text-lg font-light font-['Poppins'] leading-[13px] px-5 pt-2 pb-3 h-[58px]"
            v-on:click="
              toggleTabs(1);
              selectCountry(null);
              selectPhone(null);
              selectService(null);
            "
            v-bind:class="{
              'text-neutral-800  dark:text-[#F5F5F5] dark:bg-[#09132C]  bg-white':
                openTab !== 1,
              'text-white bg-blue-600': openTab === 1,
            }"
          >
            Shared
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="max-w-[100px] lg:max-w-[150px] w-[100px] lg:w-[150px] flex items-center justify-center text-center text-sm lg:text-lg font-light font-['Poppins'] leading-[13px] px-5 pt-2 pb-3 h-[58px] dark:text-[#F5F5F5]"
            v-on:click="
              toggleTabs(2);
              selectCountry(null);
              selectPhone(null);
              selectService(null);
            "
            v-bind:class="{
              'text-neutral-800   dark:text-[#F5F5F5] dark:bg-[#09132C] bg-white':
                openTab !== 2,
              'text-white bg-blue-600': openTab === 2,
            }"
          >
            Private
          </a>
        </li>
        <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="max-w-[100px] lg:max-w-[150px] w-[100px] lg:w-[150px] flex items-center justify-center text-center text-sm lg:text-lg font-light font-['Poppins'] leading-[13px] px-5 pt-2 pb-3 h-[58px] dark:text-[#F5F5F5]"
            v-on:click="
              toggleTabs(3);
              selectCountry(null);
              selectPhone(null);
              selectService(null);
            "
            v-bind:class="{
              'text-neutral-800   dark:text-[#F5F5F5] dark:bg-[#09132C]  bg-white':
                openTab !== 3,
              'text-white bg-blue-600': openTab === 3,
            }"
          >
            Temporary
          </a>
        </li>
      </ul>
      <!-- Mobile Show Selected data -->

      <div class="relative px-[22px] mt-[30px]  block lg:hidden">
        <div class="absolute left-[-10px] top-[3px]" >
          <div
           @click="handleBackStateTab1_3(data)"
           v-if="openTab == 1 || openTab == 3"
            class="relative border border-gray-800 dark:border-white rounded-full cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-10 darkIconStock"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8333 13.4238H9.16663M9.16663 13.4238L12.4166 10.1738M9.16663 13.4238L12.4166 16.6738"
                stroke="#495057"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
           @click="handleBackStateTab2(data)"
           v-if="openTab == 2"
            class="relative border border-gray-800 dark:border-white rounded-full cursor-pointer after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:content-[''] after:z-10 darkIconStock"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8333 13.4238H9.16663M9.16663 13.4238L12.4166 10.1738M9.16663 13.4238L12.4166 16.6738"
                stroke="#495057"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
    

        <div
          class="max-w-full overflow-x-auto scroll-hide mx-auto"
          ref="scrollContainer"
        >
          <div
            class="items-center gap-[20px] min-h-[60px] justify-center w-max mx-auto pb-[26px] flex pl-2"
            ref="content"
            :style="{ transform: `translateX(-${scrollPosition}px)` }"
          >
            <div class="flex gap-[6px] items-center ">
              <div
                class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-normal font-['Poppins']"
              >
                Country:
              </div>
              <div v-if="selectedCountry" class="flex gap-[6px] items-center">
                
                <img
                  :src="selectedCountry?.flag"
                  class="w-[20px] h-[20px] rounded-full"
                  alt="Flag"
                />

                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-light font-['Poppins']"
                >
                  {{ selectedCountry?.name }}
                </div>
              </div>
            </div>
            <div
              class="flex gap-[6px] items-center "
              v-bind:class="{
                hidden: openTab == 2,
                block: openTab === 2 || openTab === 1,
              }"
            >
              <div
                class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-normal font-['Poppins']"
              >
                Service:
              </div>

              <div v-if="selectedService" class="flex gap-[6px] items-center">
                <img
                  class="w-[20px] h-[20px] rounded-full"
                  :src="selectedService?.flag"
                  alt="Image Description"
                />
                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-light font-['Poppins']"
                >
                  {{ selectedService?.name }}
                </div>
              </div>
            </div>
            <div
              class="flex gap-[6px] items-center"
              v-bind:class="{
                hidden: openTab == 3 || openTab === 1,
                block: openTab === 2 ,
              }"
            >
              <div
                class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-normal font-['Poppins']"
              >
                Number:
              </div>
              <div
                v-if="selectedPhone"
                class="text-zinc-600 text-[11px] dark:text-[#F5F5F5] font-light font-['Poppins']"
              >
                {{ selectedPhone }}
              </div>
            </div>
            <!-- <div
              class="flex gap-[6px] items-center"
              v-if="selectedPhone && selectedWeek"
            >
              <div
                class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-normal font-['Poppins']"
              >
                Rent:
              </div>
              <div
                class="text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-light font-['Poppins']"
              >
                {{ selectedWeek }}
              </div>
            </div> -->
            <!-- <div
              class="flex gap-[6px] items-center"
              v-if="openTab === 2 ? selectedCountry?.price : selectedService"
            >
              <div
                class="text-center text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-normal font-['Poppins']"
              >
                Cost:
              </div>
              <div
                class="text-zinc-600 dark:text-[#F5F5F5] text-[11px] font-light font-['Poppins']"
              >
                {{
                  openTab === 2 ? selectedCountry?.price : selectedService.price
                }}
              </div>
            </div> -->
          </div>
        </div>
      </div>

      <!-- Mobile Show Selected data -->
      <div
        class="w-full mt-2 lg:mt-[60px] px-[30px] pt-1 lg:pt-[34px] pb-[30px] rounded-[36px] border border-zinc-600 flex-col justify-start items-center gap-[30px] inline-flex"
      >
        <div class="w-full">
          <div class="tab-content tab-space w-full">
            <div
              class="items-center gap-[20px] min-h-[60px] justify-center border-b border-zinc-600 w-max mx-auto pb-[26px] hidden lg:flex"
            >
              <div class="flex gap-[6px] items-center">
                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']"
                >
                  Country:
                </div>
                <div v-if="selectedCountry" class="flex gap-[6px] items-center">
                  <!-- <img :src="PhilipinsImg" alt="Image Description" /> -->
                  <img
                    :src="selectedCountry?.flag"
                    class="w-[30px] h-[30px] rounded-full"
                    alt="Flag"
                  />

                  <div
                    class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-light font-['Poppins']"
                  >
                    {{ selectedCountry?.name }}
                  </div>
                </div>
              </div>
              <div
                class="flex gap-[6px] items-center"
                v-bind:class="{
                  hidden: openTab == 2,
                  block: openTab === 2 || openTab === 1,
                }"
              >
                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']"
                >
                  Service:
                </div>

                <div v-if="selectedService" class="flex gap-[6px] items-center">
                  <img
                    class="w-[30px] h-[30px] rounded-full"
                    :src="selectedService?.flag"
                    alt="Image Description"
                  />
                  <div
                    class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-light font-['Poppins']"
                  >
                    {{ selectedService?.name }}
                  </div>
                </div>
              </div>
              <div
                class="flex gap-[6px] items-center"
                v-bind:class="{
                  hidden: openTab == 3,
                  block: openTab === 3 || openTab === 1,
                }"
              >
                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']"
                >
                  Number:
                </div>
                <div
                  v-if="selectedPhone"
                  class="text-zinc-600 text-sm dark:text-[#F5F5F5] font-light font-['Poppins']"
                >
                  {{ selectedPhone }}
                </div>
              </div>
              <div
                class="flex gap-[6px] items-center"
                v-if="selectedPhone && selectedWeek"
              >
                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']"
                >
                  Rent:
                </div>
                <div
                  class="text-zinc-600 dark:text-[#F5F5F5] text-sm font-light font-['Poppins']"
                >
                  {{ selectedWeek }}
                </div>
              </div>
              <div
                class="flex gap-[6px] items-center"
                v-if="openTab === 2 ? selectedCountry?.price : selectedService"
              >
                <div
                  class="text-center text-zinc-600 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']"
                >
                  Cost:
                </div>
                <div
                  class="text-zinc-600 dark:text-[#F5F5F5] text-sm font-light font-['Poppins']"
                >
                  {{
                    openTab === 2
                      ? selectedCountry?.price
                      : selectedService?.price
                  }}
                </div>
              </div>
            </div>
            <div
              
              v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              class="w-full"
            >
              <div class="mt-[30px]">
                <div class="flex gap-4">
                  <!-- column1 -->
                  <div
                    class="max-w-full lg:max-w-[306px] w-full"
                    v-bind:class="{ 'hidden lg:block': selectedCountry }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter country"
                          required
                          v-model="selectedSearchCountry"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          class="mr-[13px] rounded-[14px] border-gray-400 cursor-pointer"
                          v-for="(country, index) in filteredCountries"
                          :key="index"
                          @click="selectCountry(country)"
                          :class="{
                            border:
                              selectedCountry?.name === country?.name &&
                              country?.flag &&
                              selectedCountry?.name,
                          }"
                        >
                          <div
                            class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2" -->
                              <img
                                :src="country.flag"
                                class="w-[30px] h-[30px] rounded-full"
                                alt="Flag"
                              />
                              <!-- <img class="w-[30px] h-[30px] rounded-full"
                                                                :src="PhilipinsImg" /> -->
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                              >
                                {{ country.name }}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- column2 -->
                  <div
                    class="max-w-full lg:max-w-[306px] w-full lg:block"
                    v-bind:class="{
                      block: selectedCountry,
                      'hidden lg:block': !selectedCountry || selectedService,
                    }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Service"
                          required
                          v-model="selectedSearchService"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          class="mr-[13px] rounded-[14px] border-gray-400 cursor-pointer"
                          v-for="(service, index) in filteredService"
                          :key="index"
                          @click="selectService(service)"
                          :class="{
                            border:
                              service?.flag == selectedService?.flag &&
                              selectedService?.name == service?.name,
                          }"
                        >
                          <div
                            class="max-w-[290px] w-full h-[58px] pl-6 pr-[30px] py-3.5 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                
                                                                                                                                     alt="Flag" /> -->
                              <img
                                :src="service?.flag"
                                class="w-[30px] h-[30px] rounded-full"
                                alt="flag"
                              />
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                              >
                                {{ service?.name }}
                              </div>
                            </div>
                            <div
                              class="text-right text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                            >
                              {{ service?.price }}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- column2 end -->
                  <!-- column3 -->
                  <div
                    class="max-w-full lg:max-w-[423px] w-full lg:block"
                    v-bind:class="{
                      block: selectedService,
                      'hidden lg:block': !selectedService,
                    }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter number"
                          required
                          v-model="selectedSearchPhone"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          v-for="(phoneNumber, index) in filteredPhone"
                          :key="index"
                          class="mr-[13px] rounded-[14px] lg:h-auto lg:p-0 border-gray-400 cursor-pointer"
                          @click="selectPhone(phoneNumber)"
                          :class="{
                            'border pt-[10px] h-[96px]':
                              selectedPhone === phoneNumber,
                          }"
                        >
                          <div
                            class="w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins'] flex flex-col lg:flex-row items-center gap-[16px]"
                              >
                                {{ phoneNumber }}
                                <div
                                  v-if="selectedPhone === phoneNumber"
                                  class="border border-gray-400 flex items-center py-[5px] px-[12px] rounded-[10px]"
                                >
                                  <div class="pr-[3px]">
                                    <WeekListDropdown
                                      :selectedWeek="selectedWeek"
                                      @update:selectedWeek="updateSelectedWeek"
                                    />
                                  </div>
                                  <div
                                    @click="handleModalOpen(true)"
                                    class="flex items-center gap-[6px] border-l border-zinc-600 pl-[3px] text-zinc-600 dark:text-[#F5F5F5]"
                                  >
                                    <span
                                      class=" text-xs font-normal font-['Poppins']"
                                      >Get Now</span
                                    >
                                    <svg
                                      class="darkIconStock"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2.07371 8.31669C1.65461 6.36087 1.44506 5.38296 1.97038 4.73315C2.4957 4.08334 3.4958 4.08334 5.49602 4.08334H8.50378C10.504 4.08334 11.5041 4.08334 12.0294 4.73315C12.5547 5.38296 12.3452 6.36087 11.9261 8.31669L11.6761 9.48335C11.392 10.809 11.25 11.4718 10.7687 11.8609C10.2874 12.25 9.60952 12.25 8.25378 12.25H5.74602C4.39027 12.25 3.7124 12.25 3.23111 11.8609C2.74981 11.4718 2.60778 10.809 2.32371 9.48335L2.07371 8.31669Z"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                      />
                                      <path
                                        d="M4.66675 7H9.33342"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M5.83325 8.75H8.16659"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M10.5 5.25L8.75 1.75"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M3.5 5.25L5.25 1.75"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <div class="mt-[30px]">
                <div class="flex gap-4">
                  <div
                    class="max-w-3/6 w-full"
                    v-bind:class="{ 'hidden lg:block': selectedCountry }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 dark:text-[#F5F5F5] sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-transparent"
                          placeholder="Enter country"
                          required
                          v-model="selectedSearchCountry"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          class="mr-[13px] rounded-[14px] border-gray-400 cursor-pointer"
                          v-for="(country, index) in filteredCountries"
                          :key="index"
                          @click="selectCountry(country)"
                          :class="{
                            border:
                              selectedCountry?.name == country?.name &&
                              selectedCountry?.flag == country?.flag,
                          }"
                        >
                          <div
                            class="w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                
                alt="Flag" /> -->
                              <img
                                :src="country?.flag"
                                class="w-[30px] h-[30px] rounded-full"
                                alt="Flag"
                              />
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                              >
                                {{ country?.name }}
                              </div>
                            </div>
                            <div
                              class="text-right text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                            >
                              {{ country?.price }}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- phone part -->

                  <div
                    class="max-w-3/6 w-full"
                    v-bind:class="{
                      block: selectedCountry,
                      'hidden lg:block': !selectedCountry,
                    }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-transparent"
                          placeholder="Enter number"
                          required
                          v-model="selectedSearchPhone"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          v-for="(phoneNumber, index) in filteredPhone"
                          :key="index"
                          class="mr-[13px] rounded-[14px] lg:h-auto border-gray-400 cursor-pointer"
                          @click="selectPhone(phoneNumber)"
                          :class="{
                            'border pt-[10px] h-[96px]':
                              selectedPhone === phoneNumber,
                          }"
                        >
                          <div
                            class="max-w-full w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins'] flex flex-col lg:flex-row items-center gap-[16px]"
                              >
                                {{ phoneNumber }}
                                <div
                                  v-if="selectedPhone === phoneNumber"
                                  class="border border-gray-400 flex items-center py-[5px] px-[12px] rounded-[10px]"
                                >
                                  <div class="pr-[3px]">
                                    <WeekListDropdown
                                      :selectedWeek="selectedWeek"
                                      @update:selectedWeek="updateSelectedWeek"
                                    />
                                  </div>
                                  <div
                                    @click="handleModalOpen(true)"
                                    class="flex items-center gap-[6px] border-l border-zinc-600 pl-[3px]"
                                  >
                                    <span
                                      class="text-zinc-600 dark:text-[#F5F5F5] text-xs font-normal font-['Poppins']"
                                      >Get Now</span
                                    >
                                    <svg
                                      class="darkIconStock"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2.07371 8.31669C1.65461 6.36087 1.44506 5.38296 1.97038 4.73315C2.4957 4.08334 3.4958 4.08334 5.49602 4.08334H8.50378C10.504 4.08334 11.5041 4.08334 12.0294 4.73315C12.5547 5.38296 12.3452 6.36087 11.9261 8.31669L11.6761 9.48335C11.392 10.809 11.25 11.4718 10.7687 11.8609C10.2874 12.25 9.60952 12.25 8.25378 12.25H5.74602C4.39027 12.25 3.7124 12.25 3.23111 11.8609C2.74981 11.4718 2.60778 10.809 2.32371 9.48335L2.07371 8.31669Z"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                      />
                                      <path
                                        d="M4.66675 7H9.33342"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M5.83325 8.75H8.16659"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M10.5 5.25L8.75 1.75"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M3.5 5.25L5.25 1.75"
                                        stroke="#495057"
                                        stroke-width="0.7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <div class="mt-[30px]">
                <div class="flex gap-4">
                  <div
                    class="max-w-3/6 w-full"
                    v-bind:class="{ 'hidden lg:block': selectedCountry }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-transparent"
                          placeholder="Enter country"
                          required
                          v-model="selectedSearchCountry"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          class="mr-[13px] rounded-[14px] border-gray-400 cursor-pointer"
                          v-for="(country, index) in filteredCountries"
                          :key="index"
                          @click="selectCountry(country)"
                          :class="{
                            border:
                              selectedCountry?.name == country?.name &&
                              selectedCountry?.flag == country?.flag,
                          }"
                        >
                          <div
                            class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                                                        
                                                        alt="Flag" /> -->
                              <img
                                :src="country?.flag"
                                class="w-[30px] h-[30px] rounded-full"
                                alt="Flag"
                              />
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                              >
                                {{ country?.name }}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- column2 -->
                  <div
                    class="max-w-3/6 w-full"
                    v-bind:class="{
                      block: selectedCountry,
                      'hidden lg:block': !selectedCountry,
                    }"
                  >
                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#F5F5F5]"
                        >Search</label
                      >
                      <div class="relative">
                        <div
                          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                              fill="#ACB5BD"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#F5F5F5] dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-transparent"
                          placeholder="Enter Service"
                          required
                          v-model="selectedSearchService"
                        />
                      </div>
                    </form>
                    <div
                      class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]"
                    >
                      <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                        <li
                          class="mr-[13px] rounded-[14px] border-gray-400 cursor-pointer flex flex-col lg:flex-row items-center gap-1 lg:h-auto lg:gap-[16px]"
                          v-for="(service, index) in filteredService"
                          :key="index"
                          @click="selectService(service)"
                          :class="{
                            'border  h-[96px]':
                              selectedService?.name == service?.name &&
                              selectedService?.flag == service?.flag,
                          }"
                        >
                          <div
                            class="max-w-[290px] w-full h-[58px] pl-6 pr-[30px] py-3.5 justify-between items-center inline-flex"
                          >
                            <div
                              class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex"
                            >
                              <img
                                :src="service?.flag"
                                class="w-[30px] h-[30px] rounded-full"
                                alt="Flag"
                              />
                              <div
                                class="grow shrink basis-0 text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                              >
                                {{ service?.name }}
                              </div>
                            </div>
                            <div
                              class="text-right text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-['Poppins']"
                            >
                              {{ service?.price }}
                            </div>
                          </div>
                          <div
                            v-if="
                              selectedService?.name === service?.name &&
                              selectedService?.flag === service?.flag
                            "
                            class="border border-gray-400 flex items-center py-[5px] px-[12px] rounded-[10px]"
                          >
                            <div
                              @click="handleModalOpen(true)"
                              class="flex items-center gap-[6px] pl-[3px]"
                            >
                              <span
                                class="text-zinc-600 dark:text-[#F5F5F5] text-xs font-normal font-['Poppins']"
                                >Get Now</span
                              >
                              <svg
                                class="darkIconStock"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.07371 8.31669C1.65461 6.36087 1.44506 5.38296 1.97038 4.73315C2.4957 4.08334 3.4958 4.08334 5.49602 4.08334H8.50378C10.504 4.08334 11.5041 4.08334 12.0294 4.73315C12.5547 5.38296 12.3452 6.36087 11.9261 8.31669L11.6761 9.48335C11.392 10.809 11.25 11.4718 10.7687 11.8609C10.2874 12.25 9.60952 12.25 8.25378 12.25H5.74602C4.39027 12.25 3.7124 12.25 3.23111 11.8609C2.74981 11.4718 2.60778 10.809 2.32371 9.48335L2.07371 8.31669Z"
                                  stroke="#495057"
                                  stroke-width="0.7"
                                />
                                <path
                                  d="M4.66675 7H9.33342"
                                  stroke="#495057"
                                  stroke-width="0.7"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.83325 8.75H8.16659"
                                  stroke="#495057"
                                  stroke-width="0.7"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M10.5 5.25L8.75 1.75"
                                  stroke="#495057"
                                  stroke-width="0.7"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M3.5 5.25L5.25 1.75"
                                  stroke="#495057"
                                  stroke-width="0.7"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- column2 end -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot as="template" :show="OpenModal">
    <Dialog as="div" class="relative z-[9999999]" @close="OpenModal = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-neutral-50 dark:bg-[#09132C] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-[322px]"
            >
              <div class="bg-neutral-50 dark:bg-[#09132C] px-[30px] pt-5 pb-0">
                <div class="">
                  <div
                    v-if="selectedCountry"
                    class="flex items-center border-b border-zinc-200 py-[16px]"
                  >
                    <div
                      class="text-left text-zinc-600 dark:text-[#ACB5BD] text-sm font-medium font-['Poppins'] w-2/4"
                    >
                      Country:
                    </div>
                    <div class="flex gap-[6px] items-center w-2/4">
                      <!-- <img :src="PhilipinsImg" alt="Image Description" /> -->
                      <img
                        :src="selectedCountry?.flag"
                        class="w-[20px] h-[20px] rounded-full"
                        alt="Flag"
                        width="20"
                      />

                      <div
                        class="text-center text-zinc-600 dark:text-[#ACB5BD] text-sm font-light font-['Poppins']"
                      >
                        {{ selectedCountry?.name }}
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="selectedService"
                    class="flex items-center border-b border-zinc-200 py-[16px]"
                  >
                    <div
                      class="text-left text-zinc-600 dark:text-[#ACB5BD] text-sm font-medium font-['Poppins'] w-2/4"
                    >
                      Service:
                    </div>
                    <div class="flex gap-[6px] items-center">
                      <img
                        :src="selectedService?.flag"
                        alt="Image Description"
                        width="20"
                      />
                      <div
                        class="text-center text-zinc-600 dark:text-[#ACB5BD] text-sm font-light font-['Poppins'] w-2/4"
                      >
                        {{ selectedService?.name }}
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="selectedPhone"
                    class="flex items-center border-b border-zinc-200 py-[16px]"
                  >
                    <div
                      class="text-left text-zinc-600 dark:text-[#ACB5BD] text-sm font-medium font-['Poppins'] w-2/4"
                    >
                      Number:
                    </div>
                    <div
                      class="text-zinc-600 dark:text-[#ACB5BD] text-sm font-light font-['Poppins'] w-2/4"
                    >
                      {{ selectedPhone }}
                    </div>
                  </div>
                  <div
                    v-if="selectedPhone && selectedWeek"
                    class="flex items-center border-b border-zinc-200 py-[16px]"
                  >
                    <div
                      class="text-left text-zinc-600 dark:text-[#ACB5BD] text-sm font-medium font-['Poppins'] w-2/4"
                    >
                      Rent:
                    </div>
                    <div
                      class="text-zinc-600 dark:text-[#ACB5BD] text-sm font-light font-['Poppins'] w-2/4"
                    >
                      {{ selectedWeek }}
                    </div>
                  </div>
                  <div
                    v-if="
                      openTab === 2
                        ? selectedCountry?.price
                        : selectedService?.price
                    "
                    class="flex items-center border-b border-zinc-200 py-[16px]"
                  >
                    <div
                      class="text-left text-zinc-600 dark:text-[#ACB5BD] text-sm font-medium font-['Poppins'] w-2/4"
                    >
                      Cost:
                    </div>
                    <div
                      class="text-zinc-600 dark:text-[#ACB5BD] text-sm font-light font-['Poppins'] w-2/4"
                    >
                      {{
                        openTab === 2
                          ? selectedCountry?.price
                          : selectedService?.price
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-[30px] py-[30px]">
                <div class="justify-start items-start gap-5 inline-flex w-full">
                  <div
                    @click="handleModalOpen(false)"
                    ref="cancelButtonRef"
                    class="cursor-pointer px-6 py-[9px] rounded-[10px] border border-zinc-600 justify-center items-center gap-2 flex"
                  >
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10"
                        stroke="#495057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div
                      class="text-zinc-600 dark:text-[#ACB5BD] text-sm font-light font-['Poppins']"
                    >
                      Back
                    </div>
                  </div>
                  <RouterLink
                    to="/payment"
                    class="w-2/4 h-[41px] px-6 py-2.5 rounded-[10px] border border-blue-600 dark:bg-blue-600 justify-center items-center gap-2.5 flex"
                  >
                    <div
                      class="text-center text-blue-600 dark:text-[#F5F5F5] text-sm font-normal font-['Poppins']"
                    >
                      Next
                    </div>
                    <svg
                      v-if="Theme === 'light'"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.57396 8.81673C2.15485 6.86091 1.9453 5.883 2.47062 5.23319C2.99594 4.58337 3.99605 4.58337 5.99626 4.58337H9.00402C11.0042 4.58337 12.0043 4.58337 12.5297 5.23319C13.055 5.883 12.8454 6.86091 12.4263 8.81673L12.1763 9.98339C11.8923 11.309 11.7502 11.9719 11.2689 12.361C10.7876 12.75 10.1098 12.75 8.75402 12.75H6.24626C4.89052 12.75 4.21264 12.75 3.73135 12.361C3.25006 11.9719 3.10802 11.309 2.82396 9.98339L2.57396 8.81673Z"
                        stroke="#0057FF"
                      />
                      <path
                        d="M5.1665 7.5H9.83317"
                        stroke="#0057FF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.3335 9.25H8.66683"
                        stroke="#0057FF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 5.75L9.25 2.25"
                        stroke="#0057FF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 5.75L5.75 2.25"
                        stroke="#0057FF"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      v-if="Theme === 'dark'"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.57396 8.81673C2.15485 6.86091 1.9453 5.883 2.47062 5.23319C2.99594 4.58337 3.99605 4.58337 5.99626 4.58337H9.00402C11.0042 4.58337 12.0043 4.58337 12.5297 5.23319C13.055 5.883 12.8454 6.86091 12.4263 8.81673L12.1763 9.98339C11.8923 11.309 11.7502 11.9719 11.2689 12.361C10.7876 12.75 10.1098 12.75 8.75402 12.75H6.24626C4.89052 12.75 4.21264 12.75 3.73135 12.361C3.25006 11.9719 3.10802 11.309 2.82396 9.98339L2.57396 8.81673Z"
                        stroke="#F5F5F5"
                      />
                      <path
                        d="M5.1665 7.5H9.83317"
                        stroke="#F5F5F5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.3335 9.25H8.66683"
                        stroke="#F5F5F5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11 5.75L9.25 2.25"
                        stroke="#F5F5F5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 5.75L5.75 2.25"
                        stroke="#F5F5F5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </RouterLink>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import WeekListDropdown from "../WeekListDropdown/WeekListDropdown.vue";
const Theme = localStorage.getItem("Theme");

const countries = [
  { name: "United States", price: "$0.35", flag: PhilipinsImg },
  { name: "Lebanon", price: "$0.35", flag: LebanonImg },
  { name: "Taiwan", price: "$0.35", flag: TaiwanImg },
  { name: "Israel", price: "$0.35", flag: IsraelImg },
  { name: "Russia", price: "$0.35", flag: RussiaImg },
  { name: "North Africa", price: "$0.35", flag: NorthAfricaImg },
  { name: "Denmark", price: "$0.35", flag: DenmarkImg },
  { name: "South America", price: "$0.35", flag: SouthAmericaImg },
  { name: "Russia", price: "$0.35", flag: RussiaImg },
  { name: "North Africa", price: "$0.35", flag: NorthAfricaImg },
  { name: "Denmark", price: "$0.35", flag: DenmarkImg },
  { name: "South America", price: "$0.35", flag: SouthAmericaImg },
];

const services = [
  { name: "Apple", price: "$0.45", flag: AppleImg },
  { name: "Amazon", price: "$0.45", flag: AmazonImg },
  { name: "Amazon", price: "$0.45", flag: AmazonImg2 },
  { name: "Tesla", price: "$0.45", flag: TeslaImg },
  { name: "Micrososft", price: "$0.45", flag: MicrosoftImg },
  { name: "Microssoft", price: "$0.45", flag: MicrosoftImg2 },
  { name: "Micrososft", price: "$0.45", flag: MicrosoftImg3 },
  { name: "Tesla", price: "$0.45", flag: TeslaImg2 },
  { name: "Miicrosoft", price: "$10.45", flag: MicrosoftImg },
  { name: "Microsoft", price: "$0.45", flag: MicrosoftImg2 },
  { name: "Tessla", price: "$0.45", flag: TeslaImg2 },
];

const phoneNumbers = [
  "+88013-456-7590",
  "+88015-555-5545",
  "+88017-654-3510",
  "+88018-888-8888",
  "+88015-123-4567",
  "+88013-456-7890",
  "+88015-555-5555",
  "+88017-654-3280",
  "+88018-888-8458",
  "+88015-123-4597",
  "+88013-456-7190",
  "+88015-555-5255",
  "+88017-654-3710",
  "+88018-888-8848",
  "+88015-123-4557",
];

export default {
  components: {
    WeekListDropdown,
  },
  name: "pink-tabs",
  data() {
    return {
      modules: [Navigation],
      selectedWeek: "01 week",
      openTab: 1,
      selectedCountry: false,
      selectedService: null,
      selectedPhone: null,
      OpenModal: false,
      scrollPosition: 0,
      contentWidth: 0,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    selectCountry(country) {
      this.selectedCountry = country;
    },
    selectService(service) {
      this.selectedService = service;
    },
    selectPhone(phone) {
      this.selectedPhone = phone;
    },
    updateSelectedWeek(week) {
      this.selectedWeek = week;
    },
    handleModalOpen(open) {
      this.OpenModal = open;
    },

    scrollLeft() {
      this.scrollPosition -= 100;
      this.scrollPosition = Math.max(0, this.scrollPosition);
    },

    scrollRight() {
      this.scrollPosition += 100;
      console.log("scrollPosition", this.scrollPosition);

      const element = this.$refs.scrollContainer;
      const elementContent = this.$refs.content;
      if (element) {
        const contentWidth = elementContent.getBoundingClientRect().width;
        const scrollContainertWidth = element.getBoundingClientRect().width;
        const maxScrollPosition = contentWidth - scrollContainertWidth;
        this.scrollPosition = Math.min(maxScrollPosition, this.scrollPosition);
      }
    },
    handleBackStateTab1_3(){
      
      if(this.selectedService !== null){
        this.selectedService = null,
        this.selectedPhone = null
      }else if(this.selectedService === null){
        this.selectedCountry = null
      }
  
    },
    handleBackStateTab2(){
      if(this.selectedPhone !== null){
     
        this.selectedPhone = null
        // this.selectedCountry = null
      }else if(this.selectedService === null){
        this.selectedCountry = null
      }
      
    }

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

.scroll-hide::-webkit-scrollbar {
  display: none;
}

.scroll-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.arrow-right-slider {
  transform: rotate(178deg);
}
</style>
