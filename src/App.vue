<template>
  <div class="h-100vh flex-col flex-center">
    <h1 class="text-30px">{{ str }}</h1>
    <icon-mdi-wechat class="text-40px text-blue-400 cursor-pointer" />
    <h1 class="text-30px">{{ auth.piniaName }}</h1>
    <img alt="Vue logo" :src="ImgLogo" class="w-200px h-auto" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from '@vue/composition-api';
import { useAuthStore } from '@/store';
import HelloWorld from './components/HelloWorld.vue';
// 支持别名
import { ImgLogo } from '@/assets';

const auth = useAuthStore();
const str = ref<string>('composition-api');
</script>
<style></style>
