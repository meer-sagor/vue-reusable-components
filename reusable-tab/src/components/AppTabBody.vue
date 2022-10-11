<script setup>
const props = defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div v-show="activeTab === 'Publish'">
    <slot />
  </div>
</template>
