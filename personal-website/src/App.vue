<template>
<div class="bg-slate-700 h-screen">
  <div class="flex flex-col justify-center items-center">
  <div class="text-sm text-green-500 font-mono mb-4"><pre>
</pre></div>    
  <OSWindow :printContent="windowPrint"></OSWindow>

  </div>
</div>

</template>

<script>
import OSWindow from './components/OSWindow'
import './index.css'

export default {
  name: 'App',
  data (){
    return{
      windowPrint : ""
    }
  },
  components: {
    OSWindow
  },
  methods:{
    
    async slowPrint(content){
      const timer = ms => new Promise(res => setTimeout(res, ms))

      for (let index = 0; index < content.length; index++) {
        const element = content[index];
        this.windowPrint += element
         await timer(90);
      }
    }
  },
  async mounted (){
   await this.slowPrint("//Hello my name is Clara Moon \n")
   //object with links and other relevant infos
  }

}
</script>

<style>

</style>
