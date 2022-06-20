<template>
  <div v-if="displayAbout" class="container bg-slate-800 rounded-lg max-w-[800px] m-2 overflow-x-auto">
    <div class="flex flex-row">
      <div class="container flex justify-start text-white p-2 pl-4 max-w-[800px] italic">About</div>
      <div class="container flex justify-end text-white p-2 gap-2 max-w-[800px]">
      <button
        class="rounded-full w-5 h-5 bg-[#00CA4E] hover:bg-[#33D571]"
      ></button>
      <button
        class="rounded-full w-5 h-5 bg-[#FFBD44] hover:bg-[#FFCA69]"
      ></button>
      <button
        @click="displayAbout = false"
        class="rounded-full w-5 h-5 bg-[#FF605C] hover:bg-[#FF807D]"
      ></button>
    </div>
    </div>
    <div
      class="container bg-slate-900 min-h-[300px] rounded-bl-lg rounded-br-lg text-white p-1 max-w-[800px] font-mono"
    >
      <div class="text-[#57a64a] italic pl-3 flex flex-wrap">
        <colorText
          :printSpeed="20"
          :printStatus="claraLine1"
          @printDone="claraLine2 = true"
          printableText="//Hello my name is Clara Moon"
        ></colorText>
        <colorText class="whitespace-nowrap pl-1"
          :printSpeed="20"
          @printDone="claraLine3 = true"
          :printStatus="claraLine2"
          printableText="(づ｡◕‿‿◕｡)づ"
        ></colorText>
      </div>
      <div class="text-[#57a64a] italic pl-3 pb-3">
        <colorText
          :printSpeed="20"
          @printDone="claraLine4 = true"
          :printStatus="claraLine3"
          printableText="//I'm a university student studying CompSci and CyberSec in Melbourne, Australia"
        ></colorText>
      </div>

      <div class="pl-3">
        <colorText
          :printSpeed="50"
          @printDone="claraLine5 = true"
          :printStatus="claraLine4"
          printableText="links = {"
        ></colorText>
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText class="pr-1"
          :printSpeed="50"
          @printDone="claraLine6 = true"
          :printStatus="claraLine5"
          printableText="Reddit: "
        ></colorText
        ><a v-if="claraLine6"
          class="text-pink-400 underline"
          href="https://reddit.com/u/Claraa_lilyy"
          target="_blank"
          >reddit.com/u/claraa_lilyy</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText class="pr-1"
          :printSpeed="50"
          @printDone="claraLine7 = true"
          :printStatus="claraLine6"
          printableText="Github:"
        ></colorText
        ><a v-if="claraLine7"
          class="text-pink-400 underline"
          href="https://github.com/claramoon"
          target="_blank"
          >github.com/claramoon</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText class="pr-1"
          :printSpeed="50"
          @printDone="claraLine8 = true"
          :printStatus="claraLine7"
          printableText="Twitter:"
        ></colorText
        ><a v-if="claraLine8"
          class="text-pink-400 underline"
          href="https://twitter.com/lilmaxclara"
          target="_blank"
          >twitter.com/lilmaxclara</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText class="pr-1"
          @printDone="claraLine9 = true"
          :printSpeed="50"
          :printStatus="claraLine8"
          printableText="OnlyFans:"
        ></colorText
        ><a v-if="claraLine9"
          class="text-pink-400 underline"
          href="https://onlyfans.com/claramoonx"
          target="_blank"
          >onlyfans.com/claramoonx</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText class="pr-1"
        @printDone="claraLine10 = true"
          :printSpeed="50"
          :printStatus="claraLine9"
          printableText="Fansly:"
        ></colorText
        ><a v-if="claraLine10"
          class="text-pink-400 underline"
          href="https://fansly.com/ClaraMoon"
          target="_blank"
          >fansly.com/claramoon</a
        >
      </div>

      <div class="pl-3">
        <colorText
          :printSpeed="50"
          :printStatus="claraLine10"
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
      claraLine5: false,
      claraLine6: false,
      claraLine7: false,
      claraLine8: false,
      claraLine9: false,
      claraLine10: false,
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
