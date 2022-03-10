<template>
  <div class="bg-white rounded shadow-md mb-4 p-4 h-40 flex flex-col justify-around">
    <h2 v-html="title" class="text-xl truncate"></h2>
    <p v-html="description" class="text-sm truncate"></p>
    <a
      :href="link"
      v-html="link"
      class="text-sm text-blue-700 hover:underline truncate"
      target="_blank"
    ></a>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['data'],
  setup(props) {
    return {
      title: props.data.name,
      description: props.data.description || '暫無內容...',
      link: props.data.html_url,
    };
  },
};
</script>
