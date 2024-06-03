<script lang="ts">
  import QuizTitle from '$lib/components/quiz-title.svelte';

  /** type {import('./$types').PageData} */
  export let data;
</script>

<h1 class="text-dark-navy text-4xl text-light mt-8">Quiz completed <br /> <b>You scored...</b></h1>

<article class="bg-white shadow-list-item rounded-xl py-8">
  <div class="flex justify-center">
    <QuizTitle text={data.title} />
  </div>
  <h2 class="text-dark-navy text-medium text-[5.5rem] text-center mt-1">{data.score}</h2>
  <p class="text-grey-navy text-lg text-center">out of {data.total}</p>
</article>

<a class="btn bg-purple text-white border-0 rounded-xl shadow-list-item mt-3 w-full" href="/"
  >Play Again</a
>
