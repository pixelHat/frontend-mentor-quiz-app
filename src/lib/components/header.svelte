<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import QuizTitle from './quiz-title.svelte';
  export let text = '';
  export let isDarkMode = false;

  const dispatch = createEventDispatcher();

  function onToggle() {
    dispatch('toggle', {});
  }
</script>

<article class="flex items-center p-x-6 py-8 sm:pt-10 sm:pb-12 md:py-21">
  <QuizTitle {text} />
  <div class="ml-auto flex items-center gap-x-2">
    <button>
      <img src="/images/icon-sun-dark.svg" alt="" />
    </button>
    <input
      type="checkbox"
      class="toggle bg-white border-none hover:bg-white"
      on:click={onToggle}
      checked={isDarkMode}
    />
    <button>
      <img src="/images/icon-moon-dark.svg" alt="" />
    </button>
  </div>
</article>

<style lang="postcss">
  .toggle {
    --tglbg: theme('colors.purple');
  }
</style>
