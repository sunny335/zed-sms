<!-- DashboardSidebar.vue -->

<template>
  <aside
    class="min-w-[265px] w-[265px] md:w-[300px] lg:w-[265px] xl:w-[350px] h-[auto] bg-white dark:bg-[#09132C] rounded-2xl shadow-none lg:shadow-custom mb-[40px] flex-col justify-start items-start inline-flex overflow-hidden  hidden lg:block"
    v-bind:class="{ 'dark-aside': Theme == 'dark', }"
    >
    <ul class="w-full">
      <li>
        <router-link to="/dashboard"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                stroke="#1E2329" />
              <path d="M15 18H9" stroke="#1E2329" stroke-linecap="round" />
            </svg>
          </span>
          <span class="text-neutral-800  dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/my-number"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 4C18.1143 4.00911 19.7653 4.10755 20.8284 5.17064C22 6.34222 22 8.22783 22 11.9991C22 15.7703 22 17.6559 20.8284 18.8275C19.6569 19.9991 17.7712 19.9991 14 19.9991H10C6.22876 19.9991 4.34315 19.9991 3.17157 18.8275C2 17.6559 2 15.7703 2 11.9991C2 8.22783 2 6.34222 3.17157 5.17064C4.23467 4.10755 5.8857 4.00911 9 4"
                stroke="#1E2329" stroke-linecap="round" />
              <path d="M12 5L12 3" stroke="#1E2329" stroke-linecap="round" />
              <path d="M8 10.5H16" stroke="#1E2329" stroke-linecap="round" />
              <path d="M8 14H13.5" stroke="#1E2329" stroke-linecap="round" />
            </svg>

          </span>
          <span class="text-neutral-800   dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> My Number</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/manage-number"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#1E2329" />
              <path
                d="M17 11V10C17 8.11438 17 7.17157 16.4142 6.58579C15.8284 6 14.8856 6 13 6H11C9.11438 6 8.17157 6 7.58579 6.58579C7 7.17157 7 8.11438 7 10V11"
                stroke="#1E2329" />
              <path d="M5 11H19" stroke="#1E2329" stroke-linecap="round" />
              <path d="M8 16H16" stroke="#1E2329" stroke-linecap="round" />
            </svg>


          </span>
          <span class="text-neutral-800   dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> Manage Number</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/buy-number"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.55511 14.2572C2.83665 10.9043 2.47742 9.22793 3.37796 8.11397C4.27851 7 5.99298 7 9.42192 7H14.5781C18.007 7 19.7215 7 20.622 8.11397C21.5226 9.22793 21.1634 10.9043 20.4449 14.2572L20.0163 16.2572C19.5293 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4736 21 14.1495 21H9.85049C7.52636 21 6.36429 21 5.53922 20.333C4.71414 19.666 4.47066 18.5297 3.98368 16.2572L3.55511 14.2572Z"
                stroke="#1E2329" />
              <path d="M8 12H16" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 15H14" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 9L15 3" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 9L9 3" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="text-neutral-800   dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> Buy Number</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/transaction"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4L10 20L4 14.5" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 20L14 4L20 9.5" stroke="#1E2329" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span class="text-neutral-800  dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> Transaction</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/balance-transfer"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.9991 11C21.99 7.8857 21.8915 6.23467 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H11.5"
                stroke="#1E2329" stroke-linecap="round" />
              <path d="M15.5 14V20M15.5 20L17.5 18M15.5 20L13.5 18M20 20V14M20 14L22 16M20 14L18 16" stroke="#1E2329"
                stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 16H6" stroke="#1E2329" stroke-linecap="round" />
              <path d="M2 10L22 10" stroke="#1E2329" stroke-linecap="round" />
            </svg>
          </span>
          <span class="text-neutral-800  dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> Balance Transfer</span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/topup-balance"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 8C8 5.17157 8 3.75736 8.87868 2.87868C9.75736 2 11.1716 2 14 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H14C11.1716 22 9.75736 22 8.87868 21.1213C8 20.2426 8 18.8284 8 16V8Z"
                stroke="#1E2329" />
              <path
                d="M8 19.5C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V9.5C3 7.14298 3 5.96447 3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5"
                stroke="#1E2329" />
              <path d="M14.5 16V8M14.5 8L17 10.5M14.5 8L12 10.5" stroke="#1E2329" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

          </span>
          <span class="text-neutral-800  dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]">
            TOP-UP Balance
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/appearance"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.75 6.79904L6.5 7.23205L6.75 6.79904ZM6.20096 6.25L5.76795 6.5L6.20096 6.25ZM17.799 6.25L18.2321 6.5L17.799 6.25ZM17.25 6.79904L17.5 7.23205L17.25 6.79904ZM17.25 2.20096L17.5 1.76795L17.25 2.20096ZM17.799 2.75L18.2321 2.5L17.799 2.75ZM6.75 2.20096L6.5 1.76795L6.75 2.20096ZM6.20096 2.75L5.76795 2.5L6.20096 2.75ZM13.7071 21.7071L13.3536 21.3536L13.7071 21.7071ZM13.7071 14.2929L13.3536 14.6464L13.3536 14.6464L13.7071 14.2929ZM10.2929 14.2929L9.93934 13.9393H9.93934L10.2929 14.2929ZM10.2929 21.7071L10.6464 21.3536L10.2929 21.7071ZM15.4066 10.989L15.3325 10.4945L15.4066 10.989ZM19.4833 10.3775L19.4091 9.88304L19.4833 10.3775ZM21.861 5.76733L22.3262 5.58416L22.3262 5.58416L21.861 5.76733ZM20.7327 4.63903L20.5495 5.10428L20.7327 4.63903ZM20.9384 10.0438L20.7038 9.60225L20.9384 10.0438ZM21.8858 8.94369L22.3573 9.1102V9.1102L21.8858 8.94369ZM12.4845 11.9173L12.1056 11.591V11.591L12.4845 11.9173ZM12.0047 14V14.5H12.4964L12.5046 14.0084L12.0047 14ZM5.5 4C5.22386 4 5 4.22386 5 4.5C5 4.77614 5.22386 5 5.5 5V4ZM8.5 2.5H15.5V1.5H8.5V2.5ZM15.5 6.5H8.5V7.5H15.5V6.5ZM8.5 6.5C8.02349 6.5 7.69954 6.49952 7.45018 6.47692C7.2077 6.45494 7.08525 6.41525 7 6.36603L6.5 7.23205C6.76282 7.38379 7.04807 7.44458 7.35992 7.47284C7.66488 7.50048 8.04189 7.5 8.5 7.5V6.5ZM5.5 4.5C5.5 4.95811 5.49952 5.33512 5.52716 5.64008C5.55542 5.95193 5.61621 6.23718 5.76795 6.5L6.63397 6C6.58475 5.91475 6.54506 5.7923 6.52308 5.54982C6.50048 5.30046 6.5 4.97651 6.5 4.5H5.5ZM7 6.36603C6.84798 6.27826 6.72174 6.15202 6.63397 6L5.76795 6.5C5.94349 6.80404 6.19596 7.05651 6.5 7.23205L7 6.36603ZM17.5 4.5C17.5 4.97651 17.4995 5.30046 17.4769 5.54982C17.4549 5.7923 17.4152 5.91475 17.366 6L18.2321 6.5C18.3838 6.23718 18.4446 5.95193 18.4728 5.64008C18.5005 5.33512 18.5 4.95811 18.5 4.5H17.5ZM15.5 7.5C15.9581 7.5 16.3351 7.50048 16.6401 7.47284C16.9519 7.44458 17.2372 7.38379 17.5 7.23205L17 6.36603C16.9147 6.41525 16.7923 6.45494 16.5498 6.47692C16.3005 6.49952 15.9765 6.5 15.5 6.5V7.5ZM17.366 6C17.2783 6.15202 17.152 6.27826 17 6.36603L17.5 7.23205C17.804 7.05651 18.0565 6.80404 18.2321 6.5L17.366 6ZM15.5 2.5C15.9765 2.5 16.3005 2.50048 16.5498 2.52308C16.7923 2.54506 16.9147 2.58475 17 2.63397L17.5 1.76795C17.2372 1.61621 16.9519 1.55542 16.6401 1.52716C16.3351 1.49952 15.9581 1.5 15.5 1.5V2.5ZM18.5 4.5C18.5 4.04189 18.5005 3.66488 18.4728 3.35992C18.4446 3.04807 18.3838 2.76282 18.2321 2.5L17.366 3C17.4152 3.08525 17.4549 3.2077 17.4769 3.45018C17.4995 3.69954 17.5 4.02349 17.5 4.5H18.5ZM17 2.63397C17.152 2.72174 17.2783 2.84798 17.366 3L18.2321 2.5C18.0565 2.19596 17.804 1.94349 17.5 1.76795L17 2.63397ZM8.5 1.5C8.04189 1.5 7.66488 1.49952 7.35992 1.52716C7.04807 1.55542 6.76282 1.61621 6.5 1.76795L7 2.63397C7.08525 2.58475 7.2077 2.54506 7.45018 2.52308C7.69954 2.50048 8.02349 2.5 8.5 2.5V1.5ZM6.5 4.5C6.5 4.02349 6.50048 3.69954 6.52308 3.45018C6.54506 3.2077 6.58475 3.08525 6.63397 3L5.76795 2.5C5.61621 2.76282 5.55542 3.04807 5.52716 3.35992C5.49952 3.66488 5.5 4.04189 5.5 4.5H6.5ZM6.5 1.76795C6.19596 1.94349 5.94349 2.19596 5.76795 2.5L6.63397 3C6.72174 2.84798 6.84798 2.72174 7 2.63397L6.5 1.76795ZM10.5 20V16H9.5V20H10.5ZM13.5 16V20H14.5V16H13.5ZM13.5 20C13.5 20.4855 13.4989 20.7994 13.4678 21.0306C13.4387 21.2475 13.3916 21.3155 13.3536 21.3536L14.0607 22.0607C14.3155 21.8058 14.4149 21.4917 14.4589 21.1639C14.5011 20.8505 14.5 20.4573 14.5 20H13.5ZM12 22.5C12.4573 22.5 12.8505 22.5011 13.1639 22.4589C13.4917 22.4149 13.8058 22.3155 14.0607 22.0607L13.3536 21.3536C13.3155 21.3916 13.2475 21.4387 13.0306 21.4678C12.7994 21.4989 12.4855 21.5 12 21.5V22.5ZM12 14.5C12.4855 14.5 12.7994 14.5011 13.0306 14.5322C13.2475 14.5613 13.3155 14.6084 13.3536 14.6464L14.0607 13.9393C13.8058 13.6845 13.4917 13.5851 13.1639 13.5411C12.8505 13.4989 12.4573 13.5 12 13.5V14.5ZM14.5 16C14.5 15.5427 14.5011 15.1495 14.4589 14.8361C14.4149 14.5083 14.3155 14.1942 14.0607 13.9393L13.3536 14.6464C13.3916 14.6845 13.4387 14.7525 13.4678 14.9694C13.4989 15.2006 13.5 15.5145 13.5 16H14.5ZM10.5 16C10.5 15.5145 10.5011 15.2006 10.5322 14.9694C10.5613 14.7525 10.6084 14.6845 10.6464 14.6464L9.93934 13.9393C9.68451 14.1942 9.58514 14.5083 9.54107 14.8361C9.49894 15.1495 9.5 15.5427 9.5 16H10.5ZM12 13.5C11.5427 13.5 11.1495 13.4989 10.8361 13.5411C10.5083 13.5851 10.1942 13.6845 9.93934 13.9393L10.6464 14.6464C10.6845 14.6084 10.7525 14.5613 10.9694 14.5322C11.2006 14.5011 11.5145 14.5 12 14.5V13.5ZM9.5 20C9.5 20.4573 9.49894 20.8505 9.54107 21.1639C9.58514 21.4917 9.68451 21.8058 9.93934 22.0607L10.6464 21.3536C10.6084 21.3155 10.5613 21.2475 10.5322 21.0306C10.5011 20.7994 10.5 20.4855 10.5 20H9.5ZM12 21.5C11.5145 21.5 11.2006 21.4989 10.9694 21.4678C10.7525 21.4387 10.6845 21.3916 10.6464 21.3536L9.93934 22.0607C10.1942 22.3155 10.5083 22.4149 10.8361 22.4589C11.1495 22.5011 11.5427 22.5 12 22.5V21.5ZM15.4808 11.4835L19.5574 10.872L19.4091 9.88304L15.3325 10.4945L15.4808 11.4835ZM19.0449 4H18V5H19.0449V4ZM22.5 7.4551C22.5 7.01675 22.5002 6.66408 22.4816 6.37746C22.4626 6.08662 22.4226 5.82911 22.3262 5.58416L21.3957 5.9505C21.4383 6.05869 21.4679 6.20019 21.4837 6.44251C21.4998 6.68906 21.5 7.0037 21.5 7.4551H22.5ZM19.0449 5C19.4963 5 19.8109 5.00025 20.0575 5.01632C20.2998 5.03212 20.4413 5.06168 20.5495 5.10428L20.9158 4.17379C20.6709 4.07736 20.4134 4.0374 20.1225 4.01844C19.8359 3.99975 19.4832 4 19.0449 4V5ZM22.3262 5.58416C22.0721 4.93874 21.5613 4.4279 20.9158 4.17379L20.5495 5.10428C20.9368 5.25674 21.2433 5.56324 21.3957 5.9505L22.3262 5.58416ZM19.5574 10.872C20.2859 10.7627 20.7759 10.6963 21.173 10.4853L20.7038 9.60225C20.4955 9.71295 20.2172 9.76182 19.4091 9.88304L19.5574 10.872ZM21.5 7.4551C21.5 8.27228 21.4929 8.55471 21.4144 8.77717L22.3573 9.1102C22.5071 8.68617 22.5 8.19171 22.5 7.4551H21.5ZM21.173 10.4853C21.7261 10.1915 22.1487 9.70073 22.3573 9.1102L21.4144 8.77717C21.2892 9.13149 21.0357 9.42593 20.7038 9.60225L21.173 10.4853ZM15.3325 10.4945C14.5328 10.6145 13.8867 10.7105 13.3825 10.8522C12.8649 10.9978 12.4364 11.2069 12.1056 11.591L12.8634 12.2435C13.0171 12.065 13.2372 11.9319 13.6532 11.8149C14.0827 11.6941 14.6554 11.6073 15.4808 11.4835L15.3325 10.4945ZM12.5046 14.0084C12.5223 12.9522 12.6153 12.5316 12.8634 12.2435L12.1056 11.591C11.5914 12.1882 11.5218 12.9734 11.5048 13.9916L12.5046 14.0084ZM12 14.5H12.0047V13.5H12V14.5ZM6 4H5.5V5H6V4Z"
                fill="#1E2329" />
            </svg>


          </span>
          <span class="text-neutral-800  dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]">
            Appearance
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/account-settings"
          class="h-[70px] w-full pl-[30px] pr-[60px] pt-[26px] pb-5 justify-start items-center gap-3.5 inline-flex">

          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.84308 3.80211C9.8718 2.6007 10.8862 2 12 2C13.1138 2 14.1282 2.6007 16.1569 3.80211L16.8431 4.20846C18.8718 5.40987 19.8862 6.01057 20.4431 7C21 7.98943 21 9.19084 21 11.5937V12.4063C21 14.8092 21 16.0106 20.4431 17C19.8862 17.9894 18.8718 18.5901 16.8431 19.7915L16.1569 20.1979C14.1282 21.3993 13.1138 22 12 22C10.8862 22 9.8718 21.3993 7.84308 20.1979L7.15692 19.7915C5.1282 18.5901 4.11384 17.9894 3.55692 17C3 16.0106 3 14.8092 3 12.4063V11.5937C3 9.19084 3 7.98943 3.55692 7C4.11384 6.01057 5.1282 5.40987 7.15692 4.20846L7.84308 3.80211Z"
                stroke="#1E2329" />
              <circle cx="12" cy="12" r="3" stroke="#1E2329" />
            </svg>


          </span>
          <span class="text-neutral-800 dark:text-[#F5F5F5] text-base font-light font-[Poppins] leading-[36px]"> Account Setting</span>

        </router-link>
      </li>
    </ul>
  </aside>
</template>
  
<script>
const Theme = localStorage.getItem('Theme');

export default {
  // Sidebar component logic
};
</script>
  
<style>
aside .router-link-exact-active {
  background-color: #0057FF;
  color: #fff;
  text-decoration: none;
}

aside .router-link-exact-active span {

  color: #fff;
}

aside .router-link-exact-active svg path {

  stroke: #fff;
}

aside .router-link-exact-active svg circle {

  stroke: #fff;
}
body.dark aside  svg path {

  stroke: #fff ;
}

body.dark aside  svg circle {

  stroke: #fff;
}
</style>