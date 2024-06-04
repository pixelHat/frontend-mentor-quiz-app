<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import QuizTitle from './quiz-title.svelte';
  export let text = '';
  export let isDarkMode = false;

  $: lightModeSrc = isDarkMode ? '/images/icon-sun-light.svg' : '/images/icon-sun-dark.svg';
  $: moonModeSrc = isDarkMode ? '/images/icon-moon-light.svg' : '/images/icon-moon-dark.svg';

  const dispatch = createEventDispatcher();

  function onToggle() {
    dispatch('toggle', {});
  }
</script>

<article class="flex items-center p-x-6 py-8 sm:pt-10 sm:pb-12 md:py-21">
  <QuizTitle {text} />
  <div class="ml-auto flex items-center gap-x-2">
    <button>
      <img src={lightModeSrc} alt="" />
    </button>
    <input
      type="checkbox"
      class="toggle bg-white border-none hover:bg-white"
      on:click={onToggle}
      checked={isDarkMode}
    />
    <button>
      <img src={moonModeSrc} alt="" />
    </button>
  </div>
</article>

<style lang="postcss">
  .toggle {
    --tglbg: theme('colors.purple');
  }
</style>
