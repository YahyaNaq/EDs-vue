<template>
  <div class="mt-12 border-gray-200 border-2 rounded-lg max-w-4xl mx-auto mb-8">
    <div class="flex items-center gap-2 mx-4 mt-4">
      <h1 class="text-lg font-semibold uppercase">List of Employees</h1>
      <ActionButton
      v-if="!showCreateForm"
      @click="toggleCreateForm"
      actionName="Add new"
      color="green"
      />
    </div>
    <AddNewEmployeeForm
    v-if="showCreateForm"
    :departments="departments"
    @hide-form="toggleCreateForm"
    @add-new-employee="addNewEmployee"
    />
	  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <SearchBar @search="handleSearch" />
      <Table :employees="filteredEmployees"/>
      <div v-if="!filteredEmployees.length" class="py-12 text-center font-medium text-gray-500">
        <h1>No employees found</h1>
      </div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Table from '@/components/Table.vue';
import SearchBar from '@/components/SearchBar.vue';
import AddNewEmployeeForm from '@/components/AddNewEmployeeForm.vue';
import ActionButton from '@/components/ActionButton.vue';

interface Employee {
  id?: number;
  fullname: string;
  position: string;
  department: string;
  salary: string;
};

export default defineComponent({
  name: 'App',
  components: {
    Table,
    SearchBar,
    ActionButton,
    AddNewEmployeeForm
  },
  setup() {
    const employees = ref<Employee[]>([
      {
        id: 1,
        fullname: 'Yahya',
        position: 'Software Engineer',
        department: 'Information Technology',
        salary: '1000',
      },
      {
        id: 2,
        fullname: 'Turgut',
        position: 'Executive',
        department: 'Human Resource',
        salary: '500',
      },
      {
        id: 3,
        fullname: 'Ahmed',
        position: 'Director',
        department: 'Operations',
        salary: '800',
      },
    ]);

    const departments = [
      {
        id: 1,
        name: 'Information Technology',
      },
      {
        id: 1,
        name: 'Human Resources',
      },
      {
        id: 1,
        name: 'Operations',
      },
      {
        id: 1,
        name: 'Sales & Marketing',
      },
      {
        id: 1,
        name: 'Finance',
      },
    ];
    
    const searchVal = ref('');
    const showCreateForm = ref(false);

    const filteredEmployees = computed(() => {
      return employees.value.filter((employee) => {
        return employee.fullname.toLowerCase().includes(searchVal.value.toLowerCase());
      });
    });

    const handleSearch = (query: string) => {
      searchVal.value = query;
    };

    const toggleCreateForm = () => {
      showCreateForm.value = !showCreateForm.value;
    };

    const addNewEmployee = (newEmployee: Employee) => {
      newEmployee.id = employees.value.length + 1;
      console.log('new',newEmployee);
      employees.value.push(newEmployee);
      
    };

    return {
      filteredEmployees,
      showCreateForm,
      departments,
      handleSearch,
      addNewEmployee,
      toggleCreateForm,
    }
  },
});
</script>
