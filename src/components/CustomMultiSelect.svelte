<script>
  import MultiSelect from 'svelte-multiselect';
  import { onMount } from 'svelte';

  export let options = [];
  export let selected;
  let label_text;
  export { label_text as label };

  const id = `multi_select-${Math.random().toString(36)}`;

  onMount(() => {
    const input_element = document.getElementById(id);
    input_element.classList.add('peer');
    const label = document.createElement('label');
    label.innerHTML = label_text;
    let classes_string = 'absolute text-sm duration-300 bg-gray-50 transform -translate-y-5 scale-75 top-2.5 z-10 origin-[0] left-7 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-5 text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500';
    label.classList.add(...classes_string.split(' '));

    // Insert the label after the input element
    input_element.parentNode.insertBefore(label, input_element.nextSibling);
  });
</script>

<MultiSelect
  --sms-bg='rgb(249 250 251 / 1)'
  --sms-border-radius='0.5rem'
  --sms-focus-border='1pt solid rgb(14 165 233 / 1)'
  --sms-max-width='50%'
  --sms-min-height='48px'
  --sms-padding='9.5px 10px'
  --sms-selected-bg='rgb(14 165 233 / 1)'
  --sms-selected-text-color='white'
  --sms-width='40%'
  bind:selected
  id={id}
  options={options}
  outerDivClass='flex-auto'
  placeholder=' '
  required
/>