<script lang="ts">
  import QuizTitle from '$lib/components/quiz-title.svelte';

  /** type {import('./$types').PageData} */
  export let data;
</script>

<article class="mt-8 md:flex">
  <h1
    class="text-dark-navy text-4xl text-light sm:text-[4rem] sm:font-regular sm:leading-[100%] md:w-1/2"
  >
    Quiz completed <br /> <b>You scored...</b>
  </h1>

  <section class="sm:mt-16 md:w-1/2 md:mt-0">
    <article class="bg-white shadow-list-item rounded-xl py-8 sm:py-12 sm:rounded-3xl">
      <div class="flex justify-center">
        <QuizTitle text={data.title} />
      </div>
      <h2 class="text-dark-navy font-medium text-[5.5rem] text-center mt-1 sm:text-[9rem] sm:mt-10">
        {data.score}
      </h2>
      <p class="text-grey-navy text-lg text-center sm:text-xl">out of {data.total}</p>
    </article>

    <a
      class="
      btn h-auto bg-purple text-white border-0 rounded-xl shadow-list-item mt-3 w-full
      sm:text-2xl sm:py-6 sm:mt-8
      md:rounded-3xl
      hover:bg-gradient-button-hover"
      href="/">Play Again</a
    >
  </section>
</article>
