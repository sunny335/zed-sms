<script setup>





</script>

<template>
    <section class="max-w-[825px]   w-full ml-0 lg:ml-[41px] mx-auto px-2 lg:px-0">
        <!-- All Transaction -->
        <div class="">
            <div class="  w-full ">
                <div class="text-neutral-800  dark:text-[#F5F5F5] text-xl font-normal font-['Poppins'] leading-[17px] ">All
                    Transaction
                </div>

                <div class=" w-full  overflow-x-auto max-w-[100vw] lg:max-w-[full]">
                    <table class="border-collapse w-full min-w-[825px] lg:min-w-full">
                        <thead>
                            <tr class="shadow-md dark:border-b-[1px]">
                                <th
                                    class="px-4 py-8 text-left text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-[17px]">
                                    Date & Time</th>
                                <th
                                    class="px-4 py-8 text-left text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-[17px]">
                                    Action</th>
                                <th
                                    class="px-4 py-8 text-left text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-[17px]">
                                    Amount</th>
                                <th
                                    class="px-4 py-8 text-left text-neutral-800  dark:text-[#F5F5F5] text-base font-normal font-['Poppins'] leading-[17px]">
                                    Description</th>

                            </tr>
                        </thead>
                        <tbody v-for="data in visibleData" :key="data.id" class="">

                            <tr class=" border-b-2">
                                <td
                                    class="px-4 py-6 text-neutral-800  dark:text-[#F5F5F5] text-xs font-light font-['Poppins'] leading-[17px]">
                                    {{
                                        data.dateTime }}</td>
                                <td
                                    class="px-4 py-6 text-neutral-800  dark:text-[#F5F5F5] text-xs font-light font-['Poppins'] leading-[17px]">
                                    {{ data.action }}</td>
                                <td
                                    class="px-4 py-6 text-neutral-800  dark:text-[#F5F5F5] text-xs font-light font-['Poppins'] leading-[17px]">
                                    ${{ data.amount }}</td>
                                <td
                                    class="px-4 py-6 text-neutral-800  dark:text-[#F5F5F5] text-xs font-light font-['Poppins'] leading-[17px] max-w-[253px]">
                                    {{ showFullMessage[data.id] || data.description.length < 100 ? data.description :
                                        data.description.substring(0, 100) }} <button v-if="data.description.length > 100"
                                        class="text-blue-600 text-xs font-medium font-['Poppins'] leading-tight cursor-pointer pl-1"
                                        @click="toggleMessage(data.id)">
                                        {{ showFullMessage[data.id] ? 'Less' : 'More' }}
                                        </button>

                                </td>

                            </tr>


                        </tbody>
                    </table>

                </div>


                <!-- Pagination controls -->
                <div class="flex justify-center items-center w-full hidden lg:block">

                    <div class="my-[35px] flex justify-center items-center gap-5">
                        <!-- first page button -->
                        <button @click="goToFirstPage">


                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8335 12.1673L12.8335 18.0007L17.8335 23.834" stroke="#ACB5BD"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.167 12.1673L16.167 18.0007L21.167 23.834" stroke="#ACB5BD" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="33.74" y="35.74" width="33.48" height="35.48" rx="6.74"
                                    transform="rotate(180 33.74 35.74)" stroke="#DDE2E5" stroke-width="0.52" />
                            </svg>
                        </button>
                        <!-- Previous page button -->
                        <button @click="previousPage" :disabled="currentPage === 1">

                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 23.834L14.5 18.0007L19.5 12.1673" stroke="#ACB5BD" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="33.74" y="35.74" width="33.48" height="35.48" rx="6.74"
                                    transform="rotate(180 33.74 35.74)" stroke="#DDE2E5" stroke-width="0.52" />
                            </svg>

                        </button>

                        <template v-for="page in displayedPageRange" :key="page">
                            <button @click="goToPage(page)"
                                class="w-[34px] h-9 px-2 py-1.5 rounded-[7px] border border-zinc-200 flex-col justify-center items-center gap-2.5 inline-flex"
                                :class="{ 'bg-[#0057FF] text-white': page === currentPage }">
                                <p class="text-sm font-light font-['Inter'] leading-normal"
                                    :class="{ 'text-white': page === currentPage }"> {{ page }}</p>
                            </button>

                        </template>
                        <!-- Next page -->
                        <button @click="nextPage" :disabled="currentPage === totalPages">
                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 12.166L19.5 17.9993L14.5 23.8327" stroke="#ACB5BD" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="0.26" y="0.26" width="33.48" height="35.48" rx="6.74" stroke="#DDE2E5"
                                    stroke-width="0.52" />
                            </svg>

                        </button>
                        <!-- Last Page Button -->
                        <button @click="goToLastPage">

                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1665 23.8327L21.1665 17.9993L16.1665 12.166" stroke="#ACB5BD"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.833 23.8327L17.833 17.9993L12.833 12.166" stroke="#ACB5BD" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="0.26" y="0.26" width="33.48" height="35.48" rx="6.74" stroke="#DDE2E5"
                                    stroke-width="0.52" />
                            </svg>

                        </button>

                    </div>
                </div>
                <!-- Pagination controls Mobile -->
                <div class="flex justify-center items-center w-full lg:hidden block">
                    <div class="my-[35px] flex justify-center items-center gap-5">
                        <!-- Previous page button -->
                        <button @click="previousPage" :disabled="currentPage === 1">

                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 23.834L14.5 18.0007L19.5 12.1673" stroke="#ACB5BD" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="33.74" y="35.74" width="33.48" height="35.48" rx="6.74"
                                    transform="rotate(180 33.74 35.74)" stroke="#DDE2E5" stroke-width="0.52" />
                            </svg>

                        </button>
                        <!-- Next page -->
                        <button @click="nextPage" :disabled="currentPage === totalPages">
                            <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 12.166L19.5 17.9993L14.5 23.8327" stroke="#ACB5BD" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                                <rect x="0.26" y="0.26" width="33.48" height="35.48" rx="6.74" stroke="#DDE2E5"
                                    stroke-width="0.52" />
                            </svg>

                        </button>
                    </div>
                </div>



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
            openTab: 1,
            messageSeenStatus: false,
            toggleArrowIcon: false,
            currentPage: 1,
            itemsPerPage: 5, // You can adjust this as needed
            pageItemsToShow: 5,
            tableData: [
                {
                    id: 1,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '81.26',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor '
                },
                {
                    id: 2,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '95.19',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. MorA number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 3,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '56.02',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. MorA number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 4,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '66.33',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 5,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '76.22',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 6,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '44.61',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 7,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '31.70',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 8,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '52.24',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 9,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '95.82',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 10,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '85.18',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 11,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '97.99',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 12,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '93.25',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 13,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '10.37',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 14,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '76.30',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 14,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '59.42',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 16,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '55.59',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 17,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '75.80',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 18,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '31.66',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 19,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '53.51',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 20,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '39.82',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 21,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '19.87',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 22,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '31.38',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 23,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '16.99',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 24,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '44.47',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 25,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '33.61',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 1,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '95.84',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 2,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '68.80',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 3,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '9.09',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 4,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '36.69',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 5,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '31.24',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 6,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '2.22',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 7,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '32.39',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 8,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '65.70',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 9,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '45.26',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 10,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '14.14',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 11,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '6.37',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 12,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '33.35',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.202307:48. Mor'
                },
                {
                    id: 13,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '27.48',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 14,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '59.64',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 14,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '56.46',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 16,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '89.68',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 17,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '2.78',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 18,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '59.10',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 19,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '97.54',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 20,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '18.39',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 21,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '98.38',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 22,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '66.67',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 23,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '90.50',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 24,
                    dateTime: 'Sep 25, 2023',
                    action: 'Top-up',
                    amount: '34.14',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                },
                {
                    id: 25,
                    dateTime: 'Sep 25, 2023',
                    action: 'Last',
                    amount: '59.00',
                    description: 'A number rental 33765837850 on 7 days, Revolut. Exp: 31.05.2023 07:48. Mor'
                }
            ],
            showFullMessage: {}

        }

    },
    methods: {
        toggleMessageReadMore(messageData) {
            messageData.showFullMessage = !messageData.showFullMessage;
        },

        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        goToFirstPage() {
            if (this.currentPage !== 1) {
                this.currentPage = 1;
            }
        },

        goToLastPage() {
            if (this.currentPage !== this.totalPages) {
                this.currentPage = this.totalPages;
            }
        },

        generatePageRange() {
            const totalPageCount = this.totalPages;
            const currentPage = this.currentPage;
            const pageItemsToShow = this.pageItemsToShow;
            let startPage = Math.max(currentPage - Math.floor(pageItemsToShow / 2), 1);
            const endPage = Math.min(startPage + pageItemsToShow - 1, totalPageCount);
            if (endPage === totalPageCount) {
                startPage = Math.max(endPage - pageItemsToShow + 1, 1);
            }
            return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        },

        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        toggleMessage(id) {
            // Toggle the show/hide state for the given notification ID
            this.showFullMessage[id] = !this.showFullMessage[id];
        }

    },
    computed: {
        visibleData() {
            return this.tableData.slice(0, this.itemsToShow);
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

        totalPages() {
            return Math.ceil(this.tableData.length / this.itemsPerPage);
        },
        visibleData() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = Math.min(
                startIndex + this.itemsPerPage,
                this.tableData.length
            );
            return this.tableData.slice(startIndex, endIndex);
        },
        displayedPageRange() {
            return this.generatePageRange();
        },
    },
};


</script>