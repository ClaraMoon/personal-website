<template>
<div class="bg-slate-700 h-screen">
  <div class="flex justify-center">
        
  <OSWindow></OSWindow>
  <highlight-code lang="javascript" inline>alert('Hello, World!');</highlight-code>
  </div>
</div>

</template>

<script>
import OSWindow from './components/OSWindow'
import './index.css'

export default {
  name: 'App',
  components: {
    OSWindow
  }
}
</script>

<style>

</style>
