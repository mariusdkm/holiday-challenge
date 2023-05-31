<script>
  import { Input } from 'flowbite-svelte';

  export let datepickerFormat = 'dd.mm.yyyy';
  export let startDate;
  export let endDate;

  // onMount(() => {
  //   document
  //     .querySelectorAll('[date-rangepicker]')
  //     .forEach(function(datepickerEl) {
  //       new DateRangePicker(datepickerEl, { format: datepickerFormat });
  //     });
  // });
</script>

<svelte:head>
  <script src='https://unpkg.com/flowbite@1.5.1/dist/datepicker.js'></script>
</svelte:head>

<div date-rangepicker class='flex items-center flex-[1_0_370px]' datepicker-format={datepickerFormat}>
  <div class='relative flex-[1_1_40%]'>
    <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
      <svg
        aria-hidden='true'
        class='w-5 h-5 text-gray-500 dark:text-gray-400'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
          clip-rule='evenodd' />
      </svg>
    </div>
    <Input name='start' type='text' placeholder=' '
           class='pl-10 peer'
           value={startDate.toLocaleDateString("de-De", {day: "2-digit",month: "2-digit", year: "numeric"})}
           required
           id='date_start'
           datepicker-format={datepickerFormat}
    />
    <label
      for='date_start'
      class='absolute text-sm duration-300 bg-gray-50 transform -translate-y-4 scale-75 top-2 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500'
    >Holiday start</label>
  </div>
  <span class='mx-4 text-gray-500'>to</span>
  <div class='relative flex-[1_1_40%]'>
    <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
      <svg
        aria-hidden='true'
        class='w-5 h-5 text-gray-500 dark:text-gray-400'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
          clip-rule='evenodd' />
      </svg>
    </div>
    <Input
      class='pl-10 peer'
      name='end' type='text' placeholder=' '
      value={endDate.toLocaleDateString("de-De", {day: "2-digit",month: "2-digit", year: "numeric"})}
      required
      id='date_end'
      datepicker-format={datepickerFormat}
    />
    <label
      for='date_end'
      class='absolute text-sm duration-300 bg-gray-50 transform -translate-y-4 scale-75 top-2 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500'
    >Holiday end</label>
  </div>
</div>