<script>
  import Multiselect from 'svelte-multiselect';
  import { onMount } from 'svelte';

  let selectedOptions = [];

  // Handle selection change
  // function handleSelectionChange(selected) {
  //   selectedOptions = selected;
  // }

  // Initialize the floating label behavior
  onMount(() => {
    const selectContainer = document.querySelector('.multiselect-container');
    selectContainer.addEventListener('focusin', () => {
      selectContainer.classList.add('floating');
    });
    selectContainer.addEventListener('focusout', () => {
      if (selectedOptions.length === 0) {
        selectContainer.classList.remove('floating');
      }
    });
  });
</script>

<style>
  /*.floating-label {*/
  /*  transform: translateY(-1rem);*/
  /*  font-size: 0.75rem;*/
  /*  color: #374151;*/
  /*  transition: transform 0.15s ease-in-out;*/
  /*}*/

  /*.floating .floating-label {*/
  /*  transform: translateY(-1.5rem);*/
  /*  font-size: 0.625rem;*/
  /*  color: #6B7280;*/
  /*}*/
</style>

<div class="relative bg-gray-50 rounded-lg border-black">
  <Multiselect
    options={['Option 1', 'Option 2', 'Option 3']}
    selected={selectedOptions}
  />
  <label class="floating-label absolute top-0 left-0 ml-2 mt-1 pointer-events-none">
    Select an option
  </label>
</div>
