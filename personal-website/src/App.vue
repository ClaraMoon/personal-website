<template>
  <div class="p-2">
    <titleCard></titleCard>
    <div class="flex flex-col justify-center items-center">
      <aboutIntro :displayProject=this.displayProject @closed="displayIntro = false" v-if="displayIntro"></aboutIntro>
      <projectsInfo @closed="displayProject = false" v-if="displayProject"></projectsInfo>
    </div>
    <menuBar @toggleIntro="displayIntro = !displayIntro" @toggleProject="displayProject = !displayProject" :projectButton="displayProject" :infoButton="displayIntro"></menuBar>
  </div>
</template>

<script>
import aboutIntro from "./components/aboutIntro";
import projectsInfo from "./components/projectsInfo";
import titleCard from "./components/titleCard";
import menuBar from "./components/menuBar";
import "./index.css";

export default {
  name: "App",
  data() {
    return {
      displayIntro: true,
      displayProject: false,
    };
  },
  components: {
    aboutIntro,
    titleCard,
    menuBar,
    projectsInfo
  },
};
</script>