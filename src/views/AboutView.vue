<template>
  <div class="about">
    <input type="search" placeholder="search employees" v-model="searchVal" @input="searchEmployees">
    <EmployeeCard />
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { EmployeeCard } from './EmployeeCard.vue';

let searchVal = ref('');

let employees = [
  'John Doe',
  'Jane Doe',
  'Jenny Lane',
  'Roberto Lewis',
  'James Neil'
];

let filteredEmployees = ref(employees);

let searchEmployees = () => {
  filteredEmployees.value = employees.filter((emp) => emp.toLowerCase().includes(searchVal.value.toLowerCase()));
};

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
