<script>
  import { Button, ButtonGroup, Input } from 'flowbite-svelte';
  import { getUniqueId } from '../utils/uniqueId.ts';

  export let value = 0;
  export let label = 'Number';
  let input_id = getUniqueId();
</script>

<ButtonGroup class='flex-1 min-w-[20%] relative'>
  <Button
    btnClass='text-center font-medium focus:ring-2 focus:z-10 size inline-flex items-center justify-center px-4 py-2 text-sm first:rounded-l-lg last:rounded-r-lg bg-gray-300'
    on:click={() => value > 0 ? value-- : null}
  >
    -
  </Button>
  <Input id={input_id} name={label.toLowerCase()} class='min-w-[30px] bg-gray-100 peer relative' placeholder=' ' bind:value required/>
  <label
    for={input_id}
    class='absolute text-sm duration-300 bg-gray-50 transform -translate-y-4 scale-75 top-2 origin-[0] left-11 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500'
  >{label}</label>
  <Button
    btnClass='text-center text-white font-medium focus:ring-2 focus:z-10 size inline-flex items-center justify-center px-4 py-2 text-sm first:rounded-l-lg last:rounded-r-lg bg-primary-500 invalid:bg-red-500'
    on:click={() => value++}
  >
    +
  </Button>
</ButtonGroup>