<script setup>

import { RouterLink } from 'vue-router'

import balanceTransfer from "../../assets/img/balanceTransfer.png"





</script>

<template>
    <section class="ml-[25px] mb-[97px]">
        <div class="flex justify-center items-center gap-2 mt-20">
            <img :src="balanceTransfer" alt="">
            <div class="max-w-[360px] w-full h-96 px-[30px] py-10 bg-white rounded-[20px] shadow-custom">


                <form>
                    <div>
                        <label class="text-zinc-600 text-base font-normal font-['Poppins']">Email or Username</label>
                        <input
                            class="max-w-[300px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 justify-start items-center inline-flex mt-[14px]"
                            type="email" placeholder="Ex: hello@zedsms.com" />
                    </div>
                    <div class="mt-[40px]">
                        <label class="text-zinc-600 text-base font-normal font-['Poppins']">Transfer Amount</label>
                        <input
                            class="max-w-[300px] w-full h-[50px] px-4 outline-none pt-3.5 pb-[15px] rounded-[10px] border border-zinc-600 justify-start items-center inline-flex mt-[14px]"
                            type="text" />
                    </div>
                <div class="flex justify-end mt-[40px]">
                    <button
                        class="max-w-[146px] h-12 w-full py-3 rounded-[10px] shadow border border-blue-600 justify-center items-start gap-2.5 inline-flex">
                        <div class="text-center text-blue-600 text-base font-normal font-['Poppins']">Transfer</div>
                    </button>
                </div>


                </form>

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




        }

    },
    methods: {


    },
    computed: {

    },
};


</script>