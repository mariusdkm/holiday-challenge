<script lang='ts'>
  import CustomMultiSelect from './CustomMultiSelect.svelte';
  import Plane from '$lib/images/direct-flight.png';
  import NumberPicker from './NumberPicker.svelte';
  import IconPlane from '~icons/majesticons/airplane-line';
  import { arrivalAirportOptions, departureAirportOptions } from '../utils/airports.ts';
  import { onMount } from 'svelte';
  import CustomDatePicker from './CustomDatePicker.svelte';
  import { Datepicker } from 'flowbite-svelte';

  export let departureAirports: [string];
  export let arrivalAirports: [string] = ['PMI'];
  const departureOptions = Object.entries(departureAirportOptions).map(([k, v]) => ({ label: v, value: k }));
  const arrivalOptions = Object.entries(arrivalAirportOptions).map(([k, v]) => ({ label: v, value: k }));
  let departures = [];
  let arrivals = [];
  $: departureString = JSON.stringify(departures.map(o => o.value));
  $: arrivalString = JSON.stringify(arrivals.map(o => o.value));

  export let days = 5;
  export let children = 0;
  export let adults = 2;
  export let startDate: Date;
  export let endDate: Date;

  onMount(() => {
    const datepicker_start = document.getElementsByName('start');
    const datepicker_end = document.getElementsByName('end');
    datepicker_start.forEach(e => e.setAttribute('required', ''));
    datepicker_end.forEach(e => e.setAttribute('required', ''));

    departures = departureAirports.map(e => ({ label: departureAirportOptions[e], value: e }));
    arrivals = arrivalAirports.map(e => ({ label: arrivalAirportOptions[e], value: e }));
  });

</script>

<form class={'p-5 bg-gray-200 rounded-lg relative ' + $$props.class} method='GET' action='/search'>
  <div class='flex flex-wrap items-center gap-5 '>
    <CustomMultiSelect
      bind:selected={departures}
      label='Departures'
      options={departureOptions}
    />
    <input class='hidden' name='departures' bind:value={departureString}>
    <img alt='plane' class='w-10 h-10' src={Plane} />
    <CustomMultiSelect
      bind:selected={arrivals}
      label='Arrivals'
      options={arrivalOptions}
    />
    <input class='hidden' name='arrivals' bind:value={arrivalString}>
    <CustomDatePicker {startDate} {endDate}/>
    <div class='flex flex-[1_1_50%] gap-5'>
      <NumberPicker
        class='flex-1 min-w-[20%]'
        label='Days'
        bind:value={days}
      />
      <NumberPicker
        class='flex-1 min-w-[20%]'
        label='Adults'
        bind:value={adults}
      />
      <NumberPicker
        class='flex-1 min-w-[20%]'
        label='Children'
        bind:value={children}
      />
    </div>
  </div>
  <div class='flex justify-center items-center gap-5'>
    <button type='submit'
            class='relative inline-flex items-center justify-center p-4 px-6 py-3 mt-2.5 overflow-hidden text-sm font-medium text-indigo-600 transition duration-300 ease-out border-2 bg-primary-500 border-primary-500 rounded-lg shadow-md group'>

      <span
        class='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-200 -translate-x-full bg-primary-500 group-hover:translate-x-0 ease'>
        <IconPlane class='w-6 h-6' />
      </span>
      <span
        class='absolute flex items-center justify-center w-full h-full text-white bg-primary-500 transition-all duration-300 transform group-hover:translate-x-full ease'>Search</span>
      <span class='relative invisible'>Search</span>
    </button>
  </div>
</form>