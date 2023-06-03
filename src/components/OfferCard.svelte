<script lang='ts'>
  import RandomHotelImage from './RandomHotelImage.svelte';
  import { slide } from 'svelte/transition';
  import Time from 'svelte-time';
  import { Badge } from 'flowbite-svelte';
  import IconAdult from '~icons/el/adult';
  import IconChild from '~icons/fa6-solid/child-reaching';
  import type { Offer } from '@prisma/client';

  const mealTypes = {
    'ACCORDINGDESCRIPTION': 'According to description',
    'ALLINCLUSIVE': 'All inclusive',
    'ALLINCLUSIVEPLUS': 'All inclusive plus',
    'BREAKFAST': 'Breakfast',
    'FULLBOARD': 'Full board',
    'FULLBOARDPLUS': 'Full board plus',
    'HALFBOARD': 'Half board',
    'HALFBOARDPLUS': 'Half board plus',
    'NONE': 'None',
    'PROGRAM': 'Program'
  };

  export let offer: Offer;
  export let delay: number = 0;
</script>


<div
  class='bg-gray-200 rounded-lg w-full h-36 mb-3 drop-shadow-lg flex justify-start items-start gap-5 p-5'
  in:slide={{ duration: 100, delay: 100}} out:slide={{ duration: 100, delay: delay + 100}}>
  <RandomHotelImage class='h-full self-start' seed='{offer.id}' />
  <div class='grid grid-rows-2 grid-cols-1 flex-1 content-between h-full'>
    <div class='flex justify-start text-sm gap-4'>
      <div class='grid grid-rows-2 grid-cols-2'>
        <Time class='font-bold text-base col-span-2' format='HH:mm DD.MM.YY'
              timestamp={new Date(offer.outbounddeparturedatetime)} />
        <div class='self-start'>({offer.outbounddepartureairport}) - ({offer.outboundarrivalairport})</div>
        <Time class='self-start' format='HH:mm DD.MM.YY'
              timestamp={new Date(offer.outboundarrivaldatetime)} />
      </div>
      <div class='grid grid-rows-2 grid-cols-2'>
        <Time class='self-end' format='HH:mm DD.MM.YY'
              timestamp={new Date(offer.inbounddeparturedatetime)} />
        <div class='text-right self-end'>({offer.inbounddepartureairport}) - ({offer.inboundarrivalairport})
        </div>
        <Time class='font-bold text-base col-span-2 ml-auto mr-0'
              format='HH:mm DD.MM.YY'
              timestamp={new Date(offer.inboundarrivaldatetime)} />
      </div>
    </div>
    <div class='flex justify-start items-start gap-5 self-end'>
      <div class='grid grid-cols-2 grid-rows-2 gap-x-1'>
        Adults:
        <div class='flex justify-start items-center'>{offer.countadults}
          <IconAdult />
        </div>
        Children:
        <div class='flex justify-start items-center'>{offer.countchildren}
          <IconChild />
        </div>
      </div>
      <div class='inline-grid grid-cols-[auto_auto] grid-rows-2 gap-x-1'>
        <div>Room type:</div>
        <div>{offer.roomtype[0] + offer.roomtype.slice(1).toLowerCase() + (offer.oceanview ? " with ocean view" : "")}</div>
        {#if offer.mealtype !== 'NONE'}
          <div>Meal type:</div>
          <div>{mealTypes[offer.mealtype]}</div>
        {/if}
      </div>
    </div>
  </div>
  <Badge border class='scale-110' large><b>{offer.price}</b>€</Badge>
</div>