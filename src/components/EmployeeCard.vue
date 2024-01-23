<template>
    <ul>
      <li v-for="emp in filteredEmployees" :key="emp">
        {{ emp }}
      </li>
    </ul>
</template>

<script lang="ts">
import { textSpanIntersectsWith } from 'typescript';


export default {
    name: 'EmployeeCard',

};

</script>