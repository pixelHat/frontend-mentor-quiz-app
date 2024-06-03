import { error } from '@sveltejs/kit';
import { quizzes, quizzesTitle } from '$lib/quizzes';

/** type {import('./$types').PageLoad} */
export function load({ params }) {
  const id = +params.id;
  const score = +params.score;
  if (id < 1 || id > 4) {
    error(404, 'Not found');
  }
  return {
    id,
    title: quizzesTitle[id - 1],
    score: score,
    total: quizzes[id - 1].length
  };
}
