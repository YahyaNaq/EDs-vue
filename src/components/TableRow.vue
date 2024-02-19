<template>
  <!-- <td class="w-4 p-4">
    <div class="flex items-center">
      <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
    </div>
  </td> -->
  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    {{employee?.fullname}}
  </th>
  <td class="px-6 py-4">
    {{employee?.position}}
  </td>
  <td class="px-6 py-4">
    {{employee?.department}}
  </td>
  <td class="px-6 py-4">
    {{employee?.salary}}
  </td>
  <td class="px-6 py-4">
    <div class="relative inline-block text-left">
      <div>
        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Actions
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
          <form method="POST" action="#" role="none">
            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Delete</button>
          </form>
        </div>
      </div>
    </div>

  </td>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
// import TableRow from '@/components/TableRow.vue';

export default defineComponent({
  name: 'TableRow',
  props: {
    employee: Object  
  },
  setup(props) {
    
  }
});
</script>

