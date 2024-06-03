<script lang="ts">
  import { goto } from '$app/navigation';
  import { debounce } from 'lodash-es';

  /** type {import('./$types').PageData} */
  export let data;
  const quiz = data.quiz;

  const total = quiz.length;
  const letters = ['A', 'B', 'C', 'D'];

  let currentQuestionIndex = 0;
  let marks = 0;
  let selected = -1;
  let status: 'none' | 'success' | 'error' = 'none';
  let isDirty = false;
  let submitButtonText = 'Submit Answer';

  $: current = quiz[currentQuestionIndex];
  $: {
    if (status === 'none') {
      submitButtonText = 'Submit Answer';
    } else {
      submitButtonText = 'Next Question';
    }
  }

  function onSelect(idx: number) {
    if (status !== 'none') {
      return;
    }
    selected = idx;
  }

  function _onSubmit() {
    if (status !== 'none') {
      if (currentQuestionIndex === total - 1) {
        goto(`/result/${data.id}x${marks}`);
      }
      isDirty = false;
      selected = -1;
      status = 'none';
      currentQuestionIndex = Math.min(currentQuestionIndex + 1, total - 1);
      return;
    }

    if (selected === -1) {
      status = 'none';
      isDirty = true;
      return;
    }

    const answer = current.options[selected];
    if (current.answer === answer) {
      status = 'success';
      marks++;
    } else {
      status = 'error';
    }
  }
  const onSubmit = debounce(_onSubmit, 200);
</script>

<p class="text-body-small text-grey-navy">Question {currentQuestionIndex + 1} of {total}</p>

<h1 class="mt-3 text-dark-navy text-xl font-medium sm:text-4xl sm:mt-7">{current.question}</h1>

<hr class="bg-purple h-2 max-w-[55%] rounded-lg mt-7 sm:mt-11 sm:max-w-[50%]" />

<ul class="mt-10 space-y-2 sm:space-y-6 sm:mt-16">
  {#each current.options as option, idx}
    <li
      class="bg-white rounded-xl shadow-list-item p-3 sm:p-7 sm:rounded-3xl"
      class:error={idx === selected && status === 'error'}
      class:selected={idx === selected}
      class:success={idx === selected && status === 'success'}
    >
      <button class="flex items-center gap-x-4 w-full" on:click={() => onSelect(idx)}>
        <p
          class="letter flex items-center justify-center rounded-md h-10 w-10 text-center text-lg font-medium text-grey-navy sm:text-2xl"
        >
          {letters[idx]}
        </p>
        <p class="text-lg font-medium text-dark-navy sm:text-2xl">{option}</p>
        {#if (idx === selected && status === 'success') || (status === 'error' && current.answer === option)}
          <img src="/images/icon-correct.svg" alt="" class="ml-auto" />
        {:else if idx === selected && status === 'error'}
          <img src="/images/icon-incorrect.svg" alt="" class="ml-auto" />
        {/if}
      </button>
    </li>
  {/each}
</ul>

<button
  class="btn h-auto bg-purple text-white border-0 rounded-xl shadow-list-item mt-3 block w-full sm:text-2xl sm:py-6 sm:mt-8"
  on:click={onSubmit}>{submitButtonText}</button
>
{#if isDirty && selected === -1}
  <small
    class="mt-3 text-red text-lg flex items-center justify-center gap-x-2.5 font-regular sm:text-xs sm:mt-8"
    ><img src="/images/icon-error.svg" alt="" /> Please select an answer</small
  >
{/if}

<style lang="postcss">
  .selected {
    @apply border-3 border-purple;
  }
  .selected .letter {
    @apply bg-purple text-white;
  }

  .success {
    @apply border-3 border-green;
  }
  .success .letter {
    @apply bg-green text-white;
  }

  .error {
    @apply border-3 border-red;
  }
  .error .letter {
    @apply bg-red text-white;
  }
</style>
