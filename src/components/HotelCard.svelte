<script lang='ts'>
  import RandomHotelImage from './RandomHotelImage.svelte';
  import { slide } from 'svelte/transition';
  import { Badge } from 'flowbite-svelte';
  import IconStar from '~icons/ic/round-star';
  import IconRightArrow from '~icons/octicon/arrow-right-16';
  import type { SearchResult } from '../utils/prisma';
  import { toLocalDate } from '../utils/date';
  import type { SearchParams } from '../utils/parseSearchParams';

  export let offer: SearchResult;
  export let search: SearchParams;
  export let searchString: string;
  export let delay = 0;
</script>


<div
  class='bg-gray-200 rounded-lg w-full h-36 mb-3 drop-shadow-lg flex justify-start items-start gap-5 p-5 last:-mb-5'
  in:slide={{duration: 100}} out:slide={{ duration: 100, delay: delay + 100}}>
  <RandomHotelImage class='h-full self-start' seed='{offer.hotelid}' />
  <div class=''>
    <div class='flex justify-start text-2xl font-bold gap-5'>
      {offer.name}
      <div class='flex justify-start items-center'>
        {#each { length: offer.stars } as _, i}
          <IconStar class='w-5 h-5 text-yellow-500 fill-current' />
        {/each}
      </div>
    </div>

    <div class='col-span-2 text-sm'>
      for {search.days} days between {toLocalDate(offer.startdate)}
      and {toLocalDate(offer.enddate)}
    </div>
  </div>
  <div class='flex-1'></div>
  <!--  </div>-->
  <div class='h-full flex flex-col items-end justify-end'>
    <Badge border class='scale-100' large><b>from {offer.price}</b>€</Badge>
    <a
      class='text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg mt-auto'
      href='hotel/{offer.hotelid}{searchString}'>Show
      more
      <IconRightArrow />
    </a>
  </div>
</div>