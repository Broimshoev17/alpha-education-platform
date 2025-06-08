// src/store/studentStore.ts
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student', {
  state: () => ({
    list: [] as Array<{
      id: number
      name: string
      iin: string
      stream: string
      status: string
    }>,
    loading: false,
  }),
  actions: {
    async fetchStudents() {
      this.loading = true
      // ← TODO: replace with your real API call, e.g.:
      // const data = await axios.get('/api/students')
      // this.list = data.data
      await new Promise(r => setTimeout(r, 500)) 
      // example stub:
      this.list = [
        { id: 1, name: 'Иван Иванов', iin: '111111111111', stream: 'A1', status: 'active' },
        { id: 2, name: 'Пётр Петров', iin: '222222222222', stream: 'B2', status: 'graduated' },
      ]
      this.loading = false
    },
  },
})

