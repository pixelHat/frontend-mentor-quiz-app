<script lang="ts">
  import QuizTitle from '$lib/components/quiz-title.svelte';

  /** type {import('./$types').PageData} */
  export let data;
</script>

<h1
  class="text-dark-navy text-4xl text-light mt-8 sm:text-[4rem] sm:font-regular sm:leading-[100%]"
>
  Quiz completed <br /> <b>You scored...</b>
</h1>

<article class="bg-white shadow-list-item rounded-xl py-8 sm:py-12 sm:mt-16">
  <div class="flex justify-center">
    <QuizTitle text={data.title} />
  </div>
  <h2 class="text-dark-navy font-medium text-[5.5rem] text-center mt-1 sm:text-[9rem] sm:mt-10">
    {data.score}
  </h2>
  <p class="text-grey-navy text-lg text-center sm:text-xl">out of {data.total}</p>
</article>

<a
  class="btn h-auto bg-purple text-white border-0 rounded-xl shadow-list-item mt-3 w-full sm:text-2xl sm:py-6 sm:mt-8"
  href="/">Play Again</a
>
