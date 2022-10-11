<script setup>
import { ref } from "vue";
import AppTabBody from "./AppTabBody.vue";

const props = defineProps({
  tabPanels: {
    type: Object,
    required: true,
  },
});

// const tabOptions = ref([
//   {
//     tabTitle: "Publish",
//   },
//   {
//     tabTitle: "Draft",
//   },
// ]);

const activeTab = ref("Publish");

const selectedCurrentTab = () => {};
const tabSwitchHandler = (tab) => {
  activeTab.value = tab;
  console.log(tab);
};
</script>

<template>
  <main class="container m-auto">
    <h1 class="text-center text-lg">Vue Reusable Tab Components</h1>

    <ul class="flex space-x-10">
      <li
        v-for="tabTitle in props.tabPanels"
        @click="tabSwitchHandler(tabTitle.tabTitle)"
        class="cursor-pointer bg-slate-400 p-2"
      >
        {{ tabTitle.tabTitle }}
      </li>
    </ul>

    <!-- <div class="mt-5" v-for="tab in props.tabPanels">
      <div v-if="tab.tabTitle === activeTab">
        <h1>Hello {{ activeTab }}</h1>
       
      </div>
    </div> -->
  </main>
</template>
