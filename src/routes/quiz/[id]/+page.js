import { error } from '@sveltejs/kit';
import { quizzes, quizzesTitle } from '$lib/quizzes';

/** type {import('./$types').PageLoad} */
export function load({ params }) {
  const id = +params.id;
  if (id < 1 || id > 4) {
    error(404, 'Not found');
  }
  return {
    id,
    quiz: quizzes[id - 1],
    title: quizzesTitle[id - 1]
  };
}
