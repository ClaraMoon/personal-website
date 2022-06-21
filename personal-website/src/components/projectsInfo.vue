<template>
  <div v-if="displayAbout" class="container bg-slate-800 rounded-lg max-w-[800px] m-2 overflow-x-auto mb-24">
    <div class="flex flex-row">
      <div class="container flex justify-start text-white p-2 pl-4 max-w-[800px] italic">Projects</div>
      <div class="container flex justify-end text-white p-2 gap-2 max-w-[800px]">
      <button
        class="rounded-full w-5 h-5 bg-[#00CA4E] hover:bg-[#33D571]"
      ></button>
      <button @click="this.$emit('closed')"
        class="rounded-full w-5 h-5 bg-[#FFBD44] hover:bg-[#FFCA69]"
      ></button>
      <button
        @click="this.$emit('closed')"
        class="rounded-full w-5 h-5 bg-[#FF605C] hover:bg-[#FF807D]"
      ></button>
    </div>
    </div>
    <div
      class="container bg-slate-900 min-h-[100px] rounded-bl-lg rounded-br-lg text-white p-1 max-w-[800px] font-mono"
    >
      <div class="text-[#57a64a] italic pl-3 flex flex-wrap">
        <colorText
          :printSpeed="20"
          :printStatus="claraLine1"
          @printDone="claraLine2 = true"
          printableText="//My Projects so far"
        ></colorText>
      </div>

      <div class="pl-3">
        <colorText
          :printSpeed="50"
          @printDone="claraLine3 = true"
          :printStatus="claraLine2"
          printableText="links = {"
        ></colorText>
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText class="pr-1"
          :printSpeed="50"
          @printDone="claraLine4 = true"
          :printStatus="claraLine3"
          printableText="Github: "
        ></colorText
        ><a v-if="claraLine4"
          class="text-pink-400 underline"
          href="https://github.com/ClaraMoon/site"
          target="_blank"
          >github.com/ClaraMoon/site</a
        >
      </div>

      <div class="pl-3">
        <colorText
          :printSpeed="50"
          :printStatus="claraLine4"
          printableText="}"
        ></colorText>
      </div>

    </div>
  </div>
</template>

<script>
import colorText from "./colorText";
export default {
  name: "OSWindow",
  data() {
    return {
      claraLine1: true,
      claraLine2: false,
      claraLine3: false,
      claraLine4: false,
      displayAbout: true,
    };
  },
  components: {
    colorText,
  },
  props: {
    printContent: String,
  },
  methods: {
    close(){
      console.log("done");
    }
  },
  async mounted() {
    
  },
};
</script>
