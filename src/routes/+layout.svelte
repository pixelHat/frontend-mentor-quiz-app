<script>
  import { page } from '$app/stores';
  import '../app.css';
  import Header from '$lib/components/header.svelte';

  let isDarkMode = true;
</script>

<article class="w-full h-full" class:dark={isDarkMode}>
  <article class="container mx-auto px-6 md:px-16">
    <div class="deco sm:-ml-6 md:-ml-16"></div>
    <div>
      <Header text={$page.data.title} on:toggle={() => (isDarkMode = !isDarkMode)} {isDarkMode} />
      <slot />
    </div>
  </article>
</article>

<style scoped>
  .container {
    position: relative;
    min-height: 100vh;
  }
  .container > * {
    position: relative;
  }
  .deco {
    background-image: url(/images/pattern-background-mobile-light.svg);
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .dark .deco {
    background-image: url(/images/pattern-background-mobile-dark.svg);
  }
  @media (min-width: 768px) {
    .deco {
      background-image: url(/images/pattern-background-tablet-light.svg);
    }
    .dark .deco {
      background-image: url(/images/pattern-background-tablet-dark.svg);
    }
  }
  @media (min-width: 1024px) {
    .deco {
      background-image: url(/images/pattern-background-desktop-light.svg);
      background-position: top right;
      width: 110%;
      transform: translateY(-5%);
    }
    .dark .deco {
      background-image: url(/images/pattern-background-desktop-dark.svg);
    }
  }
</style>
