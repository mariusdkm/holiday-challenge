<script lang='ts'>
  import type { PageData } from './$types';
  import IconStar from '~icons/ic/round-star';
  import { page } from '$app/stores';
  import OfferCard from '../../../components/OfferCard.svelte';
  import InfiniteScroll from '../../../components/InfiniteScroll.svelte';

  export let data: PageData;

  let numberOfOffers = 10;
  let offers = data.offers?.slice(0, numberOfOffers);

  function loadMore() {
    if (offers.length === data.offers?.length) return;
    numberOfOffers += 10;
    offers = data.offers?.slice(0, numberOfOffers);
  }

</script>

{#key data.offers}
  <div class='w-[80vw] bg-primary-500 rounded-lg mt-5 relative'>
    <div class='flex justify-start content-start gap-5 p-5'>
      <div class='text-2xl font-bold text-white ml-5'>{data.hotel.name}</div>
      <div class='row-start-2 col-start-2 flex justify-start items-center'>
        {#each { length: data.hotel.stars } as _, i}
          <IconStar class='w-5 h-5 text-yellow-400 fill-current' />
        {/each}
      </div>
    </div>
    <a
      class='focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 ml-auto absolute top-0 right-0 m-5 text-center font-bold w-8 text-white hover:text-gray-700'
      href='/search{$page.url.search}'>&#x2715</a>

    {#if data.offers.length === 0}
      <div class='text-center'>
        <h1 class='text-2xl font-bold text-white'>No offers found</h1>
        <p class='text-gray-300 pb-5'>Try adjusting your search parameters</p>
      </div>
    {:else}
      <div class='p-5'>
        {#each offers as offer, i}
          <OfferCard {offer} delay={i * 10} />
        {/each}
      </div>
      <InfiniteScroll on:loadMore={loadMore} />
    {/if}
  </div>
{/key}
