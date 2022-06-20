<template>
  <div class="bg-slate-700 h-screen p-2">
    <div class="flex flex-col justify-center items-center">
      <div class="text-sm text-green-500 font-mono mb-4"><pre></pre></div>
      <aboutIntro></aboutIntro>
    </div>
  </div>
</template>

<script>
import aboutIntro from "./components/aboutIntro";
import "./index.css";

export default {
  name: "App",
  data() {
    return {
      windowPrint: "",
      donePrint: false,
    };
  },
  components: {
    aboutIntro,
  },
  methods: {
    async slowPrint(content) {
      const timer = (ms) => new Promise((res) => setTimeout(res, ms));

      for (let index = 0; index < content.length; index++) {
        const element = content[index];
        this.windowPrint += element;
        await timer(50);
      }
    },
  },
  async mounted() {
    await this.slowPrint("//Hello my name is Clara Moon (づ｡◕‿‿◕｡)づ\n");
    await this.slowPrint(
      "//I'm a university student studying CompSci and CyberSec in Melbourne, Australia\n"
    );
    this.donePrint = true;
  },
};
</script>

<style></style>
