
<script setup>
import { RouterLink } from 'vue-router'
import blueTik from '../../assets/img/blueTik.svg';
import BoletoBancário from '../../assets/img/payment/Boleto Bancário.png';
import Cash from '../../assets/img/payment/Cash.png';
import Elo from '../../assets/img/payment/Elo.png';

</script>
 
<template>
    <section
        class="bg-white dark:bg-[#070F24]  py-6 lg:py-10 px-4 pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 lg:pt-[84px]">


        <div>
            <h1
                class="text-neutral-800   dark:text-[#F5F5F5] text-left text-2xl  lg:text-[32px] font-medium font-[Poppins] leading-[22px]">
                Select Payment
                Source
            </h1>
            <div class="my-[24px] lg:my-[36px]">
                <ul class="flex justify-start mb-0 list-none flex-row mx-auto rounded-2xl overflow-hidden gap-2 lg:gap-8	 ">
                    <li class="max-w-[300px]-mb-px last:mr-0  text-center cursor-pointer"
                        v-bind:class="{ 'hidden': nextPaymentPage == true, 'block': nextPaymentPage === false }">
                        <a class="w-full  flex items-center  text-neutral-800   dark:text-[#F5F5F5] text-base lg:text-xl font-normal font-[Poppins] leading-[17px] "
                            v-on:click="toggleTabs(1); selectCountry(null); selectPhone(null); selectService(null)">
                            <img class="h-[12px] lg:w-[24px] w-[12px] lg:h-[24px] mr-[6px] lg:mr-4" :src="blueTik" alt="" srcset=""
                                v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                            <div class="h-[12px] lg:w-6 w-[12px] lg:h-6 rounded-full bg-slate-100 mr-[6px] lg:mr-4"
                                v-bind:class="{ 'block': openTab !== 1, 'hidden': openTab === 1 }"></div>

                            Account Balance
                        </a>
                    </li>
                    <li class="max-w-[300px] -mb-px last:mr-0  text-center cursor-pointer">
                        <a class="w-full flex items-center  text-neutral-800   dark:text-[#F5F5F5] text-base lg:text-xl font-normal font-[Poppins] leading-[17px] "
                            v-on:click="toggleTabs(2); selectCountry(null); selectPhone(null); selectService(null)">
                            <img class="h-[12px] lg:w-[24px] w-[12px] lg:h-[24px] mr-[6px] lg:mr-4" :src="blueTik" alt="" srcset=""
                                v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                            <div class="h-[12px] lg:w-6 w-[12px] lg:h-6 rounded-full bg-slate-100 mr-[6px] lg:mr-4"
                                v-bind:class="{ 'block': openTab !== 2, 'hidden': openTab === 2 }"></div>
                            Payment Method
                        </a>
                    </li>

                </ul>
            </div>

            <div class="max-w-[1113px] h-[.5px] border-[1px] border-gray-300"></div>
        </div>
        <div class="flex flex-wrap mt-[30px]">
            <div class="w-full flex justify-start">

                <div
                    class="w-full px-0 lg:px-[30px]  pb-[30px] rounded-[36px] border-none flex-col justify-start items-center gap-[30px] inline-flex">
                    <div class="w-full">

                        <div class="tab-content tab-space w-full">

                            <div class="w-full" v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                <div class="mt-[30px] flex justify-center items-center">
                                    <div
                                        class="max-w-[376px] lg:max-w-[612px] max-h-[293px] px-[6px] py-[100px] lg:px-40 lg:py-[100px] bg-white  dark:bg-[#09132C] rounded-3xl shadow-none lg:shadow-custom flex-col justify-start items-start gap-7 inline-flex">
                                        <div
                                            class="text-neutral-800   dark:text-[#F5F5F5] text-base font-normal font-[Poppins]">
                                            Payment
                                            with
                                            account balance</div>
                                        <div class="justify-start items-center gap-10 inline-flex">
                                            <div class="justify-start items-center gap-3.5 flex">
                                                <div
                                                    class="text-zinc-600   dark:text-[#F5F5F5] text-xl font-medium font-[Poppins]">
                                                    Cost:
                                                </div>
                                                <div
                                                    class="text-zinc-600   dark:text-[#F5F5F5] text-xl font-normal font-[Poppins]">
                                                    $32.54
                                                </div>
                                            </div>
                                            <button
                                                class="">
                                                <RouterLink to="/payment-successful"
                                                    class="text-center  text-sm font-normal font-[Poppins] max-w-[120px] w-full px-3 h-[41px] rounded-[100px] lg:rounded-[10px] shadow border border-[#0057FF] bg-[#0057FF] justify-center items-center gap-2.5 flex text-[#F5F5F5] dark:text-[#F5F5F5] hover:border-[#0057FF] hover:bg-[#F5F5F5] hover:text-[#0057FF] dark:hover:text-[#0057FF]">
                                                    Pay Now</RouterLink>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                <div class="">
                                    <div class="flex gap-4">

                                        <div class="max-w-3/6 w-full">


                                            <div
                                                class="relative after:content-[''] after:w-[2px] after:absolute after:top-0 after:bottom-0 after:right-[1px] after:bg-[#DDE2E5]">
                                                <ul class="mt-6 overflow-y-auto h-[491px] flex flex-wrap scrollbar">
                                                    <li v-for="(payment, index) in paymentsData" :key="index"
                                                        class="mr-[13px]  border-gray-400 cursor-pointer w-full lg:w-[48%]"
                                                        >

                                                        <div
                                                            class="max-w-[525px] h-[100px] pl-5 pr-9 py-5 border-b border-gray-300 justify-start items-center gap-5 inline-flex"
                                                            @click="selectPayment(payment)"
                                                        :class="{ 'bg-[#0057FF] text-white': selectedPayment === payment }"
                                                            >
                                                            <img class="w-[60px] h-[60px] rounded-full border border-zinc-600"
                                                                :src="payment.img" />
                                                            <div
                                                                class="flex-col justify-start items-start gap-1.5 inline-flex">
                                                                <h5 class="text-neutral-800   dark:text-[#F5F5F5] text-base font-medium font-[Poppins] leading-[17px]"
                                                                    v-bind:class="{ 'text-white': selectedPayment == payment, }">
                                                                    {{ payment.name }}</h5>
                                                                <p class=" text-neutral-800   dark:text-[#ACB5BD] text-sm font-light font-[Poppins] leading-normal"
                                                                    v-bind:class="{ 'text-white dark:text-white ': selectedPayment == payment, }">
                                                                    {{ payment.text }}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-col lg:flex-row justify-center items-center lg:justify-end  mt-[45px] gap-4">
                                        <input
                                            class="max-w-[358px] w-full h-16 pl-10 pr-[200px] py-3 dark:bg-transparent rounded-xl border border-gray-400 justify-center items-center gap-2.5 inline-flex"
                                            v-bind:class="{ 'hidden': nextPaymentPage == false, 'block': nextPaymentPage === true }"
                                            type="email" placeholder="Enter Email*" />



                                        <button :disabled="!selectedPayment"  v-on:click="selectNextPaymentPage(true)"
                                            class="max-w-[300px] w-full h-16 px-10 py-3.5 rounded-xl justify-center items-center gap-3.5 inline-flex  text-[#0057FF]   dark:text-[#F5F5F5] border border-[#0057FF] dark:bg-[#0057FF]  disabled:cursor-not-allowed disabled:opacity-20 hover:bg-[#0057FF] hover:text-[#F5F5F5] iconStock disabled:hover:bg-[#F5F5F5 disabled:hover:text-[#0057FF] disabled:hover:bg-[#F5F5F5] dark:hover:bg-white dark:hover:text-[#0057FF] darkIconStockBlue"
                                            v-bind:class="{ 'hidden': nextPaymentPage == true, 'block': nextPaymentPage === false }">
                                            <div
                                                class="text-center  text-2xl font-normal font-[Poppins]">
                                                Next</div>
                                            <div class=" relative darkIconStock ">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.44381 17.8215C3.54573 13.6304 3.09669 11.5349 4.22238 10.1425C5.34806 8.75 7.49115 8.75 11.7773 8.75H18.2225C22.5087 8.75 24.6518 8.75 25.7775 10.1425C26.9032 11.5349 26.4541 13.6304 25.556 17.8215L25.0203 20.3215C24.4116 23.1622 24.1072 24.5825 23.0759 25.4162C22.0446 26.25 20.592 26.25 17.6868 26.25H12.313C9.40787 26.25 7.95528 26.25 6.92394 25.4162C5.8926 24.5825 5.58824 23.1622 4.97952 20.3215L4.44381 17.8215Z"
                                                        stroke="#0057FF" stroke-width="1.5" />
                                                    <path d="M10 15H20" stroke="#0057FF" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.5 18.75H17.5" stroke="#0057FF" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M22.5 11.25L18.75 3.75" stroke="#0057FF" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7.5 11.25L11.25 3.75" stroke="#0057FF" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </div>
                                          
                                        </button>
                                        <RouterLink to="/payment-successful"
                                            class="max-w-[358px] lg:max-w-[150px] w-full h-16  px-10 py-3.5 rounded-xl  justify-center items-center gap-3.5 inline-flex  text-[#0057FF]   dark:text-[#F5F5F5] border border-[#0057FF] dark:bg-[#0057FF]  disabled:cursor-not-allowed disabled:opacity-20 hover:bg-[#0057FF] hover:text-[#F5F5F5] iconStock disabled:hover:bg-[#F5F5F5 disabled:hover:text-[#0057FF] disabled:hover:bg-[#F5F5F5] dark:hover:bg-white dark:hover:text-[#0057FF] darkIconStockBlue"
                                            v-bind:class="{ 'hidden': nextPaymentPage == false, 'block': nextPaymentPage === true }">
                                            <div
                                                class="text-center t text-2xl font-normal font-[Poppins]">
                                                Next</div>
                                            <div class=" relative darkIconStock">
                                                <svg  width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.25 6.25L18.75 15L11.25 23.75" stroke="#0057FF"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                               



                                            </div>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>
  
<script>
const Theme = localStorage.getItem('Theme');
export default {
    components: {

    },
    name: "pink-tabs",
    data() {
        return {
            selectedWeek: '01 Week',
            openTab: 1,
          
          
        
            selectedPayment: null,
            nextPaymentPage: false,

            paymentsData: [
                {
                    id: 1,
                    img: BoletoBancário,
                    name: "Boleto Bancário",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 2,
                    img: Cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 3,
                    img: Elo,
                    name: "Elo",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 4,
                    img: BoletoBancário,
                    name: "Boleto Bancário",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 5,
                    img: Cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 6,
                    img: Elo,
                    name: "Elo",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 7,
                    img: BoletoBancário,
                    name: "Boleto Bancário",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 8,
                    img: Cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 9,
                    img: Elo,
                    name: "Elo",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 10,
                    img: BoletoBancário,
                    name: "Boleto Bancário",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 11,
                    img: Cash,
                    name: "Cash",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
                {
                    id: 12,
                    img: Elo,
                    name: "Elo",
                    text: "Accepting bitcoin payment to staic wallet. Fee 1.5%",
                },
            ]

        }
    },
    methods: {
        toggleTabs: function (tabNumber) {
            this.openTab = tabNumber
        },

        selectPayment(id) {
            this.selectedPayment = id;
        },
        selectNextPaymentPage(value) {
            this.nextPaymentPage = value;
        },

    },

}
</script>

<style>

body.dark .darkIconFill path {
    fill:white;
}
body.dark .darkIconStock path {
    stroke:white;
}
.iconStock:hover path {
    stroke: white;
}

.iconStock:disabled:hover path {
    stroke: #1E2329;
}
body.dark .darkIconStockBlue:hover path {
    stroke: #0057FF;
}


</style>