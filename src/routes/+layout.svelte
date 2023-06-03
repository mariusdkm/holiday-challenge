<script lang='ts'>
  import '../app.postcss';
  import Form from '../components/Form.svelte';
  import type { LayoutData } from './$types';
  import { navigating } from '$app/stores';
  import { Spinner } from 'flowbite-svelte';

  export let data: LayoutData;
</script>

<svelte:head>
  <title>Holiday Challenge</title>
</svelte:head>

<div class='w-full min-h-screen flex justify-center items-center'>
  <div class='p-5 mt-5 bg-gray-300 rounded-lg drop-shadow-lg'>
    <!--    <div class='text-primary-800 text-3xl font-bold drop-shadow-2xl mb-2'>Your Holiday Finder</div>-->
    <Form {...data.searchParams} class='w-[80vw] shadow-inner' />
    {#if $navigating}
      <div class='text-center'>
        <Spinner size={6} />
      </div>
    {/if}
    <slot />
  </div>
</div>
