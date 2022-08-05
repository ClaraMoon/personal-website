<template>
<div class="fixed inset-x-0 bottom-0 mb-2">
    <div class="flex justify-center">
      <div class="rounded-lg min-w-[240px] min-h-[80px] bg-black opacity-20 relative">
      </div>
      <div class="container flex flex-row justify-center absolute top-0">
        <div class="flex flex-col justify-center">
          <div v-if="infoButton" class="flex justify-center relative bottom-3">
            <div class="rounded-full w-2 h-2 bg-white absolute animate-bounce"></div>
          </div>
          <img @click="this.$emit('toggleIntro')" class="h-20 w-20 cursor-pointer" src="../assets/System_Information.webp" alt="System Information button">
        </div>
        <div class="flex flex-col justify-center">
          <div v-if="projectButton" class="flex justify-center relative bottom-3">
            <div class="rounded-full w-2 h-2 bg-white absolute animate-bounce"></div>
          </div>
          <img @click="this.$emit('toggleProject')" class="h-20 w-20 cursor-pointer" src="../assets/VS_Code.webp" alt="Project Information button">
        </div>
        <div class="flex flex-col justify-center"> 
          <a href="https://www.youtube.com/watch?v=VXmRHpX2cZI">
            <img class="h-20 w-20 cursor-pointer" src="../assets/low_res_youtube.webp" alt="Youtube button">
          </a>
        </div>
      </div>
    </div>
</div>
    
</template>

<script>

export default {
  name: 'menuBar',
  props: {
    infoButton: Boolean,
    projectButton: Boolean,
  },
}
</script>

