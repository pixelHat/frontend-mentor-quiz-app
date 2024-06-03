<script lang="ts">
  import QuizTitle from './quiz-title.svelte';
  export let text = '';
</script>

<article class="flex items-center gap-x-2 p-x-6 py-8">
  <QuizTitle {text} />
  <div class="ml-auto flex items-center">
    <button>
      <img src="/images/icon-sun-dark.svg" alt="" />
    </button>
    <input type="checkbox" class="toggle bg-white hover:bg-white" checked />
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
