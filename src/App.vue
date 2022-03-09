<template>
  <div class="text-red-500">hello world</div>
  <div class="text-red-500" v-html="state.id"></div>
</template>

<script>
import { reactive } from 'vue';
import { getUserData } from '@/api/index';

export default {
  name: 'App',
  setup() {
    const state = reactive({});
    getUserData('Shikai1997').then((res) => {
      state.id = res.data.id;
    });
    return { state };
  },
};
</script>
