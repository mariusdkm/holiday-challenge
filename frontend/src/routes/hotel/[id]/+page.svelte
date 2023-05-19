<script lang='ts'>
  import type { PageData } from './$types';
  import { CloseButton } from 'flowbite-svelte';
  import { afterNavigate, goto } from '$app/navigation';
  import { fade } from 'svelte/transition';

  let previousPage = '/';

  afterNavigate(({ from }) => {
    previousPage = from?.url.pathname || previousPage;
  });

  export let data: PageData;
</script>

<div class='w-full relative'>
  <div
    in:fade={{ duration: 100}} out:fade={{ duration: 100}}
    class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-[90vw] h-[40vw] bg-gray-400 rounded-lg z-20 p-10'>
    <CloseButton class='absolute top-0 right-0 m-5' on:click={() => goto(previousPage)} />
    <h1 class='text-white font-bold text-2xl p-5'>{data.post.title}</h1>
    <div class='text-gray-100'>Id {data.post.id}</div>
    <div class='text-gray-100 text-justify'>{data.post.content}</div>
  </div>

</div>