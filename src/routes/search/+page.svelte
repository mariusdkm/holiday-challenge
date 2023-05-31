<script lang='ts'>
  import type { PageData } from './$types';
  import HotelCard from '../../components/HotelCard.svelte';
  import { navigating, page } from '$app/stores';
  import { Spinner } from 'flowbite-svelte';

  export let data: PageData;
</script>

{#key data.offers}
  <div class='p-5 w-[80vw]'>
    {#if $navigating}
      <div class='text-center'>
        <Spinner size={6} />
      </div>
    {:else}

      {#each data.offers as offer, i}
        <HotelCard {offer} search={data.searchParams} searchString={$page.url.search} delay={i * 50} />
      {/each}
      <div class='flex justify-center items-center gap-5'>
        <a
          class='relative inline-flex items-center justify-center p-4 px-6 py-3 mt-2.5 text-sm font-medium transition duration-300 ease-out bg-primary-500 rounded-lg shadow-md group text-white hover:bg-primary-700'
          href='/search{data.modifiedSearch}'>Load more</a>
      </div>

    {/if}
  </div>
{/key}
