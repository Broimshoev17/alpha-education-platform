<template>
  <div class="reports-page">
    <h2>Отчёты по финансированию</h2>

    <div class="report-tabs">
      <button
        class="report-tab"
        :class="{ active: activeTab === 'techorda' }"
        @click="activeTab = 'techorda'"
      >
        Студенты TechOrda
      </button>
      <button
        class="report-tab"
        :class="{ active: activeTab === 'paid' }"
        @click="activeTab = 'paid'"
      >
        Платные студенты
      </button>
      <button
        class="report-tab"
        :class="{ active: activeTab === 'discount' }"
        @click="activeTab = 'discount'"
      >
        Студенты со скидкой
      </button>
    </div>

    <div class="create-report-wrapper">
      <button class="create-report-btn">Создать отчёт</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('techorda')
</script>

<style scoped>
.reports-page {
  padding: 40px;
  font-family: 'Inter', sans-serif;
}

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
}

.report-tabs {
  display: flex;
  gap: 12px;
  background-color: #f4f0ff;
  padding: 14px;
  border-radius: 12px;
  max-width: 700px;
  margin-bottom: 60px;
}

.report-tab {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background-color: white;
  color: #836eff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.report-tab.active {
  background-color: #836eff;
  color: white;
}

.create-report-wrapper {
  display: flex;
  justify-content: flex-end;
}

.create-report-btn {
  padding: 10px 20px;
  background-color: #836eff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}
</style>
