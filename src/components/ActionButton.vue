<template>
  <button
  type="button"
  :class="getButtonClasses()">
    {{actionName}}
  </button>
</template>


<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'ActionButton',
  props: {
    actionName: String,
    color: String
  },
  setup(props) {
    const getButtonClasses = () => {
      return `focus:outline-none text-white bg-${props.color}-700 hover:bg-${props.color}-800 focus:ring-4 focus:ring-${props.color}-300 font-medium rounded-md text-xs px-3 py-2 dark:bg-${props.color}-600 dark:hover:bg-${props.color}-700 dark:focus:ring-${props.color}-800`;
    };

    return {
      getButtonClasses
    }
  }
});
</script>

