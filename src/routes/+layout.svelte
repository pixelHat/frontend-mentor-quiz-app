<script>
  import { page } from '$app/stores';
  import '../app.css';
  import Header from '$lib/components/header.svelte';
</script>

<article class="container px-6 md:px-16">
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
  @media (min-width: 768px) {
    article {
      background-image: url(/images/pattern-background-tablet-light.svg);
    }
  }
</style>
