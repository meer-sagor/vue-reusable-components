<script setup>
import { onMounted } from "vue";
import { useTab } from "../stores/useTab";
const useTabStore = useTab();

const props = defineProps({
  tabPanels: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const firstTab = props.tabPanels[0];
  useTabStore.setCurrentTab(firstTab.tabTitle);
});
</script>

<template>
  <main class="container m-auto">
    <h1 class="text-center text-lg">Vue Reusable Tab Components</h1>

    <ul class="flex space-x-10">
      <li
        v-for="tabTitle in props.tabPanels"
        @click="useTabStore.tabSwitchHandler(tabTitle.tabTitle)"
        class="cursor-pointer bg-slate-400 p-2"
      >
        {{ tabTitle.tabTitle }} <span> Tabs</span>
      </li>
    </ul>
    <slot />
  </main>
</template>
