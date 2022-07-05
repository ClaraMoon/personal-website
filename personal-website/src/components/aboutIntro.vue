<template>
  <div
    v-if="displayAbout"
    class="container bg-slate-800 rounded-lg max-w-[800px] m-2 relative"
  >
    <div class="flex flex-row">
      <div
        class="container flex justify-start text-white p-2 pl-4 max-w-[800px] italic"
      >
        About
        <span class="pl-5"
          ><Toggle
            v-model="pepeToggle"
            :classes="{
              container:
                'inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30',
              toggle:
                'flex w-12 h-4 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              toggleOn:
                'bg-[#57a64a] border-[#57a64a] justify-start text-white',
              toggleOff:
                'bg-gray-300 border-gray-300 justify-end text-gray-700',
              toggleOnDisabled:
                'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
              toggleOffDisabled:
                'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
              handle:
                'inline-block bg-white w-5 h-4 top-0 rounded-full absolute transition-all',
              handleOn: 'left-full transform -translate-x-full',
              handleOff: 'left-0',
              handleOnDisabled:
                'bg-gray-100 left-full transform -translate-x-full',
              handleOffDisabled: 'bg-gray-100 left-0',
              label: 'text-center w-8 border-box whitespace-nowrap select-none',
            }"
        /></span>
      </div>
       <Transition>
      <div class="absolute right-24 -top-[92px]" v-show="pepeToggle">
        <img
          src="../assets/HyperPepeCut.webp"
          rel="preload"
          height="127"
          width="100"
          alt="Happy Peepo"
        />
      </div>
      </Transition>

      <div
        class="container flex justify-end text-white p-2 gap-2 max-w-[800px]"
      >
        <button
          class="rounded-full w-5 h-5 bg-[#00CA4E] hover:bg-[#33D571]"
        ></button>
        <button
          @click="this.$emit('closed')"
          class="rounded-full w-5 h-5 bg-[#FFBD44] hover:bg-[#FFCA69]"
        ></button>
        <button
          @click="this.$emit('closed')"
          class="rounded-full w-5 h-5 bg-[#FF605C] hover:bg-[#FF807D]"
        ></button>
      </div>
    </div>
    <div
      class="container bg-slate-900 min-h-[260px] rounded-bl-lg rounded-br-lg text-white p-1 max-w-[800px] font-mono"
    >
      <div class="text-[#57a64a] italic pl-3 flex flex-wrap">
        <colorText
          :printSpeed="20"
          :printStatus="claraLine1"
          @printDone="claraLine2 = true"
          printableText="//Hi my name is Clara"
        ></colorText>
        <colorText
          class="whitespace-nowrap pl-1"
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
          printableText="//I'm a university student studying CompSci and CyberSec in Australia"
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
        <colorText
          class="pr-1"
          :printSpeed="50"
          @printDone="claraLine6 = true"
          :printStatus="claraLine5"
          printableText="OnlyFans:"
        ></colorText
        ><a
          v-if="claraLine6"
          class="text-pink-400 underline"
          href="https://onlyfans.com/claramoonx"
          target="_blank"
          >onlyfans.com/claramoonx</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText
          class="pr-1"
          :printSpeed="50"
          @printDone="claraLine7 = true"
          :printStatus="claraLine6"
          printableText="Github:"
        ></colorText
        ><a
          v-if="claraLine7"
          class="text-pink-400 underline"
          href="https://github.com/claramoon"
          target="_blank"
          >github.com/claramoon</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText
          class="pr-1"
          :printSpeed="50"
          @printDone="claraLine8 = true"
          :printStatus="claraLine7"
          printableText="Insta:"
        ></colorText
        ><a
          v-if="claraLine8"
          class="text-pink-400 underline"
          href="https://www.instagram.com/lilmaxclara/"
          target="_blank"
          >instagram.com/lilmaxclara</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText
          class="pr-1"
          :printSpeed="50"
          @printDone="claraLine9 = true"
          :printStatus="claraLine8"
          printableText="Twitter:"
        ></colorText
        ><a
          v-if="claraLine9"
          class="text-pink-400 underline"
          href="https://twitter.com/lilmaxclara"
          target="_blank"
          >twitter.com/lilmaxclara</a
        >
      </div>

      <div class="text-purple-400 pl-6 flex flex-row">
        <colorText
          class="pr-1"
          @printDone="claraLine10 = true"
          :printSpeed="50"
          :printStatus="claraLine9"
          printableText="Reddit:"
        ></colorText
        ><a
          v-if="claraLine10"
          class="text-pink-400 underline"
          href="https://reddit.com/u/Claraa_lilyy"
          target="_blank"
          >reddit.com/u/Claraa_lilyy</a
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
import Toggle from "@vueform/toggle";
export default {
  name: "aboutIntro",
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
      claraLine11: false,
      displayAbout: true,
      pepeToggle: false,
    };
  },
  components: {
    colorText,
    Toggle,
  },
};
</script>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
