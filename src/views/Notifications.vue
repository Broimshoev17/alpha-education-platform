<!-- <template>
  <div class="notifications-page">
    <h2>Уведомления</h2>
    <ul>
      <li v-for="(n, index) in notifications" :key="index">
        <span>{{ n.text }}</span>
        <small>{{ n.time }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
  { text: 'Новый студент зарегистрирован', time: '1 мин назад' },
  { text: 'Обновлена информация об оплате', time: '10 мин назад' },
])
</script>

<style scoped>
.notifications-page {
  padding: 30px;
  font-family: 'Inter', sans-serif;
}

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f4f0ff;
  margin-bottom: 12px;
  padding: 14px;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
</style> -->
