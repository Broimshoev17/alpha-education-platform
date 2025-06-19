<template>
  <div>
<!-- Page Title -->
  <h2 class="text-2xl font-bold mb-2">Профиль студента</h2>

<!-- Student Full Name -->
  <h3 class="text-xl font-semibold mb-4">{{ student?.name }}</h3>

<!-- Subtitle -->
  <p class="text-gray-500 mb-6">Информация студента</p>

<!-- Info Grid -->
  <div class="grid grid-cols-2 gap-y-4 gap-x-8 max-w-xl">
    <span class="font-medium">ИИН</span>
    <span>{{ student?.iin }}</span>
    <span class="font-medium">Email</span>
    <span class="font-medium">Телефон</span>   
    <span class="font-medium">Status</span>
    <span class="capitalize">{{ student?.status }}</span>
    <span class="font-medium">Top Student</span>     
    <span class="font-medium">Финансирование</span>     
    <span class="font-medium">Сумма оплачено</span>  
    <span class="font-medium">Сумма осталось</span>
    <span class="font-medium">Привязка к потоку</span>
    <span>{{ student?.stream }}</span>
    <span class="font-medium">Поток</span>   
  </div>
  </div>
</template>

<!-- Script -->
<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStudentStore } from '@/store/studentStore'

const route = useRoute()
const store = useStudentStore()
const id = route.params.id as string

onMounted(() => {
  if (!store.list.length) {
    store.fetchStudents()
  }
})

const student = computed(() => {
  return store.list.find(s => s.id.toString() === id)
})
</script>

<!--Styles-->
<style scoped>

</style>
