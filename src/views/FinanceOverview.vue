<template>
  <div class="overview-page">
    <h2>Финансовый обзор</h2>

<!-- Карточки -->
  <div class="cards">
    <div class="card revenue-card">
      <div class="icon-circle green">
        <span>$</span>
      </div>
    <div class="label">Общая выручка</div>
    <div class="value">5 000 900 тг</div>
    <div class="growth"><span class="up">↑ 12%</span> с прошлого месяца</div>
  </div>
    <div class="card debt-card">
      <div class="icon-circle red">
        <span>!</span>
      </div>
    <div class="label">Общая задолженность</div>
    <div class="value">1 000 900 тг</div>
    <div class="growth"><span class="up">↑ 12%</span> с прошлого месяца</div>
  </div>
  </div>

<!-- Диаграмма -->
  <div class="chart-card">
    <div class="chart-title">Соотношение оплат</div>
  <div class="chart-content">
    <canvas id="pieChart" width="200" height="200"></canvas>
  <div class="legend">
    <div><span class="dot purple1"></span> Платно — 3 000 000тг</div>
    <div><span class="dot purple2"></span> TechOrda — 1 500 000тг</div>
    <div><span class="dot purple3"></span> Со скидкой — 500 900тг</div>
  </div>
  </div>
  </div>
  </div>
</template>

<!-- Script -->
<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

onMounted(() => {
  const ctx = document.getElementById('pieChart')
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Платно', 'TechOrda', 'Со скидкой'],
      datasets: [{
        data: [3000000, 1500000, 500900],
        backgroundColor: ['#cfc0ff', '#836eff', '#a592f7'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '70%',
      plugins: {
        legend: { display: false }
      }
    }
  })
})
</script>

<!-- Styles -->
<style scoped>
.overview-page {
  padding: 40px;
  font-family: 'Inter', sans-serif;
}

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
}

.cards {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  flex: 1;
  border: 1px solid #dcd2ff;
  border-radius: 12px;
  padding: 20px;
  background-color: white;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 10px;
}

.icon-circle.green {
  background-color: #30c05a;
}

.icon-circle.red {
  background-color: #f95b5b;
}

.label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}

.value {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
}

.growth {
  font-size: 13px;
  color: #5cb85c;
}

.up {
  font-weight: 600;
}

.chart-card {
  border: 1px solid #dcd2ff;
  border-radius: 12px;
  padding: 20px;
  background-color: white;
  max-width: 620px;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}

.chart-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #444;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.purple1 {
  background-color: #cfc0ff;
}

.purple2 {
  background-color: #836eff;
}

.purple3 {
  background-color: #a592f7;
}
</style>
