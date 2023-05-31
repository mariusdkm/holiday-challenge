<script>
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
</script>


<div in:slide={{ duration: 300}} out:slide={{ duration: 300}}
     class='bg-red-700 w-full h-36 rounded-lg grid gap-2 content-center mt-5 drop-shadow-lg' style='align-content: center'>
  <h1 class='text-center text-white font-bold'>Oops, Something went wrong: {$page.error.message}</h1>
  <a href='/' class='text-center text-white underline'>Go back to home</a>
</div>