<script lang='ts'>
  import { slide } from 'svelte/transition';
  import type { PageData } from './$types';
  import HotelCard from '../../components/HotelCard.svelte';
  import { navigating, page } from '$app/stores';
  import { Spinner } from 'flowbite-svelte';

  export let data: PageData;
</script>

<div class='p-5 w-[80vw]' in:slide={{ duration: 300}} out:slide={{ duration: 300}}>
  {#if $navigating}
    <div class='text-center'>
      <Spinner size={6} />
    </div>
  {:else}
    {#each data.offers as offer, _}
      <HotelCard {offer} search={data.searchParams} searchString={$page.url.search} />
    {/each}
  {/if}
</div>
