<template>
  <div>
    <span class="text-h4 font-weight-bold">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HeaderTitle',
});

export interface Title {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<Title>(), {
  title: '',
});
</script>
