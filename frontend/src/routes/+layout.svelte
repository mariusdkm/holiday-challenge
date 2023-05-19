<script>
  import '../app.postcss';
  import Form from '../components/Form.svelte';
</script>

<div class='h-screen w-screen'>
  <div class='w-full h-full flex justify-center items-center'>
    <div class='flex justify-center items-center flex-wrap p-5 m-5 bg-gray-300 rounded-lg'>
          <Form class='w-[80vw]' />
      <slot />
    </div>
  </div>
</div>
