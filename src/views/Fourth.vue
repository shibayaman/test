<script setup>
import { useGlobalStore } from "@/stores/global";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useGlobalStore();

store.setBackHandler(() => router.push('/3'));
</script>

<template>
  <main>
    4
  </main>
</template>
