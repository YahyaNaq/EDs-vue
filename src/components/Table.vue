<template>
  <div class="p-4 text-left">
    <DataTable
    :value="employees" 
    tableStyle="min-width: 50rem"
    showGridlines
    stripedRows
    >
      <template #header>
          <div class="flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
              <span class="text-xl uppercase text-900 font-semibold">Employees</span>
          </div>
      </template>
      <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
    </DataTable>
  </div>

  <table class="h-10 w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <!-- <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-all-search" class="sr-only">checkbox</label>
          </div>
        </th> -->
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Position
        </th>
        <th scope="col" class="px-6 py-3">
          Department
        </th>
        <th scope="col" class="px-6 py-3">
          Salary ($)
        </th>
        <th scope="col" class="px-6 py-3 sr-only">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr :key="employee.id" v-for="employee in employees"
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <TableRow :employee="employee"/>
      </tr>
    </tbody>
  </table>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import TableRow from '@/components/TableRow.vue';
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import type Employee from '@/interfaces/Employee.ts';

export default defineComponent({
  name: 'Table',
  components: {
    TableRow,
    DataTable,
    Column
  },
  props: {
    employees: Array<Employee>
  },
  setup() {
    const columns = [
    { field: 'fullname', header: 'Fullname' },
    { field: 'position', header: 'Position' },
    { field: 'department', header: 'Department' },
    { field: 'salary', header: 'Salary' }
    ];

    return {
      columns
    };
    
  }
});
</script>

