<script setup>

import { RouterLink } from 'vue-router'
import Namepo from "../../assets/img/company/Apple.png"
import Viveon from "../../assets/img/company/Amazon.png"
import Tiktok from "../../assets/img/company/Tesla.png"
import Burgking from "../../assets/img/company/Tesla.png"
import Namepo2 from "../../assets/img/company/Apple.png"
import Viveon2 from "../../assets/img/company/Amazon.png"


</script>

<template>
    <section class="max-w-[825px]">
      <div class="flex flex-wrap">
        <!-- Recent Message -->
        <div class="max-w-[60%] w-full">
          <div class="max-w-[436px] w-full pl-6 pr-[30px] pt-6 pb-5 bg-white rounded-[20px] shadow">
            <h4 class="text-neutral-800 text-xl font-normal font-['Poppins'] leading-[17px]">Recent Message</h4>
  
            <div class="max-w-[364px] max-h-[512px] w-full overflow-y-auto scrollbar mt-[30px] mr-0 pb-[30px]">
              <div
                class="w-full flex flex-wrap items-start mx-0 px-0 py-5 border-b border-gray-400"
                v-for="messageData in messagesData"
                :key="messageData.id"
              >
                <img class="w-[24px] h-[24px] mr-[14px]" :src="messageData.img" alt="" srcset="">
                <div class="w-[85%] flex flex-wrap mr-[2%]">
                  <div class="w-full flex justify-between mb-[6px]">
                    <h6 class="text-neutral-900 text-sm font-medium font-['Poppins'] leading-[17px]">Namepo</h6>
                    <p class="text-neutral-900 text-xs font-light font-['Poppins'] leading-[18.89px]">
                      {{ messageData.messageTime }}
                    </p>
                  </div>
                  <div class="w-[326px] text-neutral-800 text-xs font-light font-['Poppins'] leading-normal">
                    <template v-if="!messageData.showFullMessage">
                        <div
      class="w-[326px] text-neutral-800 text-xs font-light font-['Poppins'] leading-normal"
      v-html="formattedMessage(messageData)"
    >
    </div>
      </template>
                    <template v-else>
                        <div
      class="w-[326px] text-neutral-800 text-xs font-light font-['Poppins'] leading-normal"
      v-html="formattedMessage(messageData)"
    >
    </div>
                    </template>
                    <span
                      v-if="messageData.message.length > 100"
                      class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer"
                      @click="toggleMessageReadMore(messageData)"
                    >
                      {{ messageData.showFullMessage ? 'Less' : 'More' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- All Number -->
        <div class="w-[40%]"></div>
        <!-- Recent Transaction -->
      </div>
    </section>
  </template>

  <script>
  export default {
    data() {
      return {
        messagesData: [
                {
                    id: 1,
                    img: Namepo,
                    messageTime: "02 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 2,
                    img: Viveon,
                    messageTime: "15 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 1111 adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
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
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE: 65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 5,
                    img: Namepo2,
                    messageTime: "07 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE:65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
                {
                    id: 6,
                    img: Viveon2,
                    messageTime: "05 days ago",
                    message: "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum Lorem ipsum dolor sit amet consectetur adipiscing. Elit interdum ullamcorper amet consectetur  sed pharetra ipsum sene adipiscing elit interdum CODE:65469. adipiscing. Elit interdum ullamcorper amet consectetur sed pharetra ipsum"
                },
            ],
      };
    },
    methods: {
    toggleMessageReadMore(messageData) {
      messageData.showFullMessage = !messageData.showFullMessage;
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

            return <span class="font-bold">${part}</span>;
          }
        });

          return formattedParts;
        }

        const parts = message.split(/(CODE:\s*\d+)/);
        const formattedParts = parts.map((part, index) => {
          if (index % 2 === 0) {
            return part;
          } else {
            return <span class="font-bold	">${part}</span>;
          }
        });
        const formattedMessage =  parts.length > 1 ? formattedParts[0] + formattedParts[1] : formattedParts.join("").slice(0, 100);

        return formattedMessage;
      };
    },
  },
};
  </script>