
<script setup>
import PhilipinsImg from '../../assets/img/Philipins.png';
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
                <div>

                    <div class="tab-content tab-space">
                        <div class="flex items-center gap-[20px] justify-center border-b border-zinc-600 w-max mx-auto pb-[26px]">
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
                        <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                            <div class="mt-[30px]">
                              tab1
                            </div>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                            <div  class="mt-[30px]">
                            tab2
                            </div>
                        </div>
                        <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                            <div  class="mt-[30px]">
                              tab3
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
            openTab: 1
        }
    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        }
    }
}
</script>