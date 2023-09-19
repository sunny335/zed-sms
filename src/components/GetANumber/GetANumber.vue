
<script setup>
import PhilipinsImg from '../../assets/img/Philipins.png';
import LebanonImg from '../../assets/img/flags/Lebanon.png';
import TaiwanImg from '../../assets/img/flags/Taiwan.png';
import IsraelImg from '../../assets/img/flags/Israel.png';
import RussiaImg from '../../assets/img/flags/Russia.png';
import NorthAfricaImg from '../../assets/img/flags/North-africa.png';
import SouthAmericaImg from '../../assets/img/flags/South-america.png';
import DenmarkImg from '../../assets/img/flags/Denmark.png';
import AppleImg from '../../assets/img/company/Apple.png';
import MicrosoftImg from '../../assets/img/company/Microsoft.png';
import MicrosoftImg2 from '../../assets/img/company/Microsoft2.png';
import MicrosoftImg3 from '../../assets/img/company/Microsoft3.png';
import AmazonImg from '../../assets/img/company/Amazon.png';
import AmazonImg2 from '../../assets/img/company/Amazon2.png';
import TeslaImg from '../../assets/img/company/Tesla.png';
import TeslaImg2 from '../../assets/img/company/Tesla2.png';

</script>

<template>
    <div>
        <h1 class="text-neutral-800 text-center text-[32px] font-medium font-['Poppins'] leading-[22px]">To Get A Number
        </h1>
        <p class="text-neutral-800 text-center text-base font-light font-['Poppins'] leading-[11px] mt-[20px]">for any kind
            of services</p>
    </div>
    <div class="flex flex-wrap mt-[30px]">
        <div class="w-full">
            <ul
                class="flex mb-0 list-none flex-row max-w-[450px] mx-auto rounded-2xl border border-blue-600 overflow-hidden	 h-[58px]">
                <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                    <a class="w-[150px] flex items-center justify-center text-center text-lg font-light font-['Poppins'] leading-[13px] px-5 pt-2 pb-3 h-[58px] "
                        v-on:click="toggleTabs(1)"
                        v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1 }">
                        Shared
                    </a>
                </li>
                <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                    <a class="w-[150px] flex items-center justify-center text-center text-lg font-light font-['Poppins'] leading-[13px] px-5 pt-2 pb-3 h-[58px] "
                        v-on:click="toggleTabs(2)"
                        v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2 }">
                        Private
                    </a>
                </li>
                <li class="-mb-px last:mr-0 flex-auto text-center cursor-pointer">
                    <a class="w-[150px] flex items-center justify-center text-center text-lg font-light font-['Poppins'] leading-[13px] px-5 pt-2 pb-3 h-[58px] "
                        v-on:click="toggleTabs(3)"
                        v-bind:class="{ 'text-neutral-800 bg-white': openTab !== 3, 'text-white bg-blue-600': openTab === 3 }">
                        Temporary
                    </a>
                </li>
            </ul>
            <div
                class="w-full mt-[60px] px-[30px] pt-[34px] pb-[30px] rounded-[36px] border border-zinc-600 flex-col justify-start items-center gap-[30px] inline-flex">
                <div class="w-full">

                    <div class="tab-content tab-space w-full">
                        <div
                            class="flex items-center gap-[20px] justify-center border-b border-zinc-600 w-max mx-auto pb-[26px]">
                            <div class="flex gap-[6px] items-center">
                                <div class="text-center text-zinc-600 text-sm font-normal font-['Poppins']">Country:
                                </div>
                                <div class="flex gap-[6px] items-center">
                                    <img :src="PhilipinsImg" alt="Image Description" />

                                    <div class="text-center text-zinc-600 text-sm font-light font-['Poppins']">South
                                        Africa</div>
                                </div>
                            </div>
                            <div class="flex gap-[6px] items-center">
                                <div class="text-center text-zinc-600 text-sm font-normal font-['Poppins']">Service:
                                </div>
                                <div class="flex gap-[6px] items-center">
                                    <img :src="PhilipinsImg" alt="Image Description" />
                                    <div class="text-center text-zinc-600 text-sm font-light font-['Poppins']">
                                        Instagram</div>
                                </div>
                            </div>
                            <div class="flex gap-[6px] items-center">
                                <div class="text-center text-zinc-600 text-sm font-normal font-['Poppins']">Number:
                                </div>
                                <div class="text-zinc-600 text-sm font-light font-['Poppins']">+880 12321 2***5232</div>
                            </div>
                            <div class="flex gap-[6px] items-center">
                                <div class="text-center text-zinc-600 text-sm font-normal font-['Poppins']">Rent:
                                </div>
                                <div class="text-zinc-600 text-sm font-light font-['Poppins']">1 Week</div>
                            </div>
                            <div class="flex gap-[6px] items-center">
                                <div class="text-center text-zinc-600 text-sm font-normal font-['Poppins']">Cost:
                                </div>
                                <div class="text-zinc-600 text-sm font-light font-['Poppins']">$00.00</div>
                            </div>
                        </div>
                        <div class="w-full" v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                            <div class="mt-[30px]">
                                <div class="flex gap-4">
                                    <div class="max-w-[306px] w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter country" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">

                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar ">
                                                <li v-for="(country, index) in countries" :key="index">
                                                    <div
                                                        class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">
                                                            <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2" -->
                                                            <img :src="country.flag" class="w-[30px] h-[30px] rounded-full"
                                                                alt="Flag" />
                                                            <!-- <img class="w-[30px] h-[30px] rounded-full"
                                                                :src="PhilipinsImg" /> -->
                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ country.name }}</div>
                                                        </div>
                                                    </div>

                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <!-- column2 -->
                                    <div class="max-w-[306px] w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter Service" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                                                <li v-for="(service, index) in services" :key="index">
                                                    <div
                                                        class="max-w-[290px] w-full h-[58px] pl-6 pr-[30px] py-3.5 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">
                                                            <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                
                alt="Flag" /> -->
                                                            <img :src="service.flag" class="w-[30px] h-[30px] rounded-full"
                                                                alt="flag" />
                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ service.name }}</div>
                                                        </div>
                                                        <div
                                                            class="text-right text-neutral-800 text-base font-light font-['Poppins']">
                                                            {{ service.price }}</div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- column2 end -->

                                    <div class="max-w-[423px] w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter number" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                                                <li v-for="(phoneNumber, index) in phoneNumbers" :key="index">

                                                    <div
                                                        class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">

                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ phoneNumber }}</div>
                                                        </div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                            <div class="mt-[30px]">
                                <div class="flex gap-4">
                                    <div class="max-w-3/6 w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter country" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">

                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar ">
                                                <li v-for="(country, index) in countries" :key="index">
                                                    <div
                                                        class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">
                                                            <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                
                alt="Flag" /> -->
                                                            <img :src="country.flag" class="w-[30px] h-[30px] rounded-full"
                                                                alt="Flag" />
                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ country.name }}</div>
                                                        </div>
                                                    </div>

                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <!-- phone part -->

                                    <div class="max-w-3/6 w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter number" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                                                <li v-for="(phoneNumber, index) in phoneNumbers" :key="index">

                                                    <div
                                                        class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">

                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ phoneNumber }}</div>
                                                        </div>
                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                            <div class="mt-[30px]">
                                <div class="flex gap-4">
                                    <div class="max-w-3/6 w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter country" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">

                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar ">
                                                <li v-for="(country, index) in countries" :key="index">
                                                    <div
                                                        class="max-w-[290px] w-full h-[54px] pl-6 pr-[30px] py-3 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">
                                                            <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                                                        
                                                        alt="Flag" /> -->
                                                            <img :src="country.flag" class="w-[30px] h-[30px] rounded-full"
                                                                alt="Flag" />
                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ country.name }}</div>
                                                        </div>
                                                    </div>

                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <!-- column2 -->
                                    <div class="max-w-3/6 w-full">

                                        <form>
                                            <label for="default-search"
                                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div class="relative">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M21.9606 21.3974L16.8506 16.2919H16.7955C18.3707 14.4364 19.1666 12.0443 19.0169 9.61604C18.8672 7.18772 17.7835 4.91128 15.9926 3.26291C14.2015 1.61453 11.8419 0.721918 9.4073 0.771788C6.97269 0.821659 4.65169 1.81015 2.9298 3.53048C1.20791 5.25081 0.218527 7.56971 0.16861 10.0021C0.118696 12.4345 1.01212 14.792 2.66198 16.5814C4.31185 18.3709 6.59035 19.4535 9.02087 19.603C11.4514 19.7526 13.8456 18.9573 15.7027 17.3836C15.7027 17.3836 15.7027 17.423 15.7027 17.4386L20.8129 22.5442C20.886 22.6178 20.9729 22.6762 21.0687 22.7161C21.1645 22.756 21.2673 22.7766 21.3711 22.7766C21.4748 22.7766 21.5775 22.756 21.6734 22.7161C21.7692 22.6762 21.8561 22.6178 21.9292 22.5442C22.0098 22.4728 22.075 22.3857 22.1205 22.2884C22.1659 22.1909 22.191 22.0851 22.1939 21.9775C22.197 21.87 22.1777 21.7631 22.1376 21.6632C22.0975 21.5635 22.0372 21.473 21.9606 21.3974ZM9.60993 18.0278C8.05503 18.0278 6.53506 17.5671 5.2422 16.704C3.94935 15.8409 2.94169 14.6142 2.34666 13.179C1.75163 11.7437 1.59593 10.1644 1.89929 8.6408C2.20263 7.11716 2.95139 5.71761 4.05087 4.61912C5.15035 3.52063 6.55117 2.77256 8.07619 2.46947C9.60121 2.1664 11.1819 2.32196 12.6185 2.91645C14.055 3.51094 15.2829 4.51769 16.1467 5.80937C17.0106 7.10106 17.4717 8.61966 17.4717 10.1732C17.4717 11.2046 17.2683 12.226 16.8732 13.179C16.4781 14.1319 15.8991 14.9978 15.169 15.7272C14.439 16.4566 13.5723 17.0351 12.6185 17.4298C11.6647 17.8246 10.6424 18.0278 9.60993 18.0278Z"
                                                            fill="#ACB5BD" />
                                                    </svg>

                                                </div>
                                                <input type="search" id="default-search"
                                                    class="block w-full p-4 pl-10 text-sm text-gray-900 border-b border-gray-300 focus:ring-blue-500 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter Service" required>

                                            </div>
                                        </form>
                                        <div
                                            class="relative after:content-['*'] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                                            <ul class="mt-6 overflow-y-auto h-[491px] scrollbar">
                                                <li v-for="(service, index) in services" :key="index">
                                                    <div
                                                        class="max-w-[290px] w-full h-[58px] pl-6 pr-[30px] py-3.5 justify-between items-center inline-flex">
                                                        <div
                                                            class="grow shrink basis-0 h-[30px] justify-start items-center gap-2.5 flex">
                                                            <!-- <img :src="getFlagImage(country.flag)" class="w-4 h-4 mr-2"
                
                alt="Flag" /> -->
                                                            <img :src="service.flag" class="w-[30px] h-[30px] rounded-full"
                                                                alt="Flag" />
                                                            <div
                                                                class="grow shrink basis-0 text-neutral-800 text-base font-light font-['Poppins']">
                                                                {{ service.name }}</div>
                                                        </div>
                                                        <div
                                                            class="text-right text-neutral-800 text-base font-light font-['Poppins']">
                                                            {{ service.price }}</div>
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
</template>
  
<script>
export default {
    name: "pink-tabs",
    data() {
        return {
            openTab: 1,
            countries: [
                { name: 'United States', flag: PhilipinsImg },
                { name: 'Lebanon', flag: LebanonImg },
                { name: 'Taiwan', flag: TaiwanImg },
                { name: 'Israel', flag:IsraelImg },
                { name: 'Russia', flag: RussiaImg },
                { name: 'North Africa', flag: NorthAfricaImg },
                { name: 'Denmark', flag: DenmarkImg },
                { name: 'South America', flag: SouthAmericaImg },
                { name: 'Russia', flag: RussiaImg },
                { name: 'North Africa', flag: NorthAfricaImg },
                { name: 'Denmark', flag: DenmarkImg },
                { name: 'South America', flag: SouthAmericaImg },

            ],
            services: [
                { name: 'Apple', price: '$0.45', flag: AppleImg },
                { name: 'Amazon', price: '$0.45', flag: AmazonImg },
                { name: 'Amazon', price: '$0.45', flag: AmazonImg2 },
                { name: 'Tesla', price: '$0.45', flag: TeslaImg },
                { name: 'Microsoft', price: '$0.45', flag: MicrosoftImg },
                { name: 'Microsoft', price: '$0.45', flag: MicrosoftImg2 },
                { name: 'Microsoft', price: '$0.45', flag: MicrosoftImg3 },
                { name: 'Tesla', price: '$0.45', flag: TeslaImg2 },
                { name: 'Microsoft', price: '$0.45', flag: MicrosoftImg },
                { name: 'Microsoft', price: '$0.45', flag: MicrosoftImg2 },
                { name: 'Microsoft', price: '$0.45', flag: MicrosoftImg3 },
                { name: 'Tesla', price: '$0.45', flag: TeslaImg2 },

            ],
            phoneNumbers: [
                '+88013-456-7890',
                '+88015-555-5555',
                '+88017-654-3210',
                '+88018-888-8888',
                '+88015-123-4567',
                '+88013-456-7890',
                '+88015-555-5555',
                '+88017-654-3210',
                '+88018-888-8888',
                '+88015-123-4567',
                '+88013-456-7890',
                '+88015-555-5555',
                '+88017-654-3210',
                '+88018-888-8888',
                '+88015-123-4567',
            ],

        }
    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },
        // getFlagImage(flagFileName) {
        //     // Adjust the path to the directory where your flag images are stored
        //     console.log(flagFileName)
        //     return require(`../../assets/img/${flagFileName}`);
        // },
    },

}
</script>