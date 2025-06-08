<template>
  <div class="student-payments">
    <!-- Верхняя панель -->
    <div class="top-bar">
      <h2>Оплаты студентов</h2>

      <div class="search-wrapper">
        <img src="@/assets/logos/search.png" class="search-icon" />
        <input
          v-model="search"
          type="text"
          placeholder="Поиск"
          class="search-input"
        />
      </div>
    </div>

    <!-- Кнопка фильтра -->
    <div class="filter-bar">
      <button class="filter-btn" @click="toggleFilters">
        <img src="@/assets/logos/filter.png" class="filter-icon" />
        Фильтр
      </button>
    </div>

    <!-- 📌 Панель фильтров -->
    <div v-if="filtersVisible" class="filters-box">
      <select v-model="selectedFunding" class="filter-select">
        <option disabled value="">Финансирование</option>
        <option>TechOrda</option>
        <option>Скидка 30%</option>
        <option>Скидка 70%</option>
        <option>Внутренний грант</option>
      </select>

      <select v-model="selectedStatus" class="filter-select">
        <option disabled value="">Статус</option>
        <option>Студент</option>
        <option>Выпускник</option>
      </select>

      <label class="filter-select checkbox-style">
        <input type="checkbox" v-model="withDebt" />
        Только с долгами
      </label>
    </div>

    <!-- Таблица -->
    <table class="student-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Студент</th>
          <th>ИИН</th>
          <th>Финансирование</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in filteredStudents" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.iin }}</td>
          <td>{{ student.source }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const filtersVisible = ref(false)

const selectedFunding = ref('')
const selectedStatus = ref('')
const withDebt = ref(false)

const toggleFilters = () => {
  filtersVisible.value = !filtersVisible.value
}

const students = ref([
  { id: 1, name: 'Абдрахманов Ербол', iin: '990101350128', source: 'Скидка 30%', status: 'Студент', debt: false },
  { id: 2, name: 'Абдулаева Динара', iin: '870213400917', source: 'TechOrda', status: 'Выпускник', debt: true },
  { id: 3, name: 'Абильдаев Тимур', iin: '950624300675', source: 'TechOrda', status: 'Студент', debt: false },
  { id: 4, name: 'Агайдарова Аружан', iin: '010501600338', source: 'Внутренний грант', status: 'Выпускник', debt: true },
  { id: 5, name: 'Адельбеков Рауан Жанатович', iin: '880729450291', source: 'Внутренний грант', status: 'Выпускник', debt: true },
  { id: 6, name: 'Ажигалиева Гульмира Кайратовна', iin: '920912300141', source: 'Скидка 70%', status: 'Выпускник', debt: true },
  { id: 7, name: 'Акимов Николай Артёмович', iin: '011015400976', source: 'Внутренний грант', status: 'Выпускник', debt: true },
  { id: 8, name: 'Алибаева Ляззат Ержановна', iin: '780606350220', source: 'Внутренний грант', status: 'Выпускник', debt: true },

])

const filteredStudents = computed(() =>
  students.value.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesFunding = !selectedFunding.value || s.source === selectedFunding.value
    const matchesStatus = !selectedStatus.value || s.status === selectedStatus.value
    const matchesDebt = !withDebt.value || s.debt === true
    return matchesSearch && matchesFunding && matchesStatus && matchesDebt
  })
)
</script>

<style scoped>
.student-payments {
  padding: 30px;
  font-family: 'Inter', sans-serif;
}

/* Верхняя панель */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.top-bar h2 {
  font-size: 22px;
  font-weight: 600;
  margin: 0;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  pointer-events: none;
}

.search-input {
  padding: 10px 15px 10px 38px;
  font-size: 14px;
  border: 1px solid #cfc0ff;
  border-radius: 10px;
  background-color: #f4f0ff;
  width: 220px;
  outline: none;
  color: #5a4fcf;
}

/* Кнопка фильтра */
.filter-bar {
  display: flex;
  margin-bottom: 10px;
}

.filter-btn {
  background-color: #f4f0ff;
  color: #836eff;
  border: 1px solid #cfc0ff;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.filter-icon {
  width: 18px;
  height: 18px;
}

/* Панель фильтров */
.filters-box {
  background-color: #f4f0ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-select {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #cfc0ff;
  background-color: white;
  font-size: 14px;
  min-width: 150px;
  color: #444;
}

/* чекбокс в виде кнопки */
.checkbox-style {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #cfc0ff;
  background-color: white;
  font-size: 14px;
  min-height: 40px;
  gap: 8px;
  color: #444;
}

/* Таблица */
.student-table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #dcd2ff;
  border-radius: 10px;
  overflow: hidden;
}

.student-table thead {
  background-color: #f8f6ff;
  font-weight: 600;
}

.student-table th,
.student-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}
</style>
