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
  let progressBarEl: HTMLHRElement;

  $: current = quiz[currentQuestionIndex];
  $: {
    if (status === 'none') {
      submitButtonText = 'Submit Answer';
    } else {
      submitButtonText = 'Next Question';
    }
  }
  $: progress = ((currentQuestionIndex + 1) / total) * 100;

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
      progressBarEl.style.setProperty('width', `${progress}%`);
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

<article class="md:flex">
  <section class="md:w-1/2 flex flex-col">
    <p class="text-body-small text-grey-navy dark:text-light-bluish">
      Question {currentQuestionIndex + 1} of {total}
    </p>
    <h1 class="mt-3 text-dark-navy text-xl font-medium sm:text-4xl sm:mt-7 dark:text-white">
      {current.question}
    </h1>
    <div
      class="bg-transparent w-[90%] p-1 mt-7 rounded-lg sm:mt-11 md:mt-auto md:-translate-y-28 dark:bg-navy"
    >
      <hr class="bg-purple h-2 border-0 rounded-lg w-0 dark:bg-purple" bind:this={progressBarEl} />
    </div>
  </section>

  <section class="md:w-1/2">
    <ul class="mt-10 space-y-2 sm:space-y-6 sm:mt-16">
      {#each current.options as option, idx}
        <li
          class="bg-white rounded-xl shadow-list-item sm:rounded-3xl dark:bg-navy"
          class:error={idx === selected && status === 'error'}
          class:selected={idx === selected}
          class:success={idx === selected && status === 'success'}
        >
          <button
            class="flex items-center gap-x-4 w-full group p-3 sm:p-7"
            on:click={() => onSelect(idx)}
          >
            <p
              class="letter flex items-center justify-center rounded-md h-10 w-10 text-center text-lg font-medium text-grey-navy sm:text-2xl group-hover:bg-light-purple group-hover:text-purple dark:bg-light-gray dark:text-grey-navy"
            >
              {letters[idx]}
            </p>
            <p class="text-lg font-medium text-dark-navy sm:text-2xl dark:text-white">{option}</p>
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
      class="btn h-auto bg-purple text-white border-0 rounded-xl shadow-list-item mt-3 block w-full sm:text-2xl sm:py-6 sm:mt-8 md:rounded-3xl"
      on:click={onSubmit}>{submitButtonText}</button
    >
    {#if isDirty && selected === -1}
      <small
        class="mt-3 text-red text-lg flex items-center justify-center gap-x-2.5 font-regular sm:text-xs sm:mt-8 dark:text-white"
        ><img src="/images/icon-error.svg" alt="" /> Please select an answer</small
      >
    {/if}
  </section>
</article>

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
