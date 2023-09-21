<script setup>




</script>
<template>
    <section>
        <div>
            <SectionHeader title="About our company" description="Lorem ipsum dolor sit amet consectetur adipiscing elit 
interdum ullamcorper sed pharetra sene." />


            <div class="px-4 pt-21 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1192px] md:px-24 lg:px-8 lg:pt-[84px]">
                <div class="flex flex-wrap">
                    <h3 class="text-center w-[20%] text-neutral-800 text-[32px] font-medium font-['Poppins'] leading-9">What we do
                    </h3>
                    <div class="w-[75%]">
                        <p class="w-[808px] text-zinc-600 text-xl font-light font-['Poppins'] leading-[29.20px]">It is a long
                        established fact that a reader will be distracted by the content of a page when looking at its
                        layout. The point of using Lorem Ipsum is that it has a more-or-less distribution of letters, as
                        opposed to using.
                    </p>
                    <p class="w-[808px] text-zinc-600 text-xl font-light font-['Poppins'] leading-[29.20px]">
                        Content here', making it look like readable English. Many desktop and web page editors now use Lorem
                        Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still
                        in their infancy.
                    </p>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script >
import SectionHeader from '../../components/SectionHeader/SectionHeader.vue';

export default {
    components: {
        SectionHeader,
    },
};


</script>