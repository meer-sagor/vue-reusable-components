<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import AppTabs from "../components/AppTabs.vue";
import AppTabBody from "../components/AppTabBody.vue";
import { useTab } from "../stores/useTab";
const useTabStore = useTab();

const { currentTab } = storeToRefs(useTabStore);

const tabOptions = ref([
  {
    tabTitle: "Publish",
  },
  {
    tabTitle: "Draft",
  },
  {
    tabTitle: "Cool",
  },
]);
</script>

<template>
  <main class="container m-auto">
    <AppTabs :tabPanels="tabOptions">
      <AppTabBody v-show="currentTab === 'Publish'">
        <h1>Hello world {{ currentTab }}</h1>
      </AppTabBody>
      <AppTabBody v-show="currentTab === 'Draft'">
        <h1>Hello {{ currentTab }}</h1>
      </AppTabBody>
      <AppTabBody v-show="currentTab === 'Cool'">
        <h1>{{ currentTab }}</h1>
      </AppTabBody>
    </AppTabs>
  </main>
</template>
