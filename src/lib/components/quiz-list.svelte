<script>
  import QuizTitle from '$lib/components/quiz-title.svelte';
  const quizzes = [
    {
      text: 'HTML',
      id: 1
    },
    {
      text: 'CSS',
      id: 2
    },
    {
      text: 'Javascript',
      id: 3
    },
    {
      text: 'Accessibility',
      id: 4
    }
  ];
</script>

<ul class="flex flex-col gap-y-3">
  {#each quizzes as quiz}
    <li>
      <a
        class="flex bg-white rounded-xl shadow-list-item p-3 sm:rounded-3xl"
        href="/quiz/{quiz.id}"
      >
        <QuizTitle text={quiz.text} />
      </a>
    </li>
  {/each}
</ul>
