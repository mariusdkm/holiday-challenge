<script lang="ts">
  import RandomHotelImage from './RandomHotelImage.svelte';
  import Time from 'svelte-time';
  import { Badge } from 'flowbite-svelte';
  import IconAdult from '~icons/el/adult';
  import IconChild from '~icons/fa6-solid/child-reaching';
  import type { Offer } from '@prisma/client';

  export let offer: Offer;

</script>


<div
  class='bg-gray-200 rounded-lg w-full h-36 mb-3 drop-shadow-lg flex justify-start items-start gap-5 p-5'>
  <RandomHotelImage seed='{offer.id}' class='h-full self-start' />
  <div class='grid grid-rows-2 grid-cols-1 flex-1 content-between h-full'>
    <div class='flex justify-start text-sm gap-4'>
      <div class='grid grid-rows-2 grid-cols-2'>
        <Time class='font-bold text-base col-span-2' timestamp={new Date(offer.outbounddeparturedatetime)}
              format='HH:mm DD.MM.YY' />
        <div class='self-start'>({offer.outbounddepartureairport}) - ({offer.outboundarrivalairport})</div>
        <Time class='self-start' timestamp={new Date(offer.outboundarrivaldatetime)}
              format='HH:mm DD.MM.YY' />
      </div>
      <div class='grid grid-rows-2 grid-cols-2'>
        <Time class='self-end' timestamp={new Date(offer.inbounddeparturedatetime)}
              format='HH:mm DD.MM.YY' />
        <div class='text-right self-end'>({offer.inbounddepartureairport}) - ({offer.inboundarrivalairport})
        </div>
        <Time class='font-bold text-base col-span-2 ml-auto mr-0'
              timestamp={new Date(offer.inboundarrivaldatetime)}
              format='HH:mm DD.MM.YY' />
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
        <div>Meal type:</div>
        {#if offer.mealtype === "BREAKFAST"}
          <div>Breakfast</div>
        {:else if offer.mealtype === "ALLINCLUSIVE"}
          <div>All incluse</div>
        {:else if offer.mealtype === "HALFBOARD"}
          <div>Half board</div>
        {/if}
      </div>
    </div>
  </div>
  <Badge class='scale-110' large border><b>{offer.price}</b>€</Badge>
</div>