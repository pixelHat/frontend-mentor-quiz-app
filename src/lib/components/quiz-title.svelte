<script lang="ts">
  export let text = '';

  const images: Record<string, string> = {
    html: '/images/icon-html.svg',
    css: '/images/icon-css.svg',
    javascript: '/images/icon-js.svg',
    accessibility: '/images/icon-accessibility.svg'
  };
  const bgs: Record<string, string> = {
    html: 'bg-[#FFF1E9]',
    css: 'bg-[#E0FDEF]',
    javascript: 'bg-[#EBF0FF]',
    accessibility: 'bg-[#F6E7FF]'
  };

  $: bg = bgs[text.toLowerCase()];
  $: src = images[text.toLowerCase()];
</script>

{#if text}
  <article class="flex items-center space-x-[1.125rem]">
    <div class="p-1.5 rounded-md {bg}">
      <img {src} alt="" />
    </div>
    <span class="text-lg font-medium text-dark-navy">
      {text}
    </span>
  </article>
{/if}
