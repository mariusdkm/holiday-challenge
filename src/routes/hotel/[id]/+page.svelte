<script lang='ts'>
  import type { PageData } from './$types';
  import { afterNavigate } from '$app/navigation';
  import { slide } from 'svelte/transition';
  import OfferCard from '../../../components/OfferCard.svelte';
  import IconStar from '~icons/ic/round-star';

  let previousPage = '/';

  afterNavigate(({ from }) => {
    previousPage = from?.url.pathname || previousPage;
  });

  export let data: PageData;

</script>


<div class='w-[80vw] bg-primary-500 rounded-lg mt-5'>
  <div class='flex justify-start content-start gap-5 p-5'>
    <div class='text-2xl font-bold text-white ml-5'>{data.hotel.name}</div>
    <div class='row-start-2 col-start-2 flex justify-start items-center'>
      {#each { length: data.hotel.stars } as _, i}
       <IconStar class='w-5 h-5 text-yellow-400 fill-current' />
      {/each}
    </div>
    <!--      <div class='text-sm'>{JSON.stringify(data)}</div>-->
  </div>
  <!--  <CloseButton class='absolute top-0 right-0 m-5' on:click={() => goto(previousPage)} />-->
    <div class='p-5' in:slide={{ duration: 300, axis: 'x'}} out:slide={{ duration: 300, axis: 'x'}}>
    {#each data.offers as offer, i}
      <OfferCard {offer}/>
    {/each}
  </div>
</div>
