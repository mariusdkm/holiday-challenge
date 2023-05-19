<script>
  import { slide } from 'svelte/transition';
</script>

<div class='p-5 w-full' in:slide={{ duration: 300}} out:slide={{ duration: 300}}>
  {#each { length: 3 } as _, i}
    <a
      href='/hotel/{i}'
      class='block bg-gray-200 rounded-lg w-full h-28 m-2'>
      <div class='flex flex-col justify-center items-center h-full'>
        <div class='text-2xl font-bold'>Hotel {i}</div>
        <div class='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
    </a>
  {/each}
</div>
