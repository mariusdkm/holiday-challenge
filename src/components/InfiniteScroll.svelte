<script lang='ts'>

  import { browser } from '$app/environment';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';

  export const loadMore: () => void = () => undefined;

  const dispatch = createEventDispatcher();

  function onScroll() {
    if (document.body.scrollHeight - window.innerHeight <= window.scrollY + 100) {
      dispatch('loadMore');
    }
  }

  onMount(() => {
    document.addEventListener('scroll', onScroll);
  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener('scroll', onScroll);
    }
  });

</script>

<div class='width-0'></div>