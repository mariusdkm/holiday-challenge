<script>
  import hotel1 from '$lib/images/optimized/hotel1.png';
  import hotel2 from '$lib/images/optimized/hotel2.png';
  import hotel3 from '$lib/images/optimized/hotel3.png';
  import hotel4 from '$lib/images/optimized/hotel4.png';
  import hotel5 from '$lib/images/optimized/hotel5.png';
  import hotel6 from '$lib/images/optimized/hotel6.png';
  import hotel7 from '$lib/images/optimized/hotel7.png';
  import hotel8 from '$lib/images/optimized/hotel8.png';

  let images = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8];
  export let seed = 0;

  export let image = images[Math.floor(Math.random(seed) * images.length)];

</script>

<img alt='hotel' class={$$props.class} src={image} />