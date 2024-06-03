<script>
  import { page } from '$app/stores';
  import '../app.css';
  import Header from '$lib/components/header.svelte';
</script>

<article class="container px-6">
  <Header text={$page.data.title} />
  <slot />
</article>

<style scoped>
  article {
    background-image: url(/images/pattern-background-mobile-light.svg);
    top: 0;
    left: 0;
    min-height: 100vh;
  }
</style>
