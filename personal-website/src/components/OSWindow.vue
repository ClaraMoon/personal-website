<template>
  <div class="container bg-slate-800 rounded-lg max-w-[800px] m-2">
    <div class="container flex justify-end text-white p-2 gap-2 max-w-[800px]">
      <button
        class="rounded-full w-5 h-5 bg-[#00CA4E] hover:bg-[#33D571]"
      ></button>
      <button
        class="rounded-full w-5 h-5 bg-[#FFBD44] hover:bg-[#FFCA69]"
      ></button>
      <button
        class="rounded-full w-5 h-5 bg-[#FF605C] hover:bg-[#FF807D]"
      ></button>
    </div>
    <div
      class="container bg-slate-900 min-h-[300px] rounded-bl-lg rounded-br-lg text-white p-1 max-w-[800px] font-mono"
    >
      <pre
        v-highlightjs
      ><code class="javascript">{{this.printContent}}</code></pre>

      <span class="text-[#57a64a] italic"><colorText :printSpeed=50 indent=1 :printStatus="printStatus1" printableText="//Hello my name is Clara Moon (づ｡◕‿‿◕｡)づ"></colorText></span>

      <pre v-if="introDone"><code>
        
links = {
   <span class="text-purple-400">Reddit: <a class="text-pink-400 underline" href="https://reddit.com/user/Claraa_lilyy" target="_blank">https://reddit.com/user/claraa_lilyy</a></span> , 
   <span class="text-purple-400">Github: <a class="text-pink-400 underline" href="https://github.com/claramoon" target="_blank">https://github.com/claramoon</a></span> ,
   <span class="text-purple-400">Twitter: <a class="text-pink-400 underline" href="https://twitter.com/lilmaxclara" target="_blank">https://twitter.com/lilmaxclara</a></span> ,
   <span class="text-purple-400">OnlyFans: <a class="text-pink-400 underline" href="https://onlyfans.com/claramoonx" target="_blank">https://onlyfans.com/claramoonx</a></span> ,
   <span class="text-purple-400">Fansly: <a class="text-pink-400 underline" href="https://fansly.com/ClaraMoon" target="_blank">https://fansly.com/claramoon</a></span>
   }
   <span class="text-purple-400"><colorText :printSpeed=50 :printStatus="printStatus1" printableText="Test thing"></colorText></span>
        </code></pre>
    </div>
  </div>
</template>

<script>
import colorText from './colorText'
export default {
  name: "OSWindow",
  data() {
    return {
      printStatus1 : false,
    };
  },
  components: {
    colorText
  },
  props: {
    introDone: Boolean,
    printContent: String,
  },
  methods: {},
  mounted() {
    
  },
};
</script>
