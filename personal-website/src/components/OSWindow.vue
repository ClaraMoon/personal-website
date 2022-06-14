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
      class="container bg-slate-900 h-80 rounded-bl-lg rounded-br-lg text-white p-1 max-w-[800px] font-mono"
    >
		<highlight-code lang="javascript" inline>addEventListener('load', () => {
  const code = document.querySelector('#code');
  const worker = new Worker('worker.js');
  worker.onmessage = (event) => { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
});;</highlight-code>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "OSWindow",
  components: {

  },
  props: {
    windowMinimise: Boolean,
    printContent: Boolean,
  },
};
</script>

