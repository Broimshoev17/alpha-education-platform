<template>
  <div class="finance-container">
    <!-- Левая панель -->
    <div class="sidebar" v-if="showSidebar">
      <div class="header">
        <h2>Финансовый модуль</h2>
        <button class="close-btn" @click="closeSidebar">✕</button>
      </div>
      <div class="button-group">
        <!-- ✅ Кнопка "Финансовый обзор" -->
        <router-link to="/finance/overview" class="finance-btn">
          Финансовый обзор
        </router-link>

        <!-- ✅ Кнопка оплаты студентов -->
        <router-link to="/finance/payments" class="finance-btn">
          Оплаты студентов
        </router-link>

        <!-- ✅ Кнопка отчётов -->
        <router-link to="/finance/reports" class="finance-btn">
          Отчёты
        </router-link>
      </div>
    </div>
    <!-- Правая часть (можно вставить кнопку для повторного открытия) -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSidebar = ref(true)

function closeSidebar() {
  showSidebar.value = false
}

function openSidebar() {
  showSidebar.value = true
}
</script>

<style scoped>
.finance-container {
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Inter', sans-serif;
}

.sidebar {
  width: 280px;
  background-color: white;
  padding: 24px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header h2 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background-color: #f4f0ff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #836eff;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.finance-btn {
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  padding: 10px 14px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: block;
  text-decoration: none;
  color: inherit;
}

.finance-btn:hover {
  background-color: #f0f0f0;
}

.main-content {
  flex-grow: 1;
  padding: 40px;
  background-color: #f8f9fa;
  display: flex;
  align-items: flex-start;
}

.open-btn {
  padding: 10px 20px;
  background-color: #836eff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}
</style>
