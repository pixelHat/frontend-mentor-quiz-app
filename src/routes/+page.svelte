<script>
  import QuizList from '$lib/components/quiz-list.svelte';
</script>

<article class="flex flex-col mt-8 md:flex-row md:gap-x-32">
  <section class="md:w-2/5">
    <h1 class="text-dark-navy text-4xl font-light sm:text-[4rem] sm:font-regular sm:leading-[100%]">
      Welcome to the <br />
      <b>Frontend Quiz!</b>
    </h1>
    <p class="text-body-small text-grey-navy mt-4 mb-10">Pick a subject to get started.</p>
  </section>
  <div class="md:w-3/5">
    <QuizList />
  </div>
</article>
