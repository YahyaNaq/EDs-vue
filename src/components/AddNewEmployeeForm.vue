<template>
  <Form @submit="emitAddNewEmployee" class="text-xs p-4 w-full max-w-3xl" :validation-schema="employeeFormValidationSchema">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="fullname">
          Full name
        </label>
        <Field class=" appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white" name="fullname" id="fullname" type="text" placeholder="Jane"/>
        <div class="text-red-700 my-2">
          <ErrorMessage name="fullname" />
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3">
        <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="position">
          Position
        </label>
        <Field class=" appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="position" id="position" type="text" placeholder="Doe"/>
        <div class="text-red-700 my-2">
          <ErrorMessage name="position" />
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="department">
          Department
        </label>
        <div class="relative">
          <Field as="select" class=" block appearance-none w-full bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="department" id="department">
            <option value="" disabled>Select a department</option>
            <option v-for="department in departments" :id="`department.id`" :value="department.name">{{ department.name }}</option>
          </Field>
          <div class="text-red-700 my-2">
            <ErrorMessage name="department" />
          </div>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-end gap-3 flex-wrap -mx-3 mb-0">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 font-bold mb-2" for="salary">
          Salary
        </label>
        <Field class=" appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="salary" id="salary" type="number" placeholder="Salary here"/>
        <div class="text-red-700 my-2">
          <ErrorMessage name="salary" />
        </div>
      </div>
      <div class="my-2 space-x-3">
        <ActionButton
        actionName="Add"
        color="blue"
        type="submit"
        />
        <ActionButton
        actionName="Cancel"
        color="red"
        @click="emitHideForm"
        />
      </div>
    </div>
  </Form>
</template>


<script lang="ts">
import { defineComponent, getCurrentInstance, reactive } from 'vue';
import * as Yup from "yup";
import { ErrorMessage, Field, Form } from "vee-validate";
import ActionButton from '@/components/ActionButton.vue';



// interface EmployeeFormData {
//   fullname: string;
//   position: string;
//   department: string;
//   salary: string;
// };

interface department {
  id: number;
  name: string;
};

export default defineComponent({
  name: 'AddNewEmployeeForm',
  components: {
    ActionButton,
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    departments: Array<department>
  },
  setup() {
    const instance = getCurrentInstance();

    // const formData = reactive<EmployeeFormData>({
    //   fullname: '',
    //   position: '',
    //   department: '',
    //   salary: '',
    // });

    const employeeFormValidationSchema = Yup.object({
      fullname: Yup.string().required().max(35).label('Full name'),
      position: Yup.string().required().label('Position'),
      department: Yup.string().required().label('Department'),
      salary: Yup.number().required().max(5000, 'Max salary is $5000').min(10).label('Salary'),
    });

    const emitHideForm = () => {
      instance?.emit('hide-form');
    };
    const emitAddNewEmployee = (employee: object, { resetForm }) => {
      instance?.emit('add-new-employee', employee);
      resetForm();
    };

    return {
      emitHideForm,
      emitAddNewEmployee,
      employeeFormValidationSchema
    };
  }
});
</script>

