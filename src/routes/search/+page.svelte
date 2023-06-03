<script lang='ts'>
  import type { PageData } from './$types';
  import HotelCard from '../../components/HotelCard.svelte';
  import { navigating, page } from '$app/stores';
  import { Spinner } from 'flowbite-svelte';
  import InfiniteScroll from '../../components/InfiniteScroll.svelte';

  export let data: PageData;

  let numberOfOffers = 10;
  let offers = data.offers.slice(0, numberOfOffers);

  function loadMore() {
    if (offers.length === data.offers.length) return;
    numberOfOffers += 10;
    offers = data.offers.slice(0, numberOfOffers);
  }

</script>

<div class='p-5 w-[80vw]'>
  {#if $navigating}
    <div class='text-center'>
      <Spinner size={6} />
    </div>
  {:else}
    {#if data.offers.length === 0}
      <div class='text-center'>
        <h1 class='text-2xl font-bold'>No results found</h1>
        <p class='text-gray-500'>Try adjusting your search parameters</p>
      </div>
    {:else}
      {#each offers as offer, i}
        <HotelCard {offer} search={data.searchParams} searchString={$page.url.search} delay={i * 50} />
      {/each}
    {/if}
    <InfiniteScroll on:loadMore={loadMore} />
  {/if}
</div>