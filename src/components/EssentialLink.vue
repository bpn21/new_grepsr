<template>
  <q-item>
    <q-item-section>
      <div class="col-md-12 col-xs-12 text-center">
        <span class="text-h4 font-weight-bold">{{ title }}</span>
      </div>
    </q-item-section>
  </q-item>
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
