<template>
  <div class="max-w-screen-md mx-auto p-4">
    <h1 class="text-2xl mb-2">doggy8088 ropo list</h1>
    <Card v-for="item in state.repoData" :key="item.id" :data="item" />
    <div ref="cardEnd"></div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import { getUserRepoList } from '@/api/index';
import Card from '@/components/card.vue';

export default {
  name: 'App',
  components: { Card },
  setup() {
    const state = reactive({
      repoData: [],
      currentPage: 0,
      listCount: 6,
    });
    const cardEnd = ref(null);

    const callback = (entries, observer) => {
      //  進入可視範圍內呼叫api
      if (entries[0].isIntersecting) {
        state.currentPage += 1;
        getUserRepoList('doggy8088', {
          per_page: state.listCount,
          page: state.currentPage,
        }).then((res) => {
          state.repoData = state.repoData.concat(res.data);
          //  當前筆數小於listCount，則代表無更多資料，取消監聽
          if (res.data.length < state.listCount) {
            observer.unobserve(cardEnd.value);
          }
        });
      }
    };
    const options = {
      root: null,
      rootMargin: '40px',
      threshold: 0.2,
    };
    //  掛載dom後開始監聽
    onMounted(() => {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(cardEnd.value);
    });

    return {
      state,
      cardEnd,
    };
  },
};
</script>

<style scope>
body,
html {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
</style>
