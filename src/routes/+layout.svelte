<script lang='ts'>
  import '../app.postcss';
  import Form from '../components/Form.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<svelte:head>
  <title>Holiday Challenge</title>
</svelte:head>

<!--<div class='h-screen w-screen'>-->
<div class='w-full h-full flex justify-center items-center'>
  <div class='p-5 mt-5 bg-gray-300 rounded-lg drop-shadow-lg'>
    <Form class='w-[80vw] shadow-inner' {...data.searchParams}/>
    <slot />
  </div>
</div>
<!--</div>-->
