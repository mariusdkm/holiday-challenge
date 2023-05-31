<script lang='ts'>
  import type { PageData } from './$types';
  import { slide } from 'svelte/transition';
  import IconStar from '~icons/ic/round-star';
  import { page } from '$app/stores';
  import OfferCard from '../../../components/OfferCard.svelte';

  export let data: PageData;

</script>


<div class='w-[80vw] bg-primary-500 rounded-lg mt-5 relative'>
  <div class='flex justify-start content-start gap-5 p-5'>
    <div class='text-2xl font-bold text-white ml-5'>{data.hotel.name}</div>
    <div class='row-start-2 col-start-2 flex justify-start items-center'>
      {#each { length: data.hotel.stars } as _, i}
        <IconStar class='w-5 h-5 text-yellow-400 fill-current' />
      {/each}
    </div>
    <!--      <div class='text-sm'>{JSON.stringify(data)}</div>-->
  </div>
  <!--    <CloseButton class='absolute top-0 right-0 m-5' on:click={() => goto(previousPage)} />-->
  <a
    class='focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 ml-auto absolute top-0 right-0 m-5 text-center font-bold w-8'
    href='/search{$page.url.search}'>&#x2715</a>
  <div class='p-5' in:slide={{ duration: data.offers.length * 100, delay: 100}} out:slide={{ duration: 500}}>
    {#each data.offers as offer, i}
      <OfferCard {offer} />
    {/each}
  </div>
  <div class='flex justify-center items-center gap-5'>
    <a
      class='relative inline-flex items-center justify-center p-4 px-6 py-3 mt-2.5 text-sm font-medium transition duration-300 ease-out bg-primary-500 rounded-lg shadow-md group text-white hover:bg-primary-700'
      href='/search{data.modifiedSearch}'>Load more</a>
  </div>
</div>
