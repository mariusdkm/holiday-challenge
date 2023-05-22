<script>
  import { Datepicker } from 'flowbite-svelte';
  import CustomMultiSelect from './CustomMultiSelect.svelte';
  import Plane from '$lib/images/direct-flight.png';
  import NumberPicker from './NumberPicker.svelte';
  let arrivals = [];
  let departures = [];
  let days = 5;
  let children = 0;
  let adults = 2;
</script>

<div class={'p-5 bg-gray-200 rounded-lg relative ' + $$props.class}>
      <div class='flex flex-wrap items-center gap-5 '>
        <CustomMultiSelect
          bind:selected={departures}
          label='Departures'
          options={["New York", "London", "Paris", "Berlin", "Tokyo", "Rome", "Madrid", "Moscow", "Amsterdam", "Vienna"]}
        />
        <img alt='plane' class='w-10 h-10' src={Plane} />
        <CustomMultiSelect
          bind:selected={arrivals}
          label='Arrivals'
          options={["New York", "London", "Paris", "Berlin", "Tokyo", "Rome", "Madrid", "Moscow", "Amsterdam", "Vienna"]}
        />
        <Datepicker
          name='datepicker'
          class='flex-[1_1_370px]'
          label='Departure Date'
          placeholder='Select date'
          range />
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
        <a href='/search'
           class='relative inline-flex items-center justify-center p-4 px-6 py-3 mt-2.5 overflow-hidden text-sm font-medium text-indigo-600 transition duration-300 ease-out border-2 bg-primary-500 border-primary-500 rounded-lg shadow-md group'>
          <span
            class='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-200 -translate-x-full bg-primary-500 group-hover:translate-x-0 ease'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h5.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-4.02a1 1 0 0 0-.78.375l-3.4 4.25a1 1 0 0 1-.78.375H9.476a1 1 0 0 1-.928-1.371l.902-2.258A1 1 0 0 0 8.523 14H4.659a1 1 0 0 1-.919-.606l-2.143-5A1 1 0 0 1 2.517 7h1.865a1 1 0 0 1 .894.553l.448.894A1 1 0 0 0 6.618 9H10m5 0l-2.7-3.6a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447L10 9m5 0h-5"/></svg>
          </span>
          <span
            class='absolute flex items-center justify-center w-full h-full text-white bg-primary-500 transition-all duration-300 transform group-hover:translate-x-full ease'>Search</span>
          <span class='relative invisible'>Search</span>
        </a>
      </div>
    </div>