<script setup>
import { ref } from "vue";
import AppTabs from "../components/AppTabs.vue";
import AppTabBody from "../components/AppTabBody.vue";

const tabOptions = ref([
  {
    tabTitle: "Publish",
  },
  {
    tabTitle: "Draft",
  },
]);
</script>

<template>
  <main class="container m-auto">
    <h1 class="text-center text-lg">Vue Reusable Tab Components</h1>
    <AppTabs :tabPanels="tabOptions">
      <AppTabBody activeTab="Publish">
        <h1>Hello world</h1> 

      </AppTabBody>
    </AppTabs>
  </main>
</template>
